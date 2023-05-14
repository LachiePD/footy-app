import React from 'react';
import {Outlet} from 'react-router-dom';
import {useRouteError} from 'react-router-dom';
const ErrorPage = () =>{
	const error = useRouteError();
	console.error(error);
	return(
		<div id="errorPage">
			<h3> OOOPS!!</h3>
		<p>sorry, there was an unexpected error, cheeky</p>
		<p>{error.statusText || error.message}</p>
		</div>
	);


}

export default ErrorPage;
