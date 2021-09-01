import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { IoLogoReact } from "react-icons/io5";

export default function NavBar() {
  return (<div>
    <Navbar bg="white" style={{backgroundColor: "#ECF2FE"}}>
      <Container>
        <Navbar.Brand href="#home">
          <IoLogoReact /> Nome da empresa
        </Navbar.Brand>
      </Container>
    </Navbar>
    <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: "#3371F2"}}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Início</Nav.Link>
            <Nav.Link href="/anunciar">Anunciar Vaga</Nav.Link>
            <Nav.Link href="/equipe">Nossa equipe</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="light">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>)
}