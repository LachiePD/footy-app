import React, {useState} from 'react';
import {useLoaderData} from 'react-router-dom';
import TableRow from '../components/TableRow.jsx';

const Ladder = () =>{
	const ladderData = useLoaderData();
	const [ladder, setLadder] = useState();
	return(
		<>
		<h1>LADDER</h1>
		</>
	);
}

export default Ladder;
