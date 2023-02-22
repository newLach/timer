import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import {Navigation} from '../components/Navigation';
import {useForm} from 'react-hook-form';


export const Blog = () =>{
	const [inputText, setForm] =	useState("")
	const [blogList, setBlogList] = useState([])

	
	useEffect(()=>{
	async function getBlogs(){
		const response =	await fetch(`https://timerserver3.onrender.com/record`);
		if(!response.ok){
			const message = `An error had occurred: ${response.statusText}`;
			window.alert(message);
			return
		}

		const blogListArray =	await response.json();
		setBlogList(blogListArray)
		return;

	}
		getBlogs();
		return;
	}, [blogList.length])

	function updateForm(value){
		return setForm((prev)=>{
			return{...prev, ...value };
		})
	}

	async function onSubmit(e){
		e.preventDefault();

		const newBlog ={...inputText};
		await fetch("https://timerserver3.onrender.com/record/add", {
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
		setForm({blogText:""})
	}






	const getList = blogList.map(blog =><p>{blog.blogText}</p>)

	


	return(
		<div >
		<Navigation/>
		<div >
		<form 
		onSubmit={e => onSubmit(e)}>
		<textarea
		rows={'10'}
		cols={'30'}
		value={inputText.blogText}
		onChange={(e) => updateForm({blogText:e.target.value})	}
	/	>

		<input
		type="submit"
		value="Create blog"
		/>

		</form>
		</div>
<h1>Blogs</h1>
				{getList}
		</div>

	)

}
