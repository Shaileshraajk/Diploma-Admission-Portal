import React from 'react';
import Navbar from './Admin Components/Navbar';
import background from './../../assets/bg.jpg'
const Course = () => {
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
	<h1 style={{color:"#ff0",fontSize:"90px",fontFamily:"Dosis"}}>Welcome to Student's corner.</h1>
	</div>
	</div>
);
};

export default Course;
