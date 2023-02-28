import React, {useState, useEffect} from 'react';
import ChessBlock from './ChessBlock.js';
import Button from 'react-bootstrap/Button';

export const ChessBoard = () =>{
	const [board, setBoard] = useState([])

	const displayBoard = board.map((block) =>{return block})
	const fillBoard = ()=>{
		const newBoard = [];
		for(let i = 0; i < 8; i++){
			for(let g= 0; g < 8; g++){
				let block = <ChessBlock />
				newBoard.push(block)

			}
		}
		setBoard(newBoard)

	}
	return(
	<div >
		<div style={{flex: 2}}>

		{displayBoard}
		</div>
		<Button 
		onClick={fillBoard}>
		New Game
		</Button>
	</div>

	)

}
