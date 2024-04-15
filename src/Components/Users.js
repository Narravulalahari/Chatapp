import React from 'react'
import './myStyle.css'
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import logo from "../Images/live-chat_512px.png";
import { useSelector } from 'react-redux';
const Users = () => {
  const lighttheme=useSelector(state=>state.themekey)
  return (
    <div className='list-container'>
        <div className={'ug-header'+((lighttheme)?"":" dark")}>
          <img src={logo} style={{height:"2rem",width:"2rem"}}/>
          <p className={'ug-title'+((lighttheme)?"":" dark")}>Online users</p>
        </div>
        <div className={'sb-search'+((lighttheme)?"":" dark")}>
          <IconButton>
            <SearchIcon className={'icon'+((lighttheme)?"":" dark")}/>
          </IconButton>
          <input placeholder='Search' className={'search-box'+((lighttheme)?"":" dark")}/>
          </div>
          <div className= {'ug-list'+((lighttheme)?"":" dark")}>
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

export default Users