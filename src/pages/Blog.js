import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import {Navigation} from '../components/Navigation';

export const Blog = () =>{
	const [form, setForm] =	useState({blogText:"",thing: "g"})
	const [blogList, setBlogList] = useState([])


	function updateForm(value){
		return setForm((prev)=>{
			return{...prev, ...value };
		})
	}

	async function onSubmit(e){
		e.preventDefault();

		const newBlog ={...form};
		await fetch("http://localhost:5000/record/add", {
			method: "POST",
			headers:{
			"Content-Type": "application/json",
			},
			body: JSON.stringify(newBlog),
		})
			.catch(error => {
				window.alert(error);
				return;
			});
		setForm({blogText:""});
	}




	async function getBlogs(){
		const response =	await fetch(`http://localhost:5000/record/`);
		if(!response.ok){
			const message = `An error had occurred: ${response.statusText}`;
			window.alert(message);
			return
		}

		const blogListArray =	await response.json();
		setBlogList(blogListArray)
		getList();
		return;

	}

	const getList = blogList.map(blog =><p>{blog.blogText}</p>)

	


	return(
		<div>
		<Navigation/>
		<div>
		<form onSubmit={onSubmit}>
		<label>Write a blog</label>
		<input
		type="text"
		value={form.blogText}
		onChange={(e) => updateForm({blogText:e.target.value})	}
		/>
		<input
		type="submit"
		value="Create blog"
		/>

		</form>
		</div>
<h1>Blogs</h1>
		<Button onClick={getBlogs}>Get Blogs </Button>
		{getList}
		</div>

	)

}
