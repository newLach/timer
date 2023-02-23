import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

export const BlogComponent = (props) =>{

	async function deleteBlog(){
		await fetch(`https://timerserver3.onrender.com/${props.blog._id}`, {
			method: "DELETE",
		})
		console.log(props.blog._id)
	}

	return(
		<div>
	<p>{props.blog.blogText}</p>
		<Button 
		onClick={() => deleteBlog()}>
		Delete Blog
		</Button>
</div>
)
}
export default BlogComponent;
