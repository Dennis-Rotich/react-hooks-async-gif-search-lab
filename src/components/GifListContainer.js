import React,{useEffect,useState} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer(){
    const [gifList, setGifList] = useState([]);
    const [search,setSearch] = useState('dolphin');

    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=iIrEryAAvoZi5cW09d5YmE1alrR8ZF3e&rating=g`)
        .then(res => res.json())
        .then((data) => {
            const imagesUrl = []
            data.data.map((data)=>{
                imagesUrl.push(data.images.original.url)
            })
            setGifList([imagesUrl[0],imagesUrl[1],imagesUrl[2]])
        })
        .catch(err => console.error(err))
    },[search])

    function handleSearchSubmit(e){
        e.preventDefault();
        setSearch(e.target.search.value);
        e.target.search.value = '';
    }

    return(
        <div>
            <GifSearch onSubmit={handleSearchSubmit}/>
            <GifList  gifs={gifList}/>
        </div>
    )
}

export default GifListContainer;