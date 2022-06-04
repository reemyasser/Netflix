<<<<<<< HEAD
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import { useState} from 'react'

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import "./navbar.css"

function Navbar() {
  const { t, i18n } = useTranslation();
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
=======
import { ArrowDropDown} from '@mui/icons-material'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';

import { useEffect, useState} from 'react'


import { Link ,useNavigate} from 'react-router-dom';

import "./navbar.css"
import { Button } from '@mui/material';


function Navbar({StateChanger,User}) {

    const [isScrolled, setIsScrolled] = useState(false);
   let [searchval, setsearch] = useState();

    const navigate=useNavigate();

        window.onscroll = () => {
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };
     
<<<<<<< HEAD
<<<<<<< HEAD


=======
      const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      }
>>>>>>> be08350d8f0e00d3ea213000d59b5af1421ca9c3
=======
useEffect(()=>{

},[searchval])
const searchvalue=(e)=>{
setsearch(e.target.value);
}
<<<<<<< HEAD
>>>>>>> 79fa2c045847a3207cb44f00bd871ded90a34b83
=======
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
>>>>>>> be08350d8f0e00d3ea213000d59b5af1421ca9c3

  return (
     <div className={isScrolled ? "navbar scrolled" : "navbar"}>
       <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
<<<<<<< HEAD
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
=======
          <Link state={searchval} to={"/home"} className="Link">
          <span>Homepage</span>
          </Link>
          <Link state={searchval}  className="Link" to={"/series"}>
          <span>Series</span>
          </Link>
          <Link state={searchval}  className="Link" to={"/movies"}>
          <span>Movies</span>
          </Link>
         
     
        </div>
        <div className="right">
      

          <Paper
      component="form"
      sx={{height:40,marginRight:10, display: 'flex', alignItems: 'center', width: 300 }}
    >
   
      <InputBase
      
      onChange={searchvalue}
        sx={{  ml: 1, flex: 1 }}
        
        placeholder="Search Movies"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Link  state={searchval}  className="Link"  to={"/search"}>
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      </Link>

    </Paper>



>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
<<<<<<< HEAD
              <span>{t("Settings")}</span>
              <span>{t("Logout")}</span>
=======
              <span>{User["email"]}</span>
              <Button onClick={()=>{StateChanger(false);navigate('/login');}}>Logout</Button>
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      
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
=======
       
        
        </div>
  )
}

export default Navbar;
>>>>>>> 17009a013a73f2f26e197ac3eee3fffaea0d3e54
