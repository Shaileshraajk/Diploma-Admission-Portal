import React from 'react';
import Navbar from './Admin Pages/Admin Components/Navbar';
import {Redirect} from 'react-router-dom'
import background from './../assets/adminpage1.jpg'

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
    <div style={{
                display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
                backgroundImage:`url(${background})`
            }}>
	<h1 style={{color:"#fff",fontFamily:"Dosis",fontSize:"80px"}}>Welcome Admin</h1>
    </div>
	</div>
);
}

export default Admin;
