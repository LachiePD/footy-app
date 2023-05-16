import React, { useState, useContext, createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Root from './routes/Root.jsx';
import Ladder from './routes/Ladder.jsx';
import TeamPage from './routes/TeamPage.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import {teamLoader, ladderLoader, teamPageLoader} from './api/api.js';

export const TeamContext = createContext();

const router = createBrowserRouter([
	{
		path:'/',
		element:<Root/>,
		errorElement:<ErrorPage/>,
		loader:teamLoader,
		children:[{
			path:'/',
			element:<Ladder/>,
			errorElement:<ErrorPage/>,
			loader:ladderLoader,	
		},
		{
			path:'/teamPage/:teamId',
			element:<TeamPage/>,
			errorElement:<ErrorPage/>,
			loader: ({params})=>{return teamPageLoader(params.teamId)},
			}]
	}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () =>{
	const [selectedTeam, setSelectedTeam] = useState({});
	return(
		<React.StrictMode>
		<TeamContext.Provider value={{selectedTeam, setSelectedTeam}}>
		<RouterProvider router={router}/>
		</TeamContext.Provider>
		</React.StrictMode>
	);
}
root.render(<App/>);
reportWebVitals();
