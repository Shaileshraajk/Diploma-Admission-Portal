import React from 'react';
import Navbar from './User Components/Navbar'
const CourseEnrolled = () => {
return (
	<div>
	<Navbar />
	<div className="row">
			<div className="banner">
				<img src="./images/rr6.jpg" alt="" className="srs" />
				 {<h2 className="heading">NO COURSES ENROLLED</h2>} 
		</div>
	</div>
	</div>
);
};

export default CourseEnrolled;
