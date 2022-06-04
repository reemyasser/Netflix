
<<<<<<< HEAD
import "./login.css";
import { useTranslation } from 'react-i18next';

export default function Login() {
  const { t, i18n } = useTranslation();
=======
import { Button } from "@mui/material";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import {useState} from "react";
import "./login.css";

export default function Login({stateChanger,Token,User}) {
 const navigate=useNavigate();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const checkAuth=(_email,_password)=>{
  const data = {email:_email,password:_password};
  const myRequest = new Request('auth/login', {
      method: 'POST',
      mode: 'cors',
      headers:{
        'Access-Control-Allow-Origin':'*',
        'Content-Type':'application/json',
      
       
      },  
      body:JSON.stringify(data),
    });
    try{
     
       fetch(myRequest)
       .then((respose)=>(respose.json()))
       .then((data)=>{Token(data["accessToken"]);User(data);stateChanger(true); navigate("/home")})
      .catch((err)=>console.log("error"+ err))
    }
    catch(err){
      console.log(err)
    }
  }
 const check=()=>{
  checkAuth(email,password);
  
 };
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
<<<<<<< HEAD
      <form>
          <h1>{t("Sign In")}</h1>
          <input type="email" placeholder={t("Email or phone number")} />
          <input type="password" placeholder={t("Password")} />
          <button className="loginButton">{t("Sign In")}</button>
          <span>
          {t("New to Netflix?")} <b>{t("Sign up now.")}</b>
          </span>
          <small>
          {t(`This page is protected by Google reCAPTCHA to ensure you're not a bot.`)} <b>{t(`Learn more`)}</b>.
          </small>
        </form>
=======
      <div  className="form">
          <h1>Sign In</h1>
          <input type="email" placeholder="Email"  onChange={(e)=>{ setEmail(e.target.value);}}/>
          <input type="password" placeholder="Password"  onChange={(e)=>{ setPassword(e.target.value);}} />
          <Button className="loginButton" onClick={check}>Sign In</Button>
          <span>
            New to Netflix? <NavLink to={`/register`}>Sign up now.</NavLink>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </div>
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54


      </div>
    </div>
  );
}
