import React, { useState, useEffect }  from 'react';
import BlogComponent from './BlogComponent.js'
import {getBlogs} from '../../api/api.js'

export const BlogList = ()  => {
	const [blogList, setBlogList] = useState([]);

	const setList = (list) => {
		setBlogList(list);
	
	}

	useEffect(() =>{
		async function start(){
			const data = await getBlogs();
			setList(data);
		}
		start();
	
	}, [blogList.length])

	const getList = blogList.slice(0)
	.reverse()
	.map(
		blog => <BlogComponent blog={blog}/>
	);
	return(
		<div>
		{getList}
	</div>
	)

}

export default BlogList
