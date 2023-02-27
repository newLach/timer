import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropDown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
export const BlogDropDown = (props) => {

	return(
		<Navbar bg="light" expand ='lg'>
		<Container>
		<Navbar.Toggle aria-controls='basic-navbar-nav'/>
		<Navbar.Collapse id='basic-navbar-nav'>
		<Button
		onClick={()=> props.remove()}>Delete</Button>
		{props.editTheme == false ?
			<Button
			onClick={()=> props.callEdit()}>Edit</Button>
		
			:
			
			<Button
			onClick={() => props.save()}>
			Save
			</Button>
		}

		</Navbar.Collapse>
		</Container>
		</Navbar>
	);
}
export default BlogDropDown
