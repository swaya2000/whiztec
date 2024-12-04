import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar bg="info" data-bs-theme="light">
      <Container>
      <Navbar.Brand href="#home"  style={{color: "black",}} ><i className="fa-solid fa-house"style={{color: "black",}} /><b> Todo Management</b></Navbar.Brand>
      <Nav className="me-auto w-100">
      <Nav.Link href="#home" style={{color: "white",}}>Home</Nav.Link>
      <Nav.Link href="#features" style={{color: "white",}}>Features</Nav.Link>
       <Nav.Link href="#pricing" style={{color: "white",}}>Pricing</Nav.Link>
      </Nav>
      </Container>
      </Navbar>
    </div>
  )
}

export default Header