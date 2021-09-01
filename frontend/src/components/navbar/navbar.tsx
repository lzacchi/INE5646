import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { IoLogoReact } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import styles from  "./style.module.css";

export default function NavBar() {
  const location = useLocation();

  return (
    <div>
      <Navbar className={`${styles['brandNavbar']}`} bg="white">
        <Container>
          <Navbar.Brand href="/">
            <IoLogoReact /> Nome da empresa
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar className={`${styles['menuNavbar']}`} collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav activeKey={location.pathname} className="me-auto">
              <Nav.Link href="/">Início</Nav.Link>
              <Nav.Link href="/anunciar">Anunciar Vaga</Nav.Link>
              <Nav.Link href="/equipe">Nossa equipe</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
              <Nav.Link href="/contato">Contato</Nav.Link>
            </Nav>
            <Nav>
              <Button variant="light"><Link to="/login">Login</Link></Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>)
}