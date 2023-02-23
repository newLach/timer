import React from 'react';
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider, Route, Link} from 'react-router-dom'
import {Timer} from './pages/Timer.js'
import {Home} from './pages/Home.js';
import {Blog} from './pages/Blog.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import styles from './App.css'
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
		path:'/home',
		element:<Home/>
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
