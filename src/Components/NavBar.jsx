// // import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';
// // import NavDropdown from 'react-bootstrap/NavDropdown';
// // import { Link } from 'react-router-dom';
// // import SignUp from './SignUp';
// // import LogIn from './LogIn';
// // import { useContext } from 'react';
// // import { UserContext } from '../Context/UserContext';
// // // import { UserConext } from '../Context/UserContext';


// // function NavBar() {
// //     const { user, loggedIn, logout, current } = useContext(UserContext);

// //     const handleLogout = () => {
// //         // hook your real logout logic here
// //         console.log('Logout clicked');
// //     };

// //     return (
// //         <Navbar expand="lg" className="custom-navbar">
// //             <Container fluid className="navbar-pill">
// //                 <Navbar.Brand href="#home" className='fw-bold brand-logo ' style={{ width: "10%" }} >
// //                     <img src="img/hey.png" alt="logo" style={{ width: "8vh" }} />
// //                 </Navbar.Brand>

// //                 <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle" />

// //                 <Navbar.Collapse id="basic-navbar-nav" className=''>
// //                     <div className="">
// //                         <Nav className="m-auto d-flex gap-2 nav-links">
// //                             <Link to="/" className='nav-link-custom'>Home</Link>
// //                             <Link to="/about" className='nav-link-custom'>About</Link>
// //                             <Link to="/feature" className='nav-link-custom'>Features</Link>
// //                             <Link to="/task" className='nav-link-custom'>Task</Link>
// //                         </Nav>
// //                     </div>
// //                     <div className="">
// //                         <Nav>
// //                             {loggedIn ? (<Nav className='d-flex align-items-center auth-pill  profile-start' >
// //                                 <NavDropdown
// //                                     align="end"
// //                                     className="profile-dropdown "
// //                                     title={
// //                                         <div>
// //                                             <img
// //                                                 src={current?.image ? `http://localhost:8080/${current.image}` : "https://picsum.photos/200/300"}

// //                                                 alt="profile"
// //                                                 className="profile-img"
// //                                             />
// //                                             {/* <span>{current?.fullname}</span> */}
// //                                         </div>
// //                                     }
// //                                 >
// //                                     {/* <NavDropdown.Item as={Link} to="/profile">My Profile</NavDropdown.Item> */}
// //                                     <NavDropdown.Divider />
// //                                     <NavDropdown.Item onClick={logout} className=''>LogOut</NavDropdown.Item>
// //                                 </NavDropdown>
// //                             </Nav>) : (<Nav className='auth-pill ' style={{ width: "40%" }}>
// //                                 <SignUp />
// //                                 <LogIn />
// //                             </Nav>)}

// //                         </Nav>
// //                     </div>


// //                 </Navbar.Collapse>
// //             </Container>
// //         </Navbar>
// //     );
// // }

// // export default NavBar;




// import React from 'react'
// import { Link } from 'react-router-dom'
// import SignUp from '../Components/SignUp'
// import LogIn from '../Components/LogIn'
// import { useContext } from 'react';
// import { UserContext } from '../Context/UserContext';
// import { Nav, NavDropdown } from 'react-bootstrap';

// const NavBar = () => {
//     const { user, loggedIn, logout, current } = useContext(UserContext);


//     return (
//         <div className='d-flex justify-content-center mt-2 '  style={{ position: "sticky", top: "0%" }}>
//             <nav className='bg-dark d-flex justify-content-between align-items-center w-75  ' style={{ borderRadius: "50px", border: "1px solid white" }}>
//                 <div className="ms-2" style={{ borderRadius: "40px", width: "20%" }}>
//                     <img src="img/hey.png" alt="" style={{ width: "45px", height: "45px", borderRadius: "50%", objectFit: "cover" }} />
//                 </div>
//                 <div className="text-light d-flex gap-4">
//                     <Link className='text-decoration-none text-light'>Home</Link>
//                     <Link className='text-decoration-none text-light'>About</Link>
//                     <Link className='text-decoration-none text-light'>Caterory</Link>
//                     <Link className='text-decoration-none text-light'>Services</Link>


//                 </div>
//                 <div className=" d-flex gap-2 m-2 justify-content-end" style={{ borderRadius: "40px", width: "30%" }}>
//                     {loggedIn ? (
//                         <Nav>
//                             <NavDropdown
//                                 align="end"
//                                 className="profile-dropdown"
//                                 title={
//                                     <div>
//                                         <img
//                                             src={current?.image ? `http://localhost:8080/${current.image}` : "https://picsum.photos/200/300"}

//                                             alt="profile"
//                                             className=""
//                                             style={{ width: "45px", height: "45px", borderRadius: "50%", objectFit: "cover",border:"1px solid white" }}
//                                         />
//                                         {/* <span>{current?.fullname}</span> */}
//                                     </div>
//                                 }
//                             >
//                                 {/* <NavDropdown.Item as={Link} to="/profile">My Profile</NavDropdown.Item> */}
//                                 {/* <NavDropdown.Divider /> */}
//                                 <NavDropdown.Item onClick={logout} className='' >LogOut</NavDropdown.Item>
//                             </NavDropdown>
//                         </Nav>
//                     ) : (
//                         <div className="d-flex gap-1">
//                             <SignUp />
//                             <LogIn />
//                         </div>
//                     )}
//                 </div>
//             </nav >

//         </div >
//     )
// }

// export default NavBar



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
                                        <NavDropdown.Item onClick={logout}>LogOut</NavDropdown.Item>
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