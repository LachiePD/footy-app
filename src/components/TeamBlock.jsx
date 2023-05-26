import React from 'react';
import {useState} from 'react';
import {useContext} from 'react';
import {TeamContext} from '../index.js';
import {Link} from 'react-router-dom';

const TeamBlock = (props) =>{
	const {selectedTeam , setSelectedTeam}  = useContext(TeamContext);
	const logoUrl = "https://squiggle.com.au" + props.team.logo;

	const handleClick = () =>{
		try{
		setSelectedTeam(props.team);
		}catch(err){console.log(err)}
	}
	return(
		<div className="teamBlock">
		<Link onClick={handleClick} className="teamBlock" to={`/teamPage/${props.team.id}`}>
                <div className="teamBlockTeamName">        
		<span>{props.team.name}</span>
		</div>
               	<div id="teamBlockImageContainer">
		<img styles={{objectFit:'contain'}} src={logoUrl}/>
		</div>
	</Link>
		</div>
	);
}
export default TeamBlock;
