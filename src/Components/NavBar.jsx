import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import SignUp from './SignUp';
import LogIn from './LogIn';
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
// import { UserConext } from '../Context/UserContext';


function NavBar() {
    const { user, loggedIn, logout, current } = useContext(UserContext);

    const handleLogout = () => {
        // hook your real logout logic here
        console.log('Logout clicked');
    };

    return (
        <Navbar expand="lg" className="custom-navbar">
            <Container fluid className="navbar-pill">
                <Navbar.Brand href="#home" className='fw-bold brand-logo' style={{ width: "15%" }}>
                    <img src="img/hey.png" alt="logo" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto d-flex gap-2 nav-links">
                        <Link to="/" className='nav-link-custom'>Home</Link>
                        <Link to="/about" className='nav-link-custom'>About</Link>
                        <Link to="/feature" className='nav-link-custom'>Features</Link>
                        <Link to="/task" className='nav-link-custom'>Task</Link>
                    </Nav>
                    {loggedIn ? (<Nav className='d-flex align-items-center auth-pill  profile-start' style={{ width: "28%" }}>
                        <NavDropdown
                            align="end"
                            className="profile-dropdown "
                            title={
                                <div>
                                    <img
                                        src={current?.image ? `http://localhost:8080/${current.image}` : "https://picsum.photos/200/300"}

                                        alt="profile"
                                        className="profile-img"
                                    />
                                    <span>{current?.fullname}</span>
                                </div>
                            }
                        >
                            <NavDropdown.Item as={Link} to="/profile">My Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logout}>LogOut</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>) : (<Nav className='auth-pill' style={{ width: "28%" }}>
                        <SignUp />
                        <LogIn />
                    </Nav>)}



                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;