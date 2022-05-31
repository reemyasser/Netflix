import { useRef } from "react";
import { useState } from "react";
import "./register.css";
import { useTranslation } from 'react-i18next';
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };
  const { t, i18n } = useTranslation();
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
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
  );
}
