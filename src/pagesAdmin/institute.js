import React from "react";
import College from "../Adminacademy/College"
const SearchBar = () => (

    <form action="/" method="get">
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