import React from 'react';
import Navbar from './Admin Components/Navbar';
import background from './../../assets/courses1.jpg'

const Course = () => {
return (
	<div>
	<Navbar />
	<div style={{
                display: 'flex',
				justifyContent: 'center',
				alignItems: 'flex-start',
				height: '100vh',
				backgroundImage:`url(${background})`
            }}>
	<h1 style={{color:"#000000",fontSize:"60px",fontFamily:"Dosis"}}>Courses available</h1>
	</div>
	</div>
);
};

export default Course;
