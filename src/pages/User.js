import React from "react";
import Navbar from "./User Pages/User Components/Navbar";
import {Redirect} from 'react-router-dom'

const User = ({authorized}) => {

    if(!authorized)
    {
        return(
            <Redirect to='/' />
        )
    }
    return (
        <div>
        <Navbar />
        <h1>Welcome User</h1>
        </div>
    );
    }
    
export default User;