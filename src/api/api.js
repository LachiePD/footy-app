const url = process.env.REACT_APP_SQUIGGLE_URL;


const teamLoader = async() =>{
	const response = await fetch(url + "/?q=teams");
	const data = await response.json();
	console.log(data.teams);
	return data.teams;
}

const ladderLoader = async() => {

	const response = await fetch(url+"/?q=ladder");
	const data = await response.json();
	console.log(data);
	return data;

}

module.exports={
	teamLoader,
	ladderLoader,
}
