import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropDown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
export const BlogDropDown = (props) => {

	return(
		<div className = 'blogDropDown'>
		<Navbar className='blogDropDown' variant='light' expand ='lg'>
		<Container style={{backgroundColor: 'white'}}>
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
		</div>
	);
}
export default BlogDropDown
