import React from "react";
import College from "./User Components/College"
import Navbar from './User Components/Navbar'

const UserInstitute = () => (

    <form action="/" method="get">
        <Navbar />
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '15vh',
        }}
        >
        <input
            className="box"
            type="text"
            id="search_text"
            placeholder="Type here to search Academy"
            name="s" 
        />
        <button type="submit" id="search"className="search" >Search</button>
        </div>
        <College/>
    </form>

);

export default UserInstitute;