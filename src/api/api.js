const url = process.env.REACT_APP_SQUIGGLE_URL;
const todaysDate = new Date();
const teamLoader = async() =>{
	const response = await fetch(url + "/?q=teams");
	const data = await response.json();
	return data.teams;
}

const ladderLoader = async() => {

	const year = todaysDate.getFullYear();
	const response = await fetch(url+"?q=standings");
	const data = await response.json();
	return data.standings;

}

const teamPageLoader = async(id) =>{
	const year = todaysDate.getFullYear();
	const res = await fetch(url+"?q=games;"+"year="+year+";team="+id);
	const data = await res.json();
	return data;
}
module.exports={
	teamLoader,
	ladderLoader,
	teamPageLoader,
}
