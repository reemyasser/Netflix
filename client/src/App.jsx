
import React, { useState } from 'react'
<<<<<<< HEAD

=======
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
import "./app.css"




import Register from './pages/register/Register'


import Home from "./pages/home/Home"
import Watch from './pages/watch/Watch'
import Login from './pages/login/Login'
<<<<<<< HEAD
import Payment from './pages/payment/Payment'
import "bootstrap/dist/css/bootstrap.min.css";
=======
<<<<<<< HEAD

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
=======
>>>>>>> be08350d8f0e00d3ea213000d59b5af1421ca9c3
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

>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
}

export default App

