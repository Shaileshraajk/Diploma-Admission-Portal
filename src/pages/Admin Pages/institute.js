import React from "react";
import College from "./Admin Components/College"
import Navbar from './Admin Components/Navbar';
const SearchBar = () => (

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
            placeholder="Type here to search Institute"
            name="s" 
        />
        <button type="submit" id="search"className="search" >Search</button>
        </div>
        <College/>
    </form>

);

export default SearchBar;