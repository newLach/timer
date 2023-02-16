import React from 'react'
import Button from 'react-bootstrap/Button';
import {Navigation} from '../components/Navigation';

export const Blog = () =>{
	return(
		<div>
	<Navigation/>
		<Button 
		onClick={() => console.log('click')}>Get Blogs
		</Button>
		<input placeholder={"write a Blog"}/>
		<Button>Send Blog</Button>

	</div>)

}
