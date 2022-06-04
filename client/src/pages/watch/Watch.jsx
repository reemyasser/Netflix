import "./watch.css"
import React from 'react'
import { ArrowBackOutlined } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
<<<<<<< HEAD
import { useTranslation } from 'react-i18next';
export default function Watch() {
  const location =useLocation();
  console.log(location.state.video)

  const { t, i18n } = useTranslation();
=======

export default function Watch() {
  const location =useLocation();
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
    return (

      <div className="watch">
        <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
<<<<<<< HEAD
          {t("Home")}
        </div>
        </Link>
        {/* <video
        id="player1"
          className="video"
          autoPlay
          progress
          controls
      

          src=   "https://www.youtube.com/embed/L141JXk6wqA"   /> */}
=======
          Home
        </div>
        </Link>
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
      <iframe   className="video" width="727" height="409" src={location.state.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
    );
  }
