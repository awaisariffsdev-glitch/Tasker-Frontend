import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../Components/SignUp';
import LogIn from '../Components/LogIn';
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const NavBar = () => {
    const { user, loggedIn, logout, current } = useContext(UserContext);

    return (
        <div className='d-flex justify-content-center mt-2' style={{ position: "sticky", top: "0%", zIndex: 1050 }}>
            <Navbar
                expand="lg"
                variant="dark"
                className='bg-dark w-75 w-md-75 px-3 py-2'
                style={{ borderRadius: "50px", border: "1px solid white" }}
            >
                <Container fluid className="d-flex align-items-center justify-content-between p-0">

                    {/* Logo (Stays on the Left) */}
                    <Navbar.Brand as={Link} to="/" className="ms-2 p-0">
                        <img
                            src="img/hey.png"
                            alt="logo"
                            style={{ width: "45px", height: "45px", borderRadius: "50%", objectFit: "cover" }}
                        />
                    </Navbar.Brand>

                    {/* Hamburger Menu Toggle (Stays on the Right) */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0 me-2" />

                    {/* Collapsible Content */}
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-between w-100 mt-2 mt-lg-0">

                        {/* Centered Navigation Links */}
                        <Nav className="mx-auto gap-3 text-center my-3 my-lg-0">
                            <Nav.Link as={Link} to="/" className='text-decoration-none text-light px-2'>Home</Nav.Link>
                            <Nav.Link as={Link} to="/about" className='text-decoration-none text-light px-2'>About</Nav.Link>
                            <Nav.Link as={Link} to="/category" className='text-decoration-none text-light px-2'>Category</Nav.Link>
                            <Nav.Link as={Link} to="/services" className='text-decoration-none text-light px-2'>Services</Nav.Link>
                        </Nav>

                        {/* Profile Dropdown / Auth Buttons (Appears in Flex at the bottom of the list on mobile) */}
                        <div className="d-flex gap-2 justify-content-center justify-content-lg-end my-2 my-lg-0 me-lg-2">
                            {loggedIn ? (
                                <Nav>
                                    <NavDropdown
                                        align="end"
                                        className="profile-dropdown"
                                        title={
                                            <div>
                                                <img
                                                    src={current?.image ? `http://localhost:8080/${current.image}` : "https://picsum.photos/200/300"}
                                                    alt="profile"
                                                    style={{ width: "45px", height: "45px", borderRadius: "50%", objectFit: "cover", border: "1px solid white" }}
                                                />
                                            </div>
                                        }
                                    >
                                        <NavDropdown.Item >{current.fullname}</NavDropdown.Item>
                                        <NavDropdown.Item onClick={logout}>Loggout</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            ) : (
                                <div className="d-flex gap-2 align-items-center">
                                    <SignUp />
                                    <LogIn />
                                </div>
                            )}
                        </div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;