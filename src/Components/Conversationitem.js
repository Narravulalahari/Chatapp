import React from 'react';
import './myStyle.css'
import { useNavigate } from 'react-router-dom';

const Conversationitem = ({props}) => {
  const navigate=useNavigate()
  return (
    <div className='conversation-container' onClick={()=>{navigate('chat')}}>
      <p className='con-icon'>
        {props.name[0]}
      </p>
      <p className='con-title'>
        {props.name}
      </p>
      <p className='con-lastmessage'>
        {props.lastmessage}
      </p>
      <p className='con-timestamp'>
        {props.timestamp}
      </p>
    </div>
  );
};

export default Conversationitem;
