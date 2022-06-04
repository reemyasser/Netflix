import { useRef } from "react";
import { useState } from "react";
<<<<<<< HEAD
import "./register.css";
import { useTranslation } from 'react-i18next';
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
=======
import { NavLink,useNavigate } from "react-router-dom";
import "./register.css";

export default function Register({stateChanger}) {
  const [_email, setEmail] = useState("");
  const navigate=useNavigate();
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
<<<<<<< HEAD
    setPassword(passwordRef.current.value);
  };
  const { t, i18n } = useTranslation();
  return (
    <div className="register">
      <div className="top">
=======
    const data = {email:_email,password:passwordRef.current.value};
    const myRequest = new Request('http://localhost:4000/api/auth/register', {
        method: 'POST',
        headers:{
          'Content-Type':'application/json',
        },  
        body:JSON.stringify(data),
      });
      try{
       
         fetch(myRequest)
         .then(()=>{stateChanger(true);})
         .then((data)=>navigate('/login'))
        .catch((err)=>console.log("error"+ err))
      }
      catch(err){
        console.log(err)
      }
   
    
  }
  
  return (
   
  
    <div className="register ">
     <div className="top">
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
<<<<<<< HEAD
          <button className="loginButton">{t("Sign In")}</button>
        </div>
      </div>
      <div className="container">
        <h1>{t("Unlimited movies, TV shows, and more.")}</h1>
        <h2>{t("Watch anywhere. Cancel anytime.")}</h2>
        <p> {t("Ready to watch? Enter your email to create or restart your membership.")}</p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder={t("email address")} ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder={t("password")} ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
=======
         
         <NavLink to={`/login`} className="loginButton">Sign In</NavLink>
        
     </div>
     </div>
     <div className="container">
     
       <h1>Unlimited movies, TV shows, and more.</h1>
       <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
         </p>
      {!_email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
           </button>
          </div>
       ) : (
           <div className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
             <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
           </div>
         )}  
      </div>  
    </div> 
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
  );
}
