import React, { useEffect, useState } from 'react'

import "./featured.css"

import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';


function Featured({type}) {

   const { t, i18n } = useTranslation();
  let [content,setcontent]=useState([])

  useEffect(()=>{
    try{
      fetch(`movies/random/${type?"?type="+type:""}`,{
        
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODJiNjI4YzIzNGI0MWE1ODcwNGVkMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzI0NzgxMCwiZXhwIjoxNjUzNjc5ODEwfQ.6MVzAfrHKCGhzmDu1im54AKrcpnLtkfKTYbzVk70hOk"
          },
        
      }).then((respose)=>(respose.json()))
      .then((data)=>{setcontent(data[0])}).catch((err)=>{console.log(err)})
    }
    catch(err){
      console.log(err)
    }
  },[])
  // console.log(content[0].img);
  return (
    <div className="featured">
      {type &&(


<div className="category">


<span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>{t("Genre")}</option>
            <option value="adventure">{t("Adventure")}</option>
            <option value="comedy">{t("Comedy")}</option>
            <option value="crime">{t("Crime")}</option>
            <option value="fantasy">{t("Fantasy")}</option>
            <option value="historical">{t("Historical")}</option>
            <option value="horror">{t("Horror")}</option>
            <option value="romance">{t("Romance")}</option>
            <option value="sci-fi">{t("Sci-fi")}</option>
            <option value="thriller">{t("Thriller")}</option>
            <option value="western">{t("Western")}</option>
            <option value="animation">{t("Animation")}</option>
            <option value="drama">{t("Drama")}</option>
            <option value="documentary">{t("Documentary")}</option>
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
          <span>{t("play")}</span>
        </button>
        <button className="more">

          <InfoOutlined/>
          <span>{t("Info")}</span>
        </button>


        </div>
        </div>
        
        
        </div>
  )
}

export default Featured
