import React,{useState} from 'react'
import './myStyle.css'
import Sidebar from './Sidebar'
import Chatarea from './Chatarea'
import conversations from './Conversationitem'
import Welcome from './Welcome'
import Creategroup from './Creategroup'
import User_group from './User_group'
import { Outlet } from 'react-router-dom'
const MainContainer = () => {
  return (
    <div className='main-container'>
        <Sidebar/>
        <Outlet/>
        {/* <User_group/> */}
        {/* <Creategroup/>
{/* 
        <Welcome/> */} 

        {/* <Chatarea props={conversations[0]} /> */}
    </div>

  )
}

export default MainContainer