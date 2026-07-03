// // import { useState } from 'react';
// // import Button from 'react-bootstrap/Button';
// // import Modal from 'react-bootstrap/Modal';
// // import ToastContainer from 'react-bootstrap/ToastContainer';
// // import Toast from 'react-bootstrap/Toast';
// // import axios from 'axios';

// // function SignUp() {
// //     const [show, setShow] = useState(false);
// //     const handleClose = () => {
// //         setShow(false);
// //         setErrors({});
// //     };
// //     const handleShow = () => setShow(true);

// //     const [form, setForm] = useState({
// //         image: "",
// //         fullname: "",
// //         email: "",
// //         contact: "",
// //         password: ""
// //     });

// //     const [errors, setErrors] = useState({});
// //     const [loading, setLoading] = useState(false);

// //     const [toast, setToast] = useState({ show: false, message: "", variant: "danger" });
// //     const showToast = (message, variant = "danger") => {
// //         setToast({ show: true, message, variant });
// //     };

// //     const handleChange = (e) => {
// //         const { name, value, files } = e.target;
// //         setForm((prev) => ({
// //             ...prev,
// //             [name]: files ? files[0] : value
// //         }));
// //         // clear field error as user types/uploads
// //         setErrors((prev) => ({ ...prev, [name]: "" }));
// //     };

// //     const validate = () => {
// //         const newErrors = {};

// //         if (!form.fullname.trim()) {
// //             newErrors.fullname = "Full name is required";
// //         }

// //         const emailRegex = /^[^\s@]+@gmail\.com$/i;
// //         if (!form.email.trim()) {
// //             newErrors.email = "Email is required";
// //         } else if (!emailRegex.test(form.email.trim())) {
// //             newErrors.email = "Email must be a valid @gmail.com address";
// //         }

// //         if (!form.contact.trim()) {
// //             newErrors.contact = "Phone number is required";
// //         }

// //         const specialCharRegex = /[!@#$%^&*(),.?":{}|<>_\-+=~`[\]/\\;']/;
// //         if (!form.password) {
// //             newErrors.password = "Password is required";
// //         } else if (form.password.length < 6) {
// //             newErrors.password = "Password must be at least 6 characters";
// //         } else if (!specialCharRegex.test(form.password)) {
// //             newErrors.password = "Password must contain at least one special character";
// //         }

// //         setErrors(newErrors);
// //         return Object.keys(newErrors).length === 0;
// //     };

// //     const handleSubmit = async () => {
// //         if (!validate()) {
// //             return;
// //         }

// //         const formData = new FormData();
// //         formData.append("image", form.image);
// //         formData.append("fullname", form.fullname);
// //         formData.append("email", form.email);
// //         formData.append("contact", form.contact);
// //         formData.append("password", form.password);

// //         try {
// //             setLoading(true);
// //             await axios.post("http://localhost:8080/user/signUp", formData);
// //             showToast("Account created successfully!", "success");
// //             setForm({ image: "", fullname: "", email: "", contact: "", password: "" });
// //             handleClose();
// //         } catch (err) {
// //             if (err.response?.status === 409) {
// //                 showToast("User already exists with this email.", "danger");
// //             } else if (err.response?.data?.message) {
// //                 showToast(err.response.data.message, "danger");
// //             } else {
// //                 showToast("Server error. Please try again later.", "danger");
// //             }
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     return (
// //         <>
// //             <Button className="pill-btn-dark" onClick={handleShow}>
// //                 SignUp
// //             </Button>

// //             <Modal show={show} onHide={handleClose} centered className="pill-modal">
// //                 <Modal.Header closeButton>
// //                     <Modal.Title>Personal Details</Modal.Title>
// //                 </Modal.Header>
// //                 <Modal.Body>
// //                     <form>
// //                         <div className="mb-3">
// //                             <label htmlFor="image" className="form-label">Choose file</label>
// //                             <input
// //                                 type="file"
// //                                 onChange={handleChange}
// //                                 className="form-control"
// //                                 name="image"
// //                                 id="image"
// //                                 aria-describedby="fileHelpId"
// //                             />
// //                         </div>

// //                         <div className="form-floating mb-3">
// //                             <input
// //                                 type="text"
// //                                 onChange={handleChange}
// //                                 value={form.fullname}
// //                                 className={`form-control ${errors.fullname ? "is-invalid" : ""}`}
// //                                 name="fullname"
// //                                 id="fullname"
// //                                 placeholder="Full Name"
// //                             />
// //                             <label htmlFor="fullname">Full Name</label>
// //                             {errors.fullname && <div className="field-error">{errors.fullname}</div>}
// //                         </div>

// //                         <div className="form-floating mb-3">
// //                             <input
// //                                 type="email"
// //                                 onChange={handleChange}
// //                                 value={form.email}
// //                                 className={`form-control ${errors.email ? "is-invalid" : ""}`}
// //                                 name="email"
// //                                 id="email"
// //                                 placeholder="E-mail"
// //                             />
// //                             <label htmlFor="email">E-mail</label>
// //                             {errors.email && <div className="field-error">{errors.email}</div>}
// //                         </div>

// //                         <div className="form-floating mb-3">
// //                             <input
// //                                 type="number"
// //                                 onChange={handleChange}
// //                                 value={form.contact}
// //                                 className={`form-control ${errors.contact ? "is-invalid" : ""}`}
// //                                 name="contact"
// //                                 id="contact"
// //                                 placeholder="Phone Number"
// //                             />
// //                             <label htmlFor="contact">Phone Number</label>
// //                             {errors.contact && <div className="field-error">{errors.contact}</div>}
// //                         </div>

// //                         <div className="form-floating mb-3">
// //                             <input
// //                                 type="password"
// //                                 onChange={handleChange}
// //                                 value={form.password}
// //                                 className={`form-control ${errors.password ? "is-invalid" : ""}`}
// //                                 name="password"
// //                                 id="password"
// //                                 placeholder="Password"
// //                             />
// //                             <label htmlFor="password">Password</label>
// //                             {errors.password && <div className="field-error">{errors.password}</div>}
// //                         </div>
// //                     </form>
// //                 </Modal.Body>
// //                 <Modal.Footer>
// //                     <Button className="pill-btn-outline" onClick={handleClose}>
// //                         Close
// //                     </Button>
// //                     <Button className="pill-btn-dark" onClick={handleSubmit} disabled={loading}>
// //                         {loading ? "Saving..." : "Save Changes"}
// //                     </Button>
// //                 </Modal.Footer>
// //             </Modal>

// //             <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9999 }}>
// //                 <Toast
// //                     bg={toast.variant}
// //                     onClose={() => setToast((prev) => ({ ...prev, show: false }))}
// //                     show={toast.show}
// //                     delay={4000}
// //                     autohide
// //                 >
// //                     <Toast.Header closeButton>
// //                         <strong className="me-auto">
// //                             {toast.variant === "success" ? "Success" : "Error"}
// //                         </strong>
// //                     </Toast.Header>
// //                     <Toast.Body className={toast.variant === "danger" || toast.variant === "success" ? "text-white" : ""}>
// //                         {toast.message}
// //                     </Toast.Body>
// //                 </Toast>
// //             </ToastContainer>

// //             <style>{`
// //                 .pill-btn-dark {
// //                     background-color: #15161a !important;
// //                     border: none !important;
// //                     border-radius: 999px !important;
// //                     padding: 8px 22px !important;
// //                     font-weight: 500;
// //                     transition: opacity 0.15s ease;
// //                 }
// //                 .pill-btn-dark:hover,
// //                 .pill-btn-dark:focus {
// //                     background-color: #2a2b30 !important;
// //                     box-shadow: none !important;
// //                 }
// //                 .pill-btn-dark:disabled {
// //                     opacity: 0.6;
// //                 }

// //                 .pill-btn-outline {
// //                     background-color: transparent !important;
// //                     border: 1.5px solid #15161a !important;
// //                     color: #15161a !important;
// //                     border-radius: 999px !important;
// //                     padding: 8px 22px !important;
// //                     font-weight: 500;
// //                 }
// //                 .pill-btn-outline:hover {
// //                     background-color: #f1f1f3 !important;
// //                     color: #15161a !important;
// //                 }

// //                 .pill-modal .modal-content {
// //                     border-radius: 24px;
// //                     border: none;
// //                     overflow: hidden;
// //                     box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
// //                 }

// //                 .pill-modal .modal-header {
// //                     background-color: #15161a;
// //                     color: #fff;
// //                     border-bottom: none;
// //                     padding: 20px 24px;
// //                 }

// //                 .pill-modal .modal-header .btn-close {
// //                     filter: invert(1);
// //                 }

// //                 .pill-modal .modal-title {
// //                     font-weight: 600;
// //                 }

// //                 .pill-modal .modal-body {
// //                     padding: 24px;
// //                 }

// //                 .pill-modal .form-control {
// //                     border-radius: 14px;
// //                     border: 1.5px solid #e2e2e6;
// //                     padding: 0.85rem 1rem;
// //                 }

// //                 .pill-modal .form-control:focus {
// //                     border-color: #15161a;
// //                     box-shadow: 0 0 0 3px rgba(21, 22, 26, 0.1);
// //                 }

// //                 .pill-modal .form-control.is-invalid {
// //                     border-color: #dc3545;
// //                     background-image: none;
// //                 }

// //                 .pill-modal .form-floating > label {
// //                     color: #8a8a92;
// //                 }

// //                 .pill-modal .field-error {
// //                     color: #dc3545;
// //                     font-size: 0.8rem;
// //                     margin-top: 4px;
// //                     padding-left: 4px;
// //                 }

// //                 .pill-modal .modal-footer {
// //                     border-top: none;
// //                     padding: 16px 24px 24px;
// //                 }
// //             `}</style>
// //         </>
// //     );
// // }

// // export default SignUp;





// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { ToastContainer, toast } from "react-toastify";
// import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';



// const SPECIAL_CHAR_REGEX = /[!@#$%^&*(),.?":{}|<>_\-+=~`[\]/;]/;

// function SignUp() {
//     const [show, setShow] = useState(false);
//     const [preview, setPreview] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [formError, setFormError] = useState("");
//     const [showPassword, setShowPassword] = useState(false);

//     const handleClose = () => {
//         if (loading) return;
//         setShow(false);
//     };
//     const handleShow = () => setShow(true);

//     const [form, setForm] = useState({
//         fullname: "",
//         email: "",
//         contact: "",
//         image: "",
//         password: ""
//     });

//     const resetForm = () => {
//         setForm({
//             fullname: "",
//             email: "",
//             contact: "",
//             image: "",
//             password: ""
//         });
//         setPreview(null);
//         setShowPassword(false);
//     };

//     const validate = () => {
//         if (!form.fullname || !form.email || !form.password) {
//             return "All Fields Are Required";
//         }
//         if (!form.email.toLowerCase().includes("@gmail.com")) {
//             return "Email must be a valid @gmail.com address";
//         }
//         if (!SPECIAL_CHAR_REGEX.test(form.password)) {
//             return "Password must contain at least one special character";
//         }
//         return "";
//     };

//     const handleSubmit = async () => {
//         const validationError = validate();
//         if (validationError) {
//             setFormError(validationError);
//             toast.error(validationError);
//             return;
//         }

//         setFormError("");
//         setLoading(true);

//         try {
//             const newForm = new FormData();
//             newForm.append("fullname", form.fullname);
//             newForm.append("email", form.email);
//             newForm.append("contact", form.contact);
//             newForm.append("image", form.image);
//             newForm.append("password", form.password);

//             const response = await axios.post("http://localhost:8080/user/signUp", newForm);

//             toast.success(response.data.Message || "Account created successfully");
//             resetForm();
//             handleClose();
//         } catch (error) {
//             setFormError(message);
//             toast.error(message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleChanges = (e) => {
//         if (formError) setFormError("");

//         if (e.target.type === "file") {
//             setForm((prev) => ({
//                 ...prev,
//                 image: e.target.files[0]
//             }));
//         } else {
//             setForm((prev) => ({
//                 ...prev,
//                 [e.target.name]: e.target.value
//             }));
//         }
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files?.[0];
//         if (file) setPreview(URL.createObjectURL(file));
//         handleChanges(e);
//     };

//     return (
//         <>
//             <style>{`
//         :root {
//           --bg-dark: #1a1a1a;
//           --bg-darker: #111111;
//           --paper: #ffffff;
//           --accent: #ffffff;
//           --line: #333333;
//           --muted: #9a9a9a;
//           --error: #ff6b6b;
//           --error-bg: #2a1414;
//         }

//         .signup-trigger {
//           background-color: white!important;
//           border: 1px solid #323232 !important;
//           letter-spacing: 0.04em;
//           font-size: 0.85rem;
//           font-weight: 500;
//           padding: 0.5rem 1.6rem !important;
//           border-radius: 50px !important;
//           color: #000000 !important;
//           transition: background-color 0.2s ease, transform 0.15s ease;
//         }
//         .signup-trigger:hover {

//           transform: translateY(-1px);
//         }

//         .signup-modal .modal-content {
//           border: none;
//           border-radius: 24px;
//           overflow: hidden;
//           background-color: var(--bg-dark);
//         }

//         .signup-modal .modal-header {
//           background-color: var(--bg-dark);
//           border-bottom: 1px solid var(--line);
//           padding: 1.6rem 2rem 1.2rem;
//         }
//         .signup-modal .modal-header .btn-close {
//           filter: invert(1) grayscale(1) brightness(2);
//           opacity: 0.7;
//         }
//         .signup-modal .modal-title {
//           font-family: 'Segoe UI', Arial, sans-serif;
//           font-size: 1.4rem;
//           font-weight: 600;
//           letter-spacing: 0.01em;
//           color: #fff;
//         }
//         .signup-modal .modal-eyebrow {
//           color: var(--muted);
//           text-transform: uppercase;
//           font-size: 0.68rem;
//           letter-spacing: 0.16em;
//           font-weight: 600;
//           display: block;
//           margin-bottom: 0.35rem;
//         }

//         .signup-modal .modal-body {
//           padding: 1.6rem 2rem 0.5rem;
//         }

//         .avatar-row {
//           display: flex;
//           align-items: center;
//           gap: 1.1rem;
//           margin-bottom: 1.6rem;
//         }
//         .avatar-circle {
//           width: 64px;
//           height: 64px;
//           border-radius: 50%;
//           border: 1.5px dashed #444;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-shrink: 0;
//           overflow: hidden;
//           background-color: #222;
//           color: var(--muted);
//           font-size: 0.7rem;
//           text-align: center;
//           line-height: 1.1;
//         }
//         .avatar-circle img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }
//         .avatar-label {
//           font-size: 0.78rem;
//           color: #fff;
//           font-weight: 600;
//           margin-bottom: 0.2rem;
//         }
//         .avatar-hint {
//           font-size: 0.74rem;
//           color: var(--muted);
//           margin-bottom: 0;
//         }
//         .avatar-input {
//           display: none;
//         }
//         .avatar-button {
//           display: inline-block;
//           font-size: 0.72rem;
//           font-weight: 600;
//           letter-spacing: 0.03em;
//           color: #fff;
//           border: 1px solid #444;
//           border-radius: 20px;
//           padding: 0.25rem 0.8rem;
//           cursor: pointer;
//           margin-top: 0.35rem;
//           background: transparent;
//           transition: background-color 0.15s ease;
//         }
//         .avatar-button:hover {
//           background-color: #2a2a2a;
//         }

//         .signup-modal .form-floating {
//           margin-bottom: 1.15rem;
//           position: relative;
//         }
//         .signup-modal .form-control {
//           border: 1px solid var(--line);
//           border-radius: 14px;
//           background-color: #222222;
//           color: #fff;
//           padding-left: 1rem;
//           font-size: 0.95rem;
//         }
//         .signup-modal .form-control:focus {
//           box-shadow: none;
//           border-color: #666;
//           background-color: #222222;
//           color: #fff;
//         }
//         .signup-modal .form-control::placeholder {
//           color: #666;
//         }
//         .signup-modal .form-floating > label {
//           padding-left: 1rem;
//           color: var(--muted);
//           font-size: 0.85rem;
//         }
//         .signup-modal .form-floating > .form-control:focus ~ label,
//         .signup-modal .form-floating > .form-control:not(:placeholder-shown) ~ label {
//           color: #ccc;
//           font-weight: 500;
//         }

//         .signup-modal .form-control:disabled {
//           opacity: 0.55;
//           cursor: not-allowed;
//         }

//         .password-field .form-control {
//           padding-right: 2.4rem;
//         }
//         .password-toggle {
//           position: absolute;
//           top: 0;
//           right: 0.3rem;
//           height: 100%;
//           display: flex;
//           align-items: center;
//           background: none;
//           border: none;
//           color: var(--muted);
//           cursor: pointer;
//           padding: 0 0.5rem;
//           z-index: 5;
//         }
//         .password-toggle:hover {
//           color: #fff;
//         }
//         .field-hint {
//           font-size: 0.72rem;
//           color: var(--muted);
//           margin: -0.85rem 0 1.1rem 0.2rem;
//         }

//         .form-error-alert {
//           background-color: var(--error-bg);
//           border: 1px solid var(--error);
//           color: var(--error);
//           font-size: 0.82rem;
//           font-weight: 500;
//           border-radius: 12px;
//           padding: 0.6rem 0.9rem;
//           margin-top: 0.4rem;
//         }

//         .signup-modal .modal-footer {
//           border-top: 1px solid var(--line);
//           padding: 1.1rem 2rem 1.5rem;
//         }
//         .btn-close-secondary {
//           background: none !important;
//           border: none !important;
//           color: var(--muted) !important;
//           font-size: 0.82rem;
//         }
//         .btn-close-secondary:hover {
//           color: #fff !important;
//         }
//         .btn-register {
//           background-color: #fff !important;
//           color: #1a1a1a !important;
//           border: none !important;
//           letter-spacing: 0.03em;
//           font-size: 0.82rem;
//           font-weight: 600;
//           padding: 0.55rem 1.6rem !important;
//           border-radius: 50px !important;
//           display: inline-flex;
//           align-items: center;
//           gap: 0.5rem;
//           min-width: 120px;
//           justify-content: center;
//         }
//         .btn-register:hover {
//           background-color: #e8e8e8 !important;
//         }
//         .btn-register:disabled {
//           opacity: 0.7;
//           cursor: not-allowed;
//         }
//       `}</style>

//             <Button className="signup-trigger" onClick={handleShow}>
//                 Sign Up
//             </Button>

//             <Modal show={show} onHide={loading ? undefined : handleClose} centered className="signup-modal" backdrop={loading ? "static" : true}>
//                 <ToastContainer
//                     position="top-right"
//                     autoClose={3000}
//                     hideProgressBar={false}
//                     newestOnTop={true}
//                     closeOnClick
//                     pauseOnHover={false}
//                     theme="dark"
//                     style={{ zIndex: 99999 }}
//                 />
//                 <Modal.Header closeButton={!loading}>
//                     <div>
//                         <span className="modal-eyebrow">Join us</span>
//                         <Modal.Title>Personal Details</Modal.Title>
//                     </div>
//                 </Modal.Header>

//                 <Modal.Body>
//                     <fieldset disabled={loading} style={{ border: 'none', padding: 0, margin: 0 }}>
//                         <form action="">
//                             <div className="avatar-row">
//                                 <label htmlFor="image" className="avatar-circle" style={{ cursor: loading ? 'not-allowed' : 'pointer' }}>
//                                     {preview ? <img src={preview} alt="Profile preview" /> : 'PHOTO'}
//                                 </label>
//                                 <div>
//                                     <p className="avatar-label">Profile picture</p>
//                                     <p className="avatar-hint">Square photos work best</p>
//                                     <label htmlFor="image" className="avatar-button">
//                                         Choose file
//                                     </label>
//                                     <input
//                                         type="file"
//                                         onChange={handleImageChange}
//                                         className="avatar-input"
//                                         name="image"
//                                         id="image"
//                                         accept="image/*"
//                                         disabled={loading}
//                                     />
//                                 </div>
//                             </div>

//                             <div className="form-floating mb-3">
//                                 <input
//                                     type="text"
//                                     onChange={handleChanges}
//                                     className="form-control"
//                                     name="fullname"
//                                     id="fullname"
//                                     placeholder=""
//                                     value={form.fullname}
//                                 />
//                                 <label htmlFor="fullname">Full Name</label>
//                             </div>

//                             <div className="form-floating mb-3">
//                                 <input
//                                     type="email"
//                                     onChange={handleChanges}
//                                     className="form-control"
//                                     name="email"
//                                     id="email"
//                                     placeholder=""
//                                     value={form.email}
//                                 />
//                                 <label htmlFor="email">E-mail</label>
//                             </div>
//                             <p className="field-hint">Must be a @gmail.com address</p>

//                             <div className="form-floating mb-3">
//                                 <input
//                                     type="tel"
//                                     onChange={handleChanges}
//                                     className="form-control"
//                                     name="contact"
//                                     id="contact"
//                                     placeholder=""
//                                     value={form.contact}
//                                 />
//                                 <label htmlFor="contact">Phone Number</label>
//                             </div>

//                             <div className="form-floating mb-3 password-field">
//                                 <input
//                                     type={showPassword ? "text" : "password"}
//                                     onChange={handleChanges}
//                                     className="form-control"
//                                     name="password"
//                                     id="password"
//                                     placeholder=""
//                                     value={form.password}
//                                 />
//                                 <label htmlFor="password">Password</label>
//                                 <button
//                                     type="button"
//                                     className="password-toggle"
//                                     onClick={() => setShowPassword((prev) => !prev)}
//                                     aria-label={showPassword ? "Hide password" : "Show password"}
//                                     disabled={loading}
//                                 >
//                                     <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//                                 </button>
//                             </div>
//                             <p className="field-hint">Must include at least one special character</p>

//                             {formError && (
//                                 <div className="form-error-alert" role="alert">
//                                     {formError}
//                                 </div>
//                             )}
//                         </form>
//                     </fieldset>
//                 </Modal.Body>

//                 <Modal.Footer>
//                     <Button className="btn-close-secondary" onClick={handleClose} disabled={loading}>
//                         Cancel
//                     </Button>
//                     <Button className="btn-register" type='submit' onClick={handleSubmit} disabled={loading}>
//                         {loading ? (
//                             <>

//                                 Loading...
//                             </>
//                         ) : (
//                             "Register"
//                         )}
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }

// export default SignUp;


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from "react-toastify"; // ✅ Only import toast (removed ToastContainer)
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SPECIAL_CHAR_REGEX = /[!@#$%^&*(),.?":{}|<>_\-+=~`[\]/;]/;

function SignUp() {
  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClose = () => {
    if (loading) return;
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    contact: "",
    image: "",
    password: ""
  });

  const resetForm = () => {
    setForm({
      fullname: "",
      email: "",
      contact: "",
      image: "",
      password: ""
    });
    setPreview(null);
    setShowPassword(false);
  };

  const validate = () => {
    if (!form.fullname || !form.email || !form.password) {
      return "All Fields Are Required";
    }
    if (!form.email.toLowerCase().includes("@gmail.com")) {
      return "Email must be a valid @gmail.com address";
    }
    if (!SPECIAL_CHAR_REGEX.test(form.password)) {
      return "Password must contain at least one special character";
    }
    return "";
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
      const newForm = new FormData();
      newForm.append("fullname", form.fullname);
      newForm.append("email", form.email);
      newForm.append("contact", form.contact);
      newForm.append("image", form.image);
      newForm.append("password", form.password);

      const response = await axios.post("http://localhost:8080/user/signUp", newForm);

      toast.success(response.data.Message || "Account created successfully");
      resetForm();
      handleClose();
    } catch (error) {
      // ✅ Fixed: Extracting the error message to avoid reference crashes
      const message = error?.response?.data?.message || error?.message || "Failed to create account";
      setFormError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  const handleChanges = (e) => {
    if (formError) setFormError("");

    if (e.target.type === "file") {
      setForm((prev) => ({
        ...prev,
        image: e.target.files[0]
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
    handleChanges(e);
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

        .signup-trigger {
          background-color: white!important;
          border: 1px solid #323232 !important;
          letter-spacing: 0.04em;
          font-size: 0.85rem;
          font-weight: 500;
          padding: 0.5rem 1.6rem !important;
          border-radius: 50px !important;
          color: #000000 !important;
          transition: background-color 0.2s ease, transform 0.15s ease;
        }
        .signup-trigger:hover {
          transform: translateY(-1px);
        }

        .signup-modal .modal-content {
          border: none;
          border-radius: 24px;
          overflow: hidden;
          background-color: var(--bg-dark);
        }

        .signup-modal .modal-header {
          background-color: var(--bg-dark);
          border-bottom: 1px solid var(--line);
          padding: 1.6rem 2rem 1.2rem;
        }
        .signup-modal .modal-header .btn-close {
          filter: invert(1) grayscale(1) brightness(2);
          opacity: 0.7;
        }
        .signup-modal .modal-title {
          font-family: 'Segoe UI', Arial, sans-serif;
          font-size: 1.4rem;
          font-weight: 600;
          letter-spacing: 0.01em;
          color: #fff;
        }
        .signup-modal .modal-eyebrow {
          color: var(--muted);
          text-transform: uppercase;
          font-size: 0.68rem;
          letter-spacing: 0.16em;
          font-weight: 600;
          display: block;
          margin-bottom: 0.35rem;
        }

        .signup-modal .modal-body {
          padding: 1.6rem 2rem 0.5rem;
        }

        .avatar-row {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          margin-bottom: 1.6rem;
        }
        .avatar-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: 1.5px dashed #444;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          overflow: hidden;
          background-color: #222;
          color: var(--muted);
          font-size: 0.7rem;
          text-align: center;
          line-height: 1.1;
        }
        .avatar-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .avatar-label {
          font-size: 0.78rem;
          color: #fff;
          font-weight: 600;
          margin-bottom: 0.2rem;
        }
        .avatar-hint {
          font-size: 0.74rem;
          color: var(--muted);
          margin-bottom: 0;
        }
        .avatar-input {
          display: none;
        }
        .avatar-button {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          color: #fff;
          border: 1px solid #444;
          border-radius: 20px;
          padding: 0.25rem 0.8rem;
          cursor: pointer;
          margin-top: 0.35rem;
          background: transparent;
          transition: background-color 0.15s ease;
        }
        .avatar-button:hover {
          background-color: #2a2a2a;
        }

        .signup-modal .form-floating {
          margin-bottom: 1.15rem;
          position: relative;
        }
        .signup-modal .form-control {
          border: 1px solid var(--line);
          border-radius: 14px;
          background-color: #222222;
          color: #fff;
          padding-left: 1rem;
          font-size: 0.95rem;
        }
        .signup-modal .form-control:focus {
          box-shadow: none;
          border-color: #666;
          background-color: #222222;
          color: #fff;
        }
        .signup-modal .form-control::placeholder {
          color: #666;
        }
        .signup-modal .form-floating > label {
          padding-left: 1rem;
          color: var(--muted);
          font-size: 0.85rem;
        }
        .signup-modal .form-floating > .form-control:focus ~ label,
        .signup-modal .form-floating > .form-control:not(:placeholder-shown) ~ label {
          color: #ccc;
          font-weight: 500;
        }

        .signup-modal .form-control:disabled {
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

        .signup-modal .modal-footer {
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

      <Button className="signup-trigger" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={loading ? undefined : handleClose} centered className="signup-modal" backdrop={loading ? "static" : true}>
        {/* ✅ Removed local <ToastContainer> since it is handled by App.js */}

        <Modal.Header closeButton={!loading}>
          <div>
            <span className="modal-eyebrow">Join us</span>
            <Modal.Title>Personal Details</Modal.Title>
          </div>
        </Modal.Header>

        <Modal.Body>
          <fieldset disabled={loading} style={{ border: 'none', padding: 0, margin: 0 }}>
            <form action="">
              <div className="avatar-row">
                <label htmlFor="image" className="avatar-circle" style={{ cursor: loading ? 'not-allowed' : 'pointer' }}>
                  {preview ? <img src={preview} alt="Profile preview" /> : 'PHOTO'}
                </label>
                <div>
                  <p className="avatar-label">Profile picture</p>
                  <p className="avatar-hint">Square photos work best</p>
                  <label htmlFor="image" className="avatar-button">
                    Choose file
                  </label>
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="avatar-input"
                    name="image"
                    id="image"
                    accept="image/*"
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  onChange={handleChanges}
                  className="form-control"
                  name="fullname"
                  id="fullname"
                  placeholder=""
                  value={form.fullname}
                />
                <label htmlFor="fullname">Full Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  onChange={handleChanges}
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder=""
                  value={form.email}
                />
                <label htmlFor="email">E-mail</label>
              </div>
              <p className="field-hint">Must be a @gmail.com address</p>

              <div className="form-floating mb-3">
                <input
                  type="tel"
                  onChange={handleChanges}
                  className="form-control"
                  name="contact"
                  id="contact"
                  placeholder=""
                  value={form.contact}
                />
                <label htmlFor="contact">Phone Number</label>
              </div>

              <div className="form-floating mb-3 password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  onChange={handleChanges}
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder=""
                  value={form.password}
                />
                <label htmlFor="password">Password</label>
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
              <p className="field-hint">Must include at least one special character</p>

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
              "Register"
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUp;