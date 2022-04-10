import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import linkedin from './img/linkedin.png'
import HeaderOption from './HeaderOption';
import { Home } from '@mui/icons-material';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Header() {
  return (
    <div className='header'>
      <div className="header_left">
        <img src={linkedin} alt="" />
        <div className="header_search">
          <SearchIcon/>
          <input type="text" name="" id="" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={Home} title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatBubbleIcon} title='Chats'/>
        <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
        <HeaderOption Avatar={AccountCircleIcon} title='Me'/>
      </div>


    </div>
  )
}

export default Header