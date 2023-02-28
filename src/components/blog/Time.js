import React, {useState, useEffect} from 'react';


const  Time = (props) =>{
	const [arr, setArr] = useState({})

	
	return(
		<GoodTime goodData={props.data}/>


	)

}

const GoodTime = (props) =>{
	const [obj, setObj] = useState(props.goodData)
	return(<>

		{obj !== undefined?(
		<>
			<p>{obj.time}  {obj.day} {obj.month}</p>
			</>
	): <></>}
	</>)


}

export default Time
