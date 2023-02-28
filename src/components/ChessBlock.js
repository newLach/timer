import React, {useState, useEffect} from 'react';

export const ChessBlock = (props) =>{
	const [coords, setCords] = useState("");
	console.log(props.coords)
	return (
		<div>
		<button className="square"/>
		<p>{props.pie}</p>
		{props.coords}
		</div>
	)

}
export default ChessBlock
