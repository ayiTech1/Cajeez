import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from '../../assets/Cajeez.png'; 
import './Navbar.css'


const NavBar: React.FC = () => {
  return (
    <Navbar  variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Cajeez"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="joblist">Job Listings</Nav.Link>
            <Nav.Link as={Link} to="companies">Companies</Nav.Link>
            <Nav.Link as={Link} to="postjob">Post a Job</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default NavBar;