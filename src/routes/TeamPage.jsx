import React, {useContext} from 'react';
import {TeamContext} from '../index.js';
import {useLoaderData} from 'react-router-dom';


const TeamPage = () =>{
	const {selectedTeam , setSelectedTeam} = useContext(TeamContext);
	const teamPageData = useLoaderData();
	return(
		<div id="teamPage">
		<div className="tableRow headerRow">
		<div className="tableCell">Round</div>
		<div className="tableCell">Home Team</div>
		<div className="tableCell">Home Team Goals</div>
		<div className="tableCell">Home Team Behinds</div>
		<div className="tableCell">Home Team Scoreline</div>
		<div className="tableCell">Away Team</div>
		<div className="tableCell">Away Team Goals</div>
		<div className="tableCell">Away Team Behinds</div>
		<div className="tableCell">Away Team Scorline</div>
		<div className="tableCell">Winner</div>
		</div>

		{	
			teamPageData.games.map((game) =>{
				if(game.winner == null){return null}
				return(
			<div className="tableRow">
				<div className="tableCell">{game.round}</div>
				<div className="tableCell">{game.hteam}</div>
				<div className="tableCell">{game.hgoals}</div>
					<div className="tableCell">{game.hbehinds}</div>
					<div className="tableCell">{game.hscore}</div>
					<div className="tableCell">{game.ateam}</div>
					<div className="tableCell">{game.agoals}</div>
					<div className="tableCell">{game.abehinds}</div>
					<div className="tableCell">{game.ascore}</div>
					<div className="tableCell">{game.winner}</div>
			</div>
				)
			})
		}
			</div>
		);
		}
export default TeamPage;
