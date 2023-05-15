import React, {useContext} from 'react';
import {TeamContext} from '../index.js';
import {useLoaderData} from 'react-router-dom';


const TeamPage = () =>{
	const {selectedTeam , setSelectedTeam} = useContext(TeamContext);
	const teamPageData = useLoaderData();
	return(
		<div id="teamPage">
		hey
		</div>

	);

}

export default TeamPage;
