import React, {useState, useEffect} from 'react'
import {Navigation} from '../components/Navigation';
import BlogComponent from '../components/BlogComponent.js'
import { getBlogs, newBlog } from '../api/api.js'
export const Blog = () =>{
	const [inputText, setForm] =	useState("")
	const [blogList, setBlogList] = useState([])

	const setList = (list) =>{
		setBlogList(list)
	}
	useEffect(()=>{
		async function start(){
			const data = await getBlogs();
			setList(data)
		}
		start();
	}, [blogList.length])



	function updateForm(value){
		return setForm((prev)=>{
			return{...prev, ...value };
		})
	}

	async function onSubmit(e){
		e.preventDefault();
		const blog = {...inputText}
		await newBlog(blog)
	setForm({blogText:""})
	}

	const getList = blogList.slice(0)
		.reverse()
		.map(
			blog =>
			<BlogComponent 
			blog={blog}
			/>
		)
	
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
