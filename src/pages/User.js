import React from "react";
import Navbar from "./User Pages/User Components/Navbar";
import {Redirect} from 'react-router-dom'
import { name, mobno, emailadd } from './Login';

const User = ({authorized}) => {

    if(!authorized)
    {
        return(
            <Redirect to='/login' />
        )
    }
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
    }
    
export default User;