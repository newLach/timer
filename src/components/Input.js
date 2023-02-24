import React , {useState} from 'react';
import {BlogList} from './BlogList.js'
export const Input = (props) =>{
	const[inputText, setForm] = useState("");
	

	const updateForm = (value)=>{

		return setForm( (prev)=>{
			return{...prev, ...value};
		})
	}

	return(
		<div>
		<form
		onSubmit={e => props.send(e, inputText)}>
		<textarea
		rows={'10'}
		cols={'30'}
		value={inputText.blogText}
		onChange={(e) => updateForm({blogText:e.target.value})}/>
		<input
		type={'submit'}
		value={'Create blog'}
		/>
		</form>
		<h1> Blogs</h1>

		</div>
	

	);
}
export default Input;
