import React from 'react';
import Navbar from './User Components/Navbar'

const userCourse = () => {
return (
	<div>
	<Navbar />
	<div className="row">
		<div className="banner">
			<img src="./images/rr5.jpg" alt="" className="srs" />
			 {<h2 className="heading">NO COURSES AVAILABLE</h2>} 
		</div>
	</div>
	</div>
);
};

export default userCourse;
