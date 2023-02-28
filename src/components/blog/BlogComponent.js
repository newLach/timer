import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import '../../App.css';
import BlogDropDown from './BlogDropDown.js';
import {newBlog} from '../../api/api.js';
const BlogComponent = (props) =>{
	const[onEdit, changeOnEdit] = useState(false);
	const [form, setForm]	=	useState({blogText:props.blog.blogText});

	async function deleteBlog(){
		await fetch(`https://timerserver3.onrender.com/${props.blog._id}`, {
			method: "DELETE",
		})
	}


	const updateBlogText = (value) =>{
		return setForm(prev => {return {...prev, ...value}})
	}
	
	const callEdit = () =>{
		changeOnEdit(!onEdit)
	}

	async function save(){
		callEdit()
		let editedBlog = {blogText: form.blogText, creationDate: props.blog.creationDate, project: props.blog.project};
		await deleteBlog();
		
		await newBlog(editedBlog)
		
	}
	return(
		<div className="blog-container">
		
		{
			onEdit===false ? 
			<>
			
			<div style={{flex: 8}}>
			<p className="creationTime">
			{props.blog.creationDate}
			</p>
			{form.blogText}
						</div>

			<div style={{flex:2}}>
{props.blog.project}

			<BlogDropDown
			editTheme={onEdit}
			remove={() => deleteBlog()}
			callEdit={() => callEdit()}
			save={() =>save()}/>
			</div>
			</>
			
			:
			
			<>
			<textarea
			rows={'10'}
			cols={'30'}
			value={form.blogText}
			onChange={e => updateBlogText({blogText: e.target.value})}
			/>
			<BlogDropDown
			save={() => save()}
			editTheme={onEdit}
			remove={() => deleteBlog()}
			callEdit={() => callEdit()}/>
			</>
		}


		</div>
	)
}
export default BlogComponent;
