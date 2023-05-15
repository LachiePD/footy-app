import React from 'react';


const TableRow = (props) =>{
	return(
		<div className="tableRow">
		<span>{props.team.name}</span>
		<span>Wins: &nbsp;{props.team.wins}</span>
		<span>Losses: &nbsp;{props.team.losses}</span>
	
		</div>
	);
}

export default TableRow;
