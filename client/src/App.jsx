
import React, { useState } from 'react'
import "./app.css"




import Register from './pages/register/Register'


import Home from "./pages/home/Home"
import Watch from './pages/watch/Watch'
import Login from './pages/login/Login'
import Payment from './pages/payment/Payment'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  const [user,setUser]=useState(false);
  const [token,setToken]=useState("");
  const [currUser,setCurrUser]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  
  return (

<BrowserRouter>

<Routes>
<Route path='/' element={!user? <Register setEmail={setEmail} setPassword={setPassword}/>:<Home stateChanger={setUser} Token={token} User={currUser}/>} ></Route>
<Route path='register' element={!user? <Register setEmail={setEmail} setPassword={setPassword} />:<Home stateChanger={setUser} Token={token} User={currUser}/>} ></Route>
<Route path='/payment' element={<Payment email={email} password={password}/>}></Route>
<Route path='login' element={!user? <Login  stateChanger={setUser} Token={setToken} User={setCurrUser}/>:<Home stateChanger={setUser} Token={token} User={currUser}/>} ></Route>
 {user&&(
    <>
  <Route path='/home' element={<Home stateChanger={setUser} Token={token} User={currUser}/>} ></Route>
  <Route path='/movies' element={<Home type="movie" stateChanger={setUser} Token={token} User={currUser}/>} ></Route>
  <Route path='/series' element={<Home type="series" stateChanger={setUser} Token={token} User={currUser}/>} ></Route>
  <Route path='/watch' element={<Watch />} ></Route>
  </> 
  )
  }  

</Routes>
</BrowserRouter> )

}

export default App

