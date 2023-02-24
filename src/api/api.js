



export async function getBlogs(){
	const response = await fetch(`https://timerserver3.onrender.com/record`);
	if(!response.ok){
		const	message = `An error has occured: ${response.statusText}. If this is the first load for the day, try a refresh. Free service = slow servie :)`;
		window.alert(message);
		return;
	}
	const data = await response.json();
	return(data)

}


export async function newBlog(parameterBlog){
	const	res = await fetch(`https://timerserver3.onrender.com/record/add`, {
		method: 'POST', 
		headers:{
			"Content-Type": "application/json",
		},
		body: JSON.stringify(parameterBlog),
		})
		.catch(err => {
			window.alert(err);
			return;
		});		

}




