
import "./login.css";
import { useTranslation } from 'react-i18next';

export default function Login() {
  const { t, i18n } = useTranslation();
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


      </div>
    </div>
  );
}
