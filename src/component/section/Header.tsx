import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header(): JSX.Element {
  return (
    <Navbar variant="dark" expand="lg">
      <Navbar.Brand href="#">JO</Navbar.Brand>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#experiences">Experiences</Nav.Link>
          <Nav.Link href="#connect">Connect</Nav.Link>
        </Nav>
      </Navbar.Collapse> */}
    </Navbar>
  )
}

export default Header;
