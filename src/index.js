import './App.css';
import React from 'react';
import {createRoot} from "react-dom/client";
import {createBrowserRouter, RouterProvider, Route, Link} from 'react-router-dom'
import {Timer} from './pages/Timer.js'


const	router	=	createBrowserRouter([
	{
		path:'/',
		element:(<div>"/timer to go to timer app"</div>)
	},
	{
		path:'/timer',
		element:<Timer/>
	}
	

])
createRoot(document.getElementById("root")).render(
	<RouterProvider router={router}/>
);
