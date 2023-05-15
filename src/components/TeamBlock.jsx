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
		<div className="teamBlock"
		onClick={handleClick}>
		<Link className="teamBlock" to={`/teamPage/${selectedTeam.id}`}>
                        <span>  {props.team.name}</span>
                                <img  className="teamBlockImage" src={logoUrl} alt="Missing image"/>
	</Link>
		</div>
	);
}
export default TeamBlock;
