import React, { useEffect, useState } from 'react'

import "./featured.css"

<<<<<<< HEAD
import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';


function Featured({type}) {

   const { t, i18n } = useTranslation();
  let [content,setcontent]=useState([])

  useEffect(()=>{
=======
import {  PlayArrow } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      borderColor:"white"
    },
  },
};

const names = [
  'adventure',
  'crime',
  'comedy',
  'fantasy',
  'historical',
  'horror',
  'romance',
  'thriller',
  'drama',
  'animation',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
        
  };
}


function Featured({type,Token}) {
  let [content,setcontent]=useState([])
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  useEffect(()=>{
    console.log(type)
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
    try{
      fetch(`movies/random/${type?"?type="+type:""}`,{
        
          headers: {
            token:
<<<<<<< HEAD
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODJiNjI4YzIzNGI0MWE1ODcwNGVkMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzI0NzgxMCwiZXhwIjoxNjUzNjc5ODEwfQ.6MVzAfrHKCGhzmDu1im54AKrcpnLtkfKTYbzVk70hOk"
=======
            `Bearer ${Token}`
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
          },
        
      }).then((respose)=>(respose.json()))
      .then((data)=>{setcontent(data[0])}).catch((err)=>{console.log(err)})
    }
    catch(err){
      console.log(err)
    }
<<<<<<< HEAD
  },[])
  // console.log(content[0].img);
=======
  },[type,Token])
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
  return (
    <div className="featured">
      {type &&(


<div className="category">


<span>{type === "movie" ? "Movies" : "Series"}</span>
<<<<<<< HEAD
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
=======






<div>
      <FormControl style={{backgroundColor:"white" }} sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Category</InputLabel>
        <Select
          style={{borderColor:"white" ,color:"white"}}
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <Link className="Link" state={name} to={"/category"} >
            <MenuItem 
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
            </Link>
          ))}
        </Select>
      </FormControl>
    </div>








          {/* <select name="genre" id="genre">
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
          </select> */}
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
</div>

      )}
        
        <img 
<<<<<<< HEAD
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
=======
      
            src={content.img}   alt=""/>

<div className="info">
        {/* <img
          src={content.img}        alt=""
        /> */}
        <span className="desc">
        {content.desc}  
        </span>

        <div className="buttons">
          <Link className='Link' state={content} to={"/watch"}>
        <button className="play">

          <PlayArrow/>
          <span>play</span>
        </button>
        </Link>
      




>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54


        </div>
        </div>
        
        
        </div>
  )
}

export default Featured
