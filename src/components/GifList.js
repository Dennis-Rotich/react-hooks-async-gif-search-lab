import React from "react";

function GifList({gifs}){
    const gifListRender = gifs.map((gif,index)=>{
        return(
            <li key={index}><img src={gif} alt="a giphy "/></li>
        )
    })
    
    return(
        <ul>
            {gifListRender}
        </ul>
    )
}

export default GifList;