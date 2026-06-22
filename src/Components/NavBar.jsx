// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';
// import SignUp from './SignUp';
// import LogIn from './LogIn';
// import { useContext } from 'react';
// import { UserContext } from '../Context/UserContext';
// // import { UserConext } from '../Context/UserContext';


// function NavBar() {
//     const { user, loggedIn, logout, current } = useContext(UserContext);

//     const handleLogout = () => {
//         // hook your real logout logic here
//         console.log('Logout clicked');
//     };

//     return (
//         <Navbar expand="lg" className="custom-navbar">
//             <Container fluid className="navbar-pill">
//                 <Navbar.Brand href="#home" className='fw-bold brand-logo ' style={{ width: "10%" }} >
//                     <img src="img/hey.png" alt="logo" style={{ width: "8vh" }} />
//                 </Navbar.Brand>

//                 <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle" />

//                 <Navbar.Collapse id="basic-navbar-nav" className=''>
//                     <div className="">
//                         <Nav className="m-auto d-flex gap-2 nav-links">
//                             <Link to="/" className='nav-link-custom'>Home</Link>
//                             <Link to="/about" className='nav-link-custom'>About</Link>
//                             <Link to="/feature" className='nav-link-custom'>Features</Link>
//                             <Link to="/task" className='nav-link-custom'>Task</Link>
//                         </Nav>
//                     </div>
//                     <div className="">
//                         <Nav>
//                             {loggedIn ? (<Nav className='d-flex align-items-center auth-pill  profile-start' >
//                                 <NavDropdown
//                                     align="end"
//                                     className="profile-dropdown "
//                                     title={
//                                         <div>
//                                             <img
//                                                 src={current?.image ? `http://localhost:8080/${current.image}` : "https://picsum.photos/200/300"}

//                                                 alt="profile"
//                                                 className="profile-img"
//                                             />
//                                             {/* <span>{current?.fullname}</span> */}
//                                         </div>
//                                     }
//                                 >
//                                     {/* <NavDropdown.Item as={Link} to="/profile">My Profile</NavDropdown.Item> */}
//                                     <NavDropdown.Divider />
//                                     <NavDropdown.Item onClick={logout} className=''>LogOut</NavDropdown.Item>
//                                 </NavDropdown>
//                             </Nav>) : (<Nav className='auth-pill ' style={{ width: "40%" }}>
//                                 <SignUp />
//                                 <LogIn />
//                             </Nav>)}

//                         </Nav>
//                     </div>


//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default NavBar;




import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../Components/SignUp'
import LogIn from '../Components/LogIn'
 import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { Nav, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    const { user, loggedIn, logout, current } = useContext(UserContext);

    
    return (
        <div className='d-flex justify-content-center mt-2 ' style={{ position: "sticky", top: "0%" }}>
            <nav className='bg-dark d-flex justify-content-between align-items-center w-75  ' style={{ borderRadius: "50px" }}>
                <div className="ms-2" style={{ borderRadius: "40px", width: "20%" }}>
                    <img src="img/hey.png" alt="" style={{ width: "10vh" }} />
                </div>
                <div className="text-light d-flex gap-4">
                    <Link className='text-decoration-none text-light'>Home</Link>
                    <Link className='text-decoration-none text-light'>About</Link>
                    <Link className='text-decoration-none text-light'>Caterory</Link>
                    <Link className='text-decoration-none text-light'>Services</Link>


                </div>
                <div className=" d-flex gap-2 m-2 justify-content-end" style={{ borderRadius: "40px", width: "30%" }}>
                    {loggedIn ? (
                        <Nav>
                            <NavDropdown>
                                
                            </NavDropdown>
                        </Nav>
                    ) : (
                        <div className="">
                            <SignUp />
                            <LogIn />
                        </div>
                    )}
                </div>
            </nav >

        </div >
    )
}

export default NavBar
