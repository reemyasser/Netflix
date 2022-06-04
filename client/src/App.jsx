
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
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Search from './pages/search/search'
import Category from './pages/Category/Category'

function App() {
  const [user,setuser]=useState(false);
  const [token,setToken]=useState("");
  const [currUser,setCurrUser]=useState("");
  
  return (

<BrowserRouter>

 <Routes>
<Route path='/' element={!user? <Register stateChanger={setuser} />:<Home type="movie"  stateChanger={setuser} Token={token} User={currUser}/>} ></Route>
<Route path='/register' element={!user? <Register stateChanger={setuser} />:<Home type="movie"   stateChanger={setuser} Token={token} User={currUser}/>} ></Route>
 <Route path={'/login'} element={!user?
   <Login  stateChanger={setuser} Token={setToken} User={setCurrUser}/>:
   <Home type="movie"   stateChanger={setuser} Token={token} User={currUser}/>} ></Route>
 {user&&(
    <>
  <Route path='/home' element={<Home   type="movie" stateChanger={setuser} Token={token} User={currUser}/>} ></Route>
  <Route path='/movies' element={<Home type="movie" stateChanger={setuser} Token={token} User={currUser}/>} ></Route>
  <Route path='/series' element={<Home type="series" stateChanger={setuser} Token={token} User={currUser}/>} ></Route>
  <Route path='/watch' element={<Watch />} ></Route>
  <Route path='/search' element={<Search stateChanger={setuser} Token={token} User={currUser} />} ></Route>
  <Route path='/category' element={<Category stateChanger={setuser} Token={token} User={currUser} />} ></Route>

  </> 
  )
  }  

</Routes>
</BrowserRouter> )

>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
}

export default App

