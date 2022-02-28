import React from "react";
import Navbar from "./User Pages/User Components/Navbar";
import {Redirect} from 'react-router-dom'

const User = ({authorized}) => {

   // if(!authorized)
    //{
      //  return(
        //    <Redirect to='/' />
        //)
    //}
    return (
      <div className="container">
      <Navbar/>
      <div className="row">
        <div className="ban">
          <img src="./images/rr13.jpg" alt="" className="srs" />
           {<h2 className="headi">WELCOME USER</h2>} 
        </div>
      </div>
    </div>
    );
    }
    
export default User;