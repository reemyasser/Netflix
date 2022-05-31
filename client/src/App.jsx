
import React, { useState } from 'react'

import "./app.css"




import Register from './pages/register/Register'

import Home from "./pages/home/Home"
import Watch from './pages/watch/Watch'
import Login from './pages/login/Login'

import {
  BrowserRouter,
  Routes,
  
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [user,setuser]=useState(true);
  return (
<BrowserRouter>
<Routes>

<Route path='/register' element={!user? <Register/>:<Home/>} ></Route>
<Route path='/login' element={!user? <Login/>:<Home/>} ></Route>
  {user&&(
    <>
  <Route path='/movies' element={<Home type="movie"/>} ></Route>
  <Route path='/series' element={<Home type="series"/>} ></Route>
  <Route path='/watch' element={<Watch />} ></Route>
  </>
  )
  }

  <Route path='' element={user?<Home  />:<Register/>} ></Route>

</Routes>
</BrowserRouter>
  )
}

export default App

