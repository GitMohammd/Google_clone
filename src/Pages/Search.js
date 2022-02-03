import React from 'react';
import './Search.css';
import MicIcon from "@mui/icons-material/Mic";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
    return (
        <div className="search">
            <div className="search_input">
                <SearchIcon className="search_inputIcon"/>
                <input type="text" />
                <MicIcon />
            </div>
        </div>
    );
};

export default Search;