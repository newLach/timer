import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Navigation = ()=>{
	return (
		<Navbar bg="light" expand="lg">

		<Container>
		<Navbar.Brand href="home">Lachies Blog Site</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
		<Nav className="me-auto">
		<Nav.Link href="timer">Timer</Nav.Link>
		<Nav.Link href="blog"> Blogs</Nav.Link>
		<Nav.Link href ="chess">Chess</Nav.Link>
		</Nav>
		</Navbar.Collapse>
		</Container>

		</Navbar>
	);
}
export default  Navigation
