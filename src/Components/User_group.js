import React from 'react'
import './myStyle.css'
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import logo from "../Images/live-chat_512px.png";
const User_group = () => {
  return (
    <div className='list-container'>
        <div className='ug-header'>
          <img src={logo} style={{height:"2rem",width:"2rem"}}/>
          <p className='ug-title'>Online users</p>
        </div>
        <div className='sb-search'>
          <IconButton>
            <SearchIcon/>
          </IconButton>
          <input placeholder='Search' className='search-box'/>
          </div>
          <div className='ug-list'>
            <div className='list-tem'>
              <p className='con-icon'>P</p>
              <p className='con-title'>Praveena</p>
            </div>
            <div className='list-tem'>
              <p className='con-icon'>P</p>
              <p className='con-title'>Praveena</p>
            </div>
            <div className='list-tem'>
              <p className='con-icon'>P</p>
              <p className='con-title'>Praveena</p>
            </div>
            <div className='list-tem'>
              <p className='con-icon'>P</p>
              <p className='con-title'>Praveena</p>
            </div>
            <div className='list-tem'>
              <p className='con-icon'>P</p>
              <p className='con-title'>Praveena</p>
            </div>
            <div className='list-tem'>
              <p className='con-icon'>P</p>
              <p className='con-title'>Praveena</p>
            </div>
            <div className='list-tem'>
              <p className='con-icon'>P</p>
              <p className='con-title'>Praveena</p>
            </div>
          </div>
        </div>
    
  )
}

export default User_group