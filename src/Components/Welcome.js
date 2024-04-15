import React from 'react'
import logo from '../Images/live-chat_512px.png'
import { useSelector } from 'react-redux'
const Welcome = () => {
  const lighttheme=useSelector(state=>state.themekey)
  return (
    <div className={'welcome-container'+((lighttheme)?"":" dark")}>
        <img src={logo} alt='logo' className='welcome-logo'/>
        <p>view and text directly to people present in chat rooms</p>
    </div>
  )
}

export default Welcome;