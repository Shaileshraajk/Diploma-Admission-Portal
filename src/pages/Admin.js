import React from 'react';
import Navbar from './Admin Pages/Admin Components/Navbar';
import {Redirect} from 'react-router-dom'


const Admin = ({authorized}) => {
	if(!authorized)
    {
        return(
            <Redirect to='/' />
        )
    }
return (
	<div>
	<Navbar />
	<h1>Welcome Admin</h1>
	</div>
);
}

export default Admin;
