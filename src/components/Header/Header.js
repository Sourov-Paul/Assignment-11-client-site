import React from 'react';
import "./Header.css"
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import "./Header.css"
import UseAuth from '../UseAuth/UseAuth';
const Header = () => {
  const {person,logOut}=UseAuth()
    return (
        <div className="sticky-top">
            
            <Navbar className=" header" collapseOnSelect expand="lg"  variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="#home" className="siteName"><i className="car fas fa-truck"></i>First Delivery</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link as={HashLink}  className="link_color"to="/home" >Home</Nav.Link>
              <Nav.Link as={HashLink} className="link_color" to="/booking">Offer</Nav.Link>
              <Nav.Link as={HashLink} className="link_color" to="/addservices">Add A Service</Nav.Link>
              <Nav.Link as={HashLink} className="link_color" to="/manageOrder">Manage Order</Nav.Link>
              <Nav.Link as={HashLink} className="link_color" to="/login">Login</Nav.Link>
  
            
      
{     
person?.email && <span className="login_out" onClick={logOut}>Logout</span>
}
<span style={{color:"white"}}><i className=" m-1 far fa-user-circle"></i>{person.displayName}</span>




             
            </Navbar.Collapse>
          </Container>
        </Navbar>

       


        </div>
    );
};

export default Header;