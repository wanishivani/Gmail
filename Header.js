import ReorderIcon from "@mui/icons-material/Reorder";
import React from "react";
import "./Header.css";
import HelpIcon from '@mui/icons-material/Help';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';
// import ReorderIcon from '@mui/icons-material/core';
import { useAuth0 } from "@auth0/auth0-react";

import { IconButton,Avatar } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import gmail from './gmail.png';
import Home from "./Home";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function Header() {
  const {  isAuthenticated ,user } = useAuth0();

  return(

  <div>
<Home/>
      <div className="header">
        <div className="header_left">
          <IconButton>
            <ReorderIcon></ReorderIcon>
          </IconButton>
          <h1 style={{fontFamily:'Ariel'}}>Gmail</h1> <img src={gmail} alt="Gmail logo!"/>

        </div>
        <div className="header_middle">
          <div className="search_mail">
            <IconButton>
              <SearchIcon></SearchIcon>
            </IconButton>

            <input type="text" placeholder="Search mail"></input>

          <IconButton>
            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
          </IconButton>
         

        </div>
        {isAuthenticated && 
    <p style={{color: "#333" ,fontSize:'30px',margin:'1rem',border:'1px solid pink' ,backgroundColor:"bisque"}}>
      {user.name}</p>}
      </div>

<div className='header_right'>
           <IconButton>
            <HelpIcon></HelpIcon>
           </IconButton>

          <IconButton>
            <SettingsIcon></SettingsIcon>
          </IconButton> 
          <IconButton>
            <AppsIcon></AppsIcon>
          </IconButton>
<Avatar src='https://unsplash.com/s/photos/durga-maa.jpg'></Avatar>

</div> 
</div>

    </div>


  );
}
