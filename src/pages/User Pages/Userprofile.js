import React from 'react';
import Navbar from './User Components/Navbar'
import { name, mobno, emailadd } from '../Login';

const Userprofile = () => {
return (
	<div>
	<Navbar />
	<div className="row">
            <div className="ban">
                <img src="./images/rr13.jpg" alt="" className="srs" />
                    <h2 className="headi">Welcome, {name}</h2>
					<h2 className="email">Email: {emailadd}</h2>
					<h2 className="mobile">Mobile: {mobno}</h2>
         </div>
    </div>
	</div>
);
};

export default Userprofile;
