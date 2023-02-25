import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';
import BlogDropDown from './BlogDropDown.js';

const BlogComponent = (props) =>{

	async function deleteBlog(){
		await fetch(`https://timerserver3.onrender.com/${props.blog._id}`, {
			method: "DELETE",
		})
		console.log(props.blog._id)
	}

	return(
		<div className="blog-container">

		<div style={{flex: 8}}>
		{props.blog.blogText}
		{props.blog.creationDate}
		{props.blog.project}
		</div>

		<div style={{flex:2}}>

		<BlogDropDown 
		remove={() => deleteBlog()}/>
		</div>
		
		</div>
)
}
export default BlogComponent;
