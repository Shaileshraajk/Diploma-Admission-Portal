import React from 'react';
import Navbar from './Admin Components/Navbar';


const AdminProfile = () => {
return (
	<div>

		<Navbar />

		<div style={{
                display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
            }}>
			
			<h1 style={{color:"green",fontSize:"80px",fontFamily:"Dosis"}}>Hiii Admin</h1>
		</div>
	</div>
);
};

export default AdminProfile;
