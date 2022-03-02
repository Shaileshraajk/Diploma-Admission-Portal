import React from 'react';
import { StyledContainer3 } from '../../components/Styles';
import Navbar from './Admin Components/Navbar';
// import background from './../../assets/courses1.jpg'

const Course = () => {
return (
	<StyledContainer3>
	<div>
	<Navbar />
	<div style={{
                display: 'flex',
				justifyContent: 'center',
				alignItems: 'flex-start',
				height: '100vh',
				// backgroundImage:`url(${background})`
            }}>
	<h1 style={{color:"#fff",fontSize:"60px",fontFamily:"Dosis"}}>Courses available</h1>
	</div>
	</div>
	</StyledContainer3>
);
};

export default Course;
