import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'
import { Button } from '@mui/material';
import { useState} from 'react'


import { Link ,useNavigate} from 'react-router-dom';

import "./navbar.css"

function Navbar({StateChanger,User}) {

    const [isScrolled, setIsScrolled] = useState(false);
    const navigate=useNavigate();

        window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };
     



  return (
     <div className={isScrolled ? "navbar scrolled" : "navbar"}>
       <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to={"/home"} className="Link">
          <span>Homepage</span>
          </Link>
          <Link   className="Link" to={"/series"}>
          <span>Series</span>
          </Link>
          <Link  className="Link" to={"/movies"}>
          <span>Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>{User["email"]}</span>
              <Button onClick={()=>{StateChanger(false);navigate('/login');}}>Logout</Button>
            </div>
          </div>
        </div>
      </div>
       
        
        </div>
  )
}

export default Navbar
