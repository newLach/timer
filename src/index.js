import './App.css';
import React from 'react';
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider, Route, Link} from 'react-router-dom'
import {Timer} from './pages/Timer.js'
import {Home} from './pages/Home.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const	router	=	createBrowserRouter([
	{
		path:'/',
		element:(<div>"/timer to go to timer app"</div>)
	},
	{
		path:'/timer',
		element:<Timer/>
	},
	{
		path:'/home',
		element:<Home/>

	}
	

])
createRoot(document.getElementById("root")).render(
	<Container><RouterProvider router={router}/>
	</Container>
);
