import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import image from '../assets/images/semi_footer25.png';

export const NavbarComponnet = () => {

  return (
    <div>
      <Navbar className="nav-sep" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            {/* <img src={image} alt="boehringer" /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav.Link className="nav-links" href="#home">Home</Nav.Link>
            <Nav.Link className="nav-links"href="#link">Invitacion</Nav.Link>
            <Nav.Link className="nav-links" href="#home">Speakers</Nav.Link>
            <Nav.Link className="nav-links" href="#home">Avalado por</Nav.Link>
            <Nav.Link className="nav-buttom" href="#home">reservar</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
