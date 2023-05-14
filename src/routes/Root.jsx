import React, {useContext} from 'react';
import {Outlet, useLoaderData} from 'react-router-dom';
import TeamBlock from '../components/TeamBlock.jsx';
import {TeamContext} from '../index.js';
import Ladder from './Ladder.jsx';

const Root = () =>{
	const teams = useLoaderData();
	const {selectedTeam, setSelectedTeam} = useContext(TeamContext);
	return(
		<div id="root">
		
		<div id='sidebar'>
			<h1>Team Picker</h1>
		<form id="teamForm">
		{teams.map((team) => {
			const logoUrl = "https://squiggle.com.au"+ team.logo;
			return(
				<TeamBlock
				team={team}/>
			);
		})}

		</form>

		</div>
		
		
		<div id="mainSide">
		
		<div id="contentHeader">
		<h1 > Welcome to the team picker!</h1>
		</div>

		
		<div id="contentBlock">
			<Outlet/>
		</div>

		</div>

		</div>
	);
}
export default Root;
