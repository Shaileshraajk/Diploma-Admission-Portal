import React from "react";
import College from "./Admin Components/College"
import Navbar from './Admin Components/Navbar';
import background from './../../assets/adminpage1.jpg'

const SearchBar = () => (

    <form action="/" method="get">
        <Navbar />
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '15vh',
            backgroundImage:`url(${background})`
        }}
        >
        <input
            className="box"
            type="text"
            id="search_text"
            placeholder="Type here to search Institute"
            name="s" 
        />
        <button type="submit" id="search"className="search" >Search</button>
        </div>
        <College/>
    </form>

);

export default SearchBar;