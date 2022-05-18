
import { LineAxisOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import {v4 as uuid} from 'uuid'
import axios from "axios"
import Navbar from '../../components/navbar/Navbar'

import "./home.scss"


function Home({type}) {
  let [list,setLists]=useState();
  let [genre,setgenre]=useState();

  useEffect(() => {
 
      try {
       fetch(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODJiNjI4YzIzNGI0MWE1ODcwNGVkMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mjc4OTQxNiwiZXhwIjoxNjUzMjIxNDE2fQ.clBDFOekjKMrTqlBpg0NtmDZOD1ayDGW_FMupFq4Tio"
            },
          }
      
        ).then((res)=>(res.json())).then((data)=>{
          console.log(data);      setLists(data)}).catch((err)=>{console.log(err)});
      } catch (err) {
        console.log(err);
      }

  }, [type, genre]);
  // useEffect(() => {
  //   const proxyurl = "https://cors-anywhere.herokuapp.com/";
  //     try {
  //       let url =`http://localhost:4000/api/lists${type ? "?type=" + type : ""}${
  //         genre ? "&genre=" + genre : ""
  //       }`
  //     fetch(
  //      url,
  //         {
  //           method:"GET",
  //            //mode:'no-cors',
  //           //mode: 'cors',
  //           credentials: "same-origin",
  //           headers: {
  //             "Access-Control-Allow-Origin": "*",
  //           //   'X-Client-Auth-Token': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODJiNjI4YzIzNGI0MWE1ODcwNGVkMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mjc4OTQxNiwiZXhwIjoxNjUzMjIxNDE2fQ.clBDFOekjKMrTqlBpg0NtmDZOD1ayDGW_FMupFq4Tio"
  //           //   ,
  //           //   "Content-Type": "application/json",
            
  //           //   token:
  //           //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODJiNjI4YzIzNGI0MWE1ODcwNGVkMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Mjc4OTQxNiwiZXhwIjoxNjUzMjIxNDE2fQ.clBDFOekjKMrTqlBpg0NtmDZOD1ayDGW_FMupFq4Tio"
  //           },
  //         }
  //       ).then((respose)=>{console.log(url,respose);  return respose.json()}).
  //       then((data)=>{setList(data);console.log(data)}).
  //       catch((err)=>{console.log(err)})
  //     } catch (err) {
  //       console.log(err);
  //     }
   
  // }, [type, genre]);


  return (
    <div className="home">
        
        
    
        <Navbar/>

        
        <Featured type={type} />

       {list&& list.map((list)=>(
        <List key={uuid()} list={list}/>

       ))}
        </div>
  )
}

export default Home