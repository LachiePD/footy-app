import React, {useState} from 'react';
import {useLoaderData} from 'react-router-dom';
import TableRow from '../components/TableRow.jsx';

const Ladder = () =>{
	const ladderData = useLoaderData();
	return(
		<div id="ladder">
		{	
			ladderData.map((row)=>(
				<TableRow team={row}/>

			))
		}
		</div>
	);
}

export default Ladder;
