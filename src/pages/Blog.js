import React, {useState, useEffect} from 'react'
import {Navigation} from '../components/Navigation';
import Input from '../components/Input.js'
import BlogList from '../components/BlogList.js'
import { getBlogs, newBlog } from '../api/api.js'

export const Blog = () =>{
	const [inputText, setForm] =	useState("")
	function updateForm(value){
		return setForm((prev)=>{
			return{...prev, ...value };
		})
	}


	return(
		<div >
		<Navigation/>
		<Input />
		<BlogList/>
		
		</div>

	)

}
