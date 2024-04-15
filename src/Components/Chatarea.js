import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import DeleteIcon from "@mui/icons-material/Delete";
import Messageothers from '../Messageothers';
import SendIcon from "@mui/icons-material/Send";
import Messageself from './Messageself';
import { useSelector } from 'react-redux';
const Chatarea = () => {
    const [conversations, setConversations] = useState([
        {
            name: "Praveena",
            lastmessage: "Hi Akka",
            timestamp: "today"
        },
        {
            name: "Praveena",
            lastmessage: "Ela unnav",
            timestamp: "today"
        },
        {
            name: "Praveena",
            lastmessage: "Bye Akka",
            timestamp: "today"
        }
    ]);
var props=conversations[0]
const lighttheme=useSelector((state)=>state.themekey)
  return (
    
    <div className='chatArea-container'>
        <div className={'chatArea-header'+((lighttheme)?"":" dark")}>
            <p className='con-icon'>{props.name[0]}</p>
            <div className='header-text'>
                <p className='con-title'>{props.name}</p>
                <p className='con-timestamp'>{props.timestamp}</p>
            </div>
            <IconButton>
                <DeleteIcon className={'icon'+((lighttheme)?"":" dark")}/>
            </IconButton>
            </div>
       
        <div className='messages-container'>
            <Messageothers/>
            <Messageself/>
            <Messageothers/>
            <Messageself/>
            <Messageothers/>
            <Messageself/>
            <Messageothers/>
            <Messageself/>
        </div>
        <div className={'text-input-area'+((lighttheme)?"":" dark")}>
            <input placeholder="Type a message" className='search-box'/>
            <IconButton>
                <SendIcon className={'icon'+((lighttheme)?"":" dark")}/>
            </IconButton>
        </div>


    </div>
  )
}

export default Chatarea