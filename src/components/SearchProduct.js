import React from "react";
import { FaSearch } from "react-icons/fa";


const SearchProduct = (props) => {
    const {value, onValueChange} = props;
    return (
        <div id="search-wrapper">
            <input id="search" type="text" placeholder="SEARCH" value={value} onChange={(event) => {onValueChange(event.target.value)}}/>
            <FaSearch style={{ color: "#ffffff", fontSize: "0.85vw" }} />
        </div>
    );
};

export default SearchProduct;
