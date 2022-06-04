import React, { useEffect, useState } from 'react'

import "./featured.css"

import { InfoOutlined, PlayArrow } from '@mui/icons-material';

function Featured({type,Token}) {
  let [content,setcontent]=useState([])

  useEffect(()=>{
    try{
      fetch(`movies/random/${type?"?type="+type:""}`,{
        
          headers: {
            token:
            `Bearer ${Token}`
          },
        
      }).then((respose)=>(respose.json()))
      .then((data)=>{setcontent(data[0])}).catch((err)=>{console.log(err)})
    }
    catch(err){
      console.log(err)
    }
  },[type,Token])
  return (
    <div className="featured">
      {type &&(


<div className="category">


<span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
</div>

      )}
        
        <img 
            src={content.img}   alt=""/>

<div className="info">
        <img
          src={content.img}        alt=""
        />
        <span className="desc">
        {content.img}  
        </span>

        <div className="buttons">

        <button className="play">

          <PlayArrow/>
          <span>play</span>
        </button>
        <button className="more">

          <InfoOutlined/>
          <span>Info</span>
        </button>


        </div>
        </div>
        
        
        </div>
  )
}

export default Featured
