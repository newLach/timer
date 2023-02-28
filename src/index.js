import React from 'react';
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Timer} from './pages/Timer.js'
import {Blog} from './pages/Blog.js';
import {ChessPage} from './pages/ChessPage.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css'
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
		path:'/chess',
		element:<ChessPage/>
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
