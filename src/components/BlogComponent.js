import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css'
export const BlogComponent = (props) =>{

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
		</div>

		<div style={{flex:2}}>
		<Button 
		onClick={() => deleteBlog()}>
		{"Delete"}
		</Button>
		</div>
		
		</div>
)
}
export default BlogComponent;
