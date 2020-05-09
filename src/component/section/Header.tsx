import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Scroll from 'react-scroll';

function Header(): JSX.Element {
  return (
    <Navbar variant="dark" expand="md">
      <Navbar.Brand>JO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Nav.Link className="header-link">
            <Scroll.Link activeClass="active" to="about">
              // About me
            </Scroll.Link>
          </Nav.Link>
          <Nav.Link className="header-link">
            <Scroll.Link activeClass="active" to="experiences">
              // Experiences
            </Scroll.Link>
          </Nav.Link>
          <Nav.Link className="header-link">
            <Scroll.Link activeClass="active" to="projects">
              // Projects
            </Scroll.Link>
          </Nav.Link>
          <Nav.Link className="header-link">
            <Scroll.Link activeClass="active" to="connect">
              // Let's connect
            </Scroll.Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;
