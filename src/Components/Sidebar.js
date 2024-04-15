import React, { useState } from 'react';
import './myStyle.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import ConversationItem from './Conversationitem'; // Changed import statement to use PascalCase for component name
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Features/themeslice';

const Sidebar = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const lighttheme=useSelector(state=>state.themekey)
    
    
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

    return (
        <div className='sidebar-container'>
            <div className={'sb-header'+((lighttheme)?"":" dark")}>
                <div>
                    <IconButton >
                        <AccountCircleIcon className={'icon'+((lighttheme)?"":" dark")}/>
                    </IconButton>
                </div>
                <div>
                    <IconButton onClick={()=>{navigate('users')}}>
                        <PersonAddIcon className={'icon'+((lighttheme)?"":" dark")} />
                    </IconButton>
                    <IconButton onClick={()=>{navigate('groups')}} >
                        <GroupAddIcon className={'icon'+((lighttheme)?"":" dark")} />
                    </IconButton>
                    <IconButton onClick={()=>{navigate('create-group')}}>
                        <AddCircleIcon  className={'icon'+((lighttheme)?"":" dark")}/>
                    </IconButton>
                    <IconButton onClick={()=>dispatch(toggleTheme())}>
                        {lighttheme && <NightlightIcon className={'icon'+((lighttheme)?"":" dark")}/>}
                        {!lighttheme && <LightModeIcon className={'icon'+((lighttheme)?"":" dark")}/>}
                    </IconButton>
                </div>
            </div>
            <div className={'sb-search'+((lighttheme)?"":" dark")}>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input placeholder='search' className='search-box' />
            </div>
            <div className={'sb-conversation'+((lighttheme)?"":" dark")}>
                {conversations.map((conversation) => {
                    // Changed `props` to `conversation` directly
                    return <ConversationItem props={conversation} key={conversation.name}  />;
                })}
            </div>
        </div>
    );
};

export default Sidebar;
