import React , {useState, useEffect} from 'react';
import {BlogList} from './BlogList.js'
import {newBlog} from '../../api/api.js';

export const Input = (props) =>{
	const[form, setForm] = useState({blogText: "", creationDate:{}, project: ""});
		
	useEffect(()=>{handleDate()},[])

	const handleDate = () =>{
		let d = new Date();
		const arr = d.toString().split(" ")
		setForm({creationDate:{
			value:d.valueOf(),
			day:arr[0],
			month:arr[1],
			dayInt:arr[2],
			year:arr[3],
			time:arr[4]
		}})
	

	}


	async function onSubmit(e){
	
		e.preventDefault();
				const blog = {...form}
		await newBlog(blog);


	}
	const updateForm = (value)=>{
		
		return setForm((prev) => {
			return {...prev, ...value}
		});
	}

	return(
		<div>
		<form
		onSubmit={(e) =>onSubmit(e)}>
		<textarea
		rows={'10'}
		cols={'30'}
		value={form.blogText}
		onChange={e =>updateForm({blogText: e.target.value})}
		placeholder={'Write away...'}/>
		<input
		type={'submit'}
		value={'Create blog'}
		/>
		<textarea
		rows={'1'}
		cols={'10'}
		value={form.project}
		onChange={e => updateForm({project: e.target.value})}
		placeholder={'Project name'}/>
		</form>
		<h1> Blogs</h1>

		</div>
	

	);
}
export default Input;
