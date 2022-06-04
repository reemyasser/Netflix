import React, { useEffect } from 'react'

import "./listItem.css"

import { useState } from "react";
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { useTranslation } from 'react-i18next';
export default function ListItem({ index,movie }) {
  const { t, i18n } = useTranslation();
=======

export default function ListItem({ index,movie }) {

>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
  let [listmovie,setmovie]=useState([])
  useEffect(() => {
 
    try {
     fetch(
        `/movies/find/${movie}
        `,
        {
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODJiNjI4YzIzNGI0MWE1ODcwNGVkMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzI0NzgxMCwiZXhwIjoxNjUzNjc5ODEwfQ.6MVzAfrHKCGhzmDu1im54AKrcpnLtkfKTYbzVk70hOk"
          },
        }
    
      ).then((res)=>(res.json())).then((data)=>{
    setmovie(data)}).catch((err)=>{console.log(err)});
    } catch (err) {
      console.log(err);
    }

}, [movie]);
  const [isHovered, setIsHovered] = useState(false);
  const trailer =listmovie.trailer;

  return (
      <Link to={"/watch"}state={listmovie}>
      <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={listmovie.img}
        alt={listmovie.imgTitle}
      />
      {isHovered && (
        <>
      <iframe  src={trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

          {/* <video src={trailer} autoPlay={true} loop /> */}
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
<<<<<<< HEAD
              <span>{t("1 hour 14 mins")}</span>
=======
              <span>1 hour 14 mins</span>
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
              <span className="limit">+{listmovie.limit}</span>
              <span>{listmovie.year}</span>
            </div>
            <div className="desc">
            {listmovie.desc}
            </div>
            <div className="genre">{listmovie.genre}</div>
          </div>
        </>
      )}
    </div>
      </Link>
  );
}
