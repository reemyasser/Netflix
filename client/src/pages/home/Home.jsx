
<<<<<<< HEAD

import { LineAxisOutlined } from '@mui/icons-material'
=======
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
import React, { useEffect, useState } from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import {v4 as uuid} from 'uuid'
<<<<<<< HEAD
import axios from "axios"
import Navbar from '../../components/navbar/Navbar'
import Seperator  from '../../components/Seperator/Seperator'
import FooterCompound from '../../compounds/FooterCompound'
import JumboCompound from '../../compounds/JumboCompound'
import AccordionCompound from '../../compounds/AccordionCompound'
import OptFormCompound from '../../compounds/OptFormCompound'
import Register from '../register/Register'

import Login from '../login/Login'
import '../../i18n'
import "./home.css"





function Home({type}) {
  let [list,setLists]=useState();
  let [genre,setgenre]=useState();

  useEffect(() => {
 
      try {
=======
import Navbar from '../../components/navbar/Navbar'

import "./home.css"
import { useLocation } from 'react-router-dom'



function Home({type,stateChanger,Token,User}) {
  let [list,setLists]=useState();
  let [genre,setgenre]=useState();
  let [searchval,setsearch]=useState();

  const location =useLocation();
  
  useEffect(() => {


      try {
        console.log(location)
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
       fetch(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
<<<<<<< HEAD
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODJiNjI4YzIzNGI0MWE1ODcwNGVkMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzI0NzgxMCwiZXhwIjoxNjUzNjc5ODEwfQ.6MVzAfrHKCGhzmDu1im54AKrcpnLtkfKTYbzVk70hOk"
=======
              `Bearer ${Token}`
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
            },
          }
      
        ).then((res)=>(res.json())).then((data)=>{
      setLists(data)}).catch((err)=>{console.log(err)});
      } catch (err) {
        console.log(err);
      }

<<<<<<< HEAD
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

<Seperator />
 
<JumboCompound/>
<Seperator />
     <AccordionCompound/>
     <OptFormCompound/>
     <Seperator />
       <FooterCompound/>
 

=======
  }, [type,genre,Token,location.state]);
 
  return (
    <div className="home">
        <Navbar StateChanger={stateChanger} User={User}/>

        
        <Featured type={type} Token={Token} />

       {list&& list.map((list)=>(
        <List state={searchval}  key={uuid()} list={list}/>

       ))}
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
        </div>
  )
}

export default Home
