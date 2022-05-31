import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import { useState} from 'react'

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import "./navbar.css"

function Navbar() {
  const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };
     
      const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      }

  return (
     <div className={isScrolled ? "navbar scrolled" : "navbar"}>
       <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
  <Link to={"/"} className="Link">
          <span>{t("Homepage")}</span>
          </Link>
          <Link   className="Link" to={"/series"}>
          <span>{t("Series")}</span>
          </Link>
          <Link  className="Link" to={"/movies"}>
          <span>{t("Movies")}</span>
          </Link>
          <span>{t("New and Popular")}</span>
          <span>{t("My List")}</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>{t("KID")}</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>{t("Settings")}</span>
              <span>{t("Logout")}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* <button onClick={() => changeLanguage('ar')}>ar</button>
      <button onClick={() => changeLanguage('en')}>en</button> */}


<div className="btn-group">
                {i18n.language === "ar" && <input 
                    className="btn btn-outline-info" 
                    type="button" 
                    value="EN"
                    onClick={()=>{i18n.changeLanguage("en")}}
                />}

                {i18n.language === "en" && <input 
                    className="btn btn-outline-info" 
                    type="button" 
                    value="AR"
                    onClick={()=>{i18n.changeLanguage("ar")}}
                />}
            </div>
        
        </div>
        
  )
}

export default Navbar
