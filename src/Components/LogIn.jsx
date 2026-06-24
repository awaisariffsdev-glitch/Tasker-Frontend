
import { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from "react-toastify"; // ✅ Only import toast (removed ToastContainer since it's now in App.js)
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../Context/UserContext';

function LogIn() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { setUser, setLoggedIn, setCurrent } = useContext(UserContext);

  const handleClose = () => {
    if (loading) return;
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const resetForm = () => {
    setForm({ email: "", password: "" });
    setShowPassword(false);
  };

  const validate = () => {
    if (!form.email || !form.password) {
      return "All fields are required";
    }
    if (!form.email.toLowerCase().includes("@gmail.com")) {
      return "Email must be a valid @gmail.com address";
    }
    return "";
  };

  const handleChanges = (e) => {
    if (formError) setFormError("");
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async () => {
    const validationError = validate();
    if (validationError) {
      setFormError(validationError);
      toast.error(validationError);
      return;
    }

    setFormError("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/user/logIn", {
        email: form.email,
        password: form.password
      });

      const token = response.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      setLoggedIn(true);
      setCurrent(response.data.user);

      // 1. Show the success toast
      toast.success("Logged in successfully");

      resetForm();
      handleClose();

      // 2. Delay the page reload slightly so the user sees the toast
      setTimeout(() => {
        // window.location.reload();
      }, 1200); // 1.2 second delay

    } catch (error) {
      // ✅ Fixed: defined the error message properly to prevent crash
      const message = error?.response?.data?.message || error?.message || "Invalid Credentials";
      setFormError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        :root {
          --bg-dark: #1a1a1a;
          --bg-darker: #111111;
          --paper: #ffffff;
          --accent: #ffffff;
          --line: #333333;
          --muted: #9a9a9a;
          --error: #ff6b6b;
          --error-bg: #2a1414;
        }

        .login-trigger {
          background-color: white !important;
          border: 1px solid #333 !important;
          letter-spacing: 0.04em;
          font-size: 0.85rem;
          font-weight: 500;
          padding: 0.5rem 1.6rem !important;
          border-radius: 50px !important;
          color: #000000 !important;
          transition: background-color 0.2s ease, transform 0.15s ease;
        }
        .login-trigger:hover {
          transform: translateY(-1px);
        }

        .login-modal .modal-content {
          border: none;
          border-radius: 24px;
          overflow: hidden;
          background-color: var(--bg-dark);
        }

        .login-modal .modal-header {
          background-color: var(--bg-dark);
          border-bottom: 1px solid var(--line);
          padding: 1.6rem 2rem 1.2rem;
        }
        .login-modal .modal-header .btn-close {
          filter: invert(1) grayscale(1) brightness(2);
          opacity: 0.7;
        }
        .login-modal .modal-title {
          font-family: 'Segoe UI', Arial, sans-serif;
          font-size: 1.4rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          color: #fff;
        }
        .login-modal .modal-eyebrow {
          color: var(--muted);
          text-transform: uppercase;
          font-size: 0.68rem;
          letter-spacing: 0.16em;
          font-weight: 600;
          display: block;
          margin-bottom: 0.35rem;
        }

        .login-modal .modal-body {
          padding: 1.6rem 2rem 0.5rem;
        }

        .login-modal .form-floating {
          margin-bottom: 1.15rem;
          position: relative;
        }
        .login-modal .form-control {
          border: 1px solid var(--line);
          border-radius: 14px;
          background-color: #222222;
          color: #fff;
          padding-left: 1rem;
          font-size: 0.95rem;
        }
        .login-modal .form-control:focus {
          box-shadow: none;
          border-color: #666;
          background-color: #222222;
          color: #fff;
        }
        .login-modal .form-control::placeholder {
          color: #666;
        }
        .login-modal .form-floating > label {
          padding-left: 1rem;
          color: var(--muted);
          font-size: 0.85rem;
        }
        .login-modal .form-floating > .form-control:focus ~ label,
        .login-modal .form-floating > .form-control:not(:placeholder-shown) ~ label {
          color: #ccc;
          font-weight: 500;
        }

        .login-modal .form-control:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }

        .password-field .form-control {
          padding-right: 2.4rem;
        }
        .password-toggle {
          position: absolute;
          top: 0;
          right: 0.3rem;
          height: 100%;
          display: flex;
          align-items: center;
          background: none;
          border: none;
          color: var(--muted);
          cursor: pointer;
          padding: 0 0.5rem;
          z-index: 5;
        }
        .password-toggle:hover {
          color: #fff;
        }
        .field-hint {
          font-size: 0.72rem;
          color: var(--muted);
          margin: -0.85rem 0 1.1rem 0.2rem;
        }

        .login-forgot {
          text-align: right;
          margin: -0.6rem 0 1.1rem;
        }
        .login-forgot button {
          background: none;
          border: none;
          color: var(--muted);
          font-size: 0.78rem;
          padding: 0;
          cursor: pointer;
        }
        .login-forgot button:hover {
          color: #fff;
          text-decoration: underline;
        }

        .form-error-alert {
          background-color: var(--error-bg);
          border: 1px solid var(--error);
          color: var(--error);
          font-size: 0.82rem;
          font-weight: 500;
          border-radius: 12px;
          padding: 0.6rem 0.9rem;
          margin-top: 0.4rem;
        }

        .login-modal .modal-footer {
          border-top: 1px solid var(--line);
          padding: 1.1rem 2rem 1.5rem;
        }
        .btn-close-secondary {
          background: none !important;
          border: none !important;
          color: var(--muted) !important;
          font-size: 0.82rem;
        }
        .btn-close-secondary:hover {
          color: #fff !important;
        }
        .btn-register {
          background-color: #fff !important;
          color: #1a1a1a !important;
          border: none !important;
          letter-spacing: 0.03em;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 0.55rem 1.6rem !important;
          border-radius: 50px !important;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          min-width: 120px;
          justify-content: center;
        }
        .btn-register:hover {
          background-color: #e8e8e8 !important;
        }
        .btn-register:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>

      <Button className="login-trigger" onClick={handleShow}>
        LogIn
      </Button>

      <Modal show={show} onHide={loading ? undefined : handleClose} centered className="login-modal" backdrop={loading ? "static" : true}>
        {/* ✅ Removed <ToastContainer> from here as it is already configured globally in App.js */}

        <Modal.Header closeButton={!loading}>
          <div>
            <span className="modal-eyebrow">Welcome back</span>
            <Modal.Title>Log In</Modal.Title>
          </div>
        </Modal.Header>

        <Modal.Body>
          <fieldset disabled={loading} style={{ border: 'none', padding: 0, margin: 0 }}>
            <form action="">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  onChange={handleChanges}
                  className="form-control"
                  name="email"
                  id="login-email"
                  placeholder=""
                  value={form.email}
                />
                <label htmlFor="login-email">E-mail</label>
              </div>

              <div className="form-floating mb-3 password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  onChange={handleChanges}
                  className="form-control"
                  name="password"
                  id="login-password"
                  placeholder=""
                  value={form.password}
                />
                <label htmlFor="login-password">Password</label>
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  disabled={loading}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>

              <div className="login-forgot">
                <button type="button" disabled={loading}>Forgot password?</button>
              </div>

              {formError && (
                <div className="form-error-alert" role="alert">
                  {formError}
                </div>
              )}
            </form>
          </fieldset>
        </Modal.Body>

        <Modal.Footer>
          <Button className="btn-close-secondary" onClick={handleClose} disabled={loading}>
            Cancel
          </Button>
          <Button className="btn-register" type='submit' onClick={handleSubmit} disabled={loading}>
            {loading ? (
              <>Loading...</>
            ) : (
              "Log In"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogIn;