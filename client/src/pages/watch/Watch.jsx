import "./watch.scss"
import React from 'react'
import { ArrowBackOutlined } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

export default function Watch() {
  const location =useLocation();
  console.log(location.state.video)


    return (

      <div className="watch">
        <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
        </Link>
        {/* <video
        id="player1"
          className="video"
          autoPlay
          progress
          controls
      

          src=   "https://www.youtube.com/embed/L141JXk6wqA"   /> */}
      <iframe   className="video" width="727" height="409" src={location.state.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </div>
    );
  }