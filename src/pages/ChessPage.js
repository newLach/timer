import React, {useState, useEffect} from 'react';
import {Navigation} from '../components/Navigation';
import {ChessBoard} from '../components/ChessBoard.js'
import Button from 'react-bootstrap/Button'


export const ChessPage = () => {
	return(
		<>
		<Navigation/>
		<ChessBoard/>
		</>
	
	)
}
