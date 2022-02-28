import React from 'react';
import Navbar from './User Components/Navbar'

const Userprofile = () => {
return (
<div className="container">
	<Navbar/>
	<div className="row">
		<div className="banner">
			<img src="./images/rr8.jpg" alt="" className="srs" />
			
			 {<h2 className="heading">USER PROFILE</h2>} 
		</div>
	</div>
</div>
);
};

export default Userprofile;
