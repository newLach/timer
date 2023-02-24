import React from 'react';
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Timer} from './pages/Timer.js'
import {Blog} from './pages/Blog.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
const	router	=	createBrowserRouter([
	{
		path:'/',
		element:(<Blog/>)
	},
	{
		path:'/timer',
		element:<Timer/>
	},
	{
		path:'/blog',
		element:<Blog/>
	}

	

])
createRoot(document.getElementById("root")).render(
        <div style={{backgroundColor:"#cccccc"}}>	
	<Container style={{backgroundColor:"white"}}><RouterProvider router={router}/>
	</Container>
	</div>
);
