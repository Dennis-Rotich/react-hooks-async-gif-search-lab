import React from "react";

function GifSearch({onSubmit}){


    return(
        <form  className="gif-search" onSubmit={onSubmit}>
            <label>Search for GIFS</label>
            <input  type="text" name="search" placeholder="Search for gifs" /><br />
            <button type="submit">Search</button>
        </form>
    )
}

export default GifSearch;