import { IconButton } from '@mui/material'
import React from 'react'
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import { useSelector } from 'react-redux';
const Creategroup = () => {
  const lighttheme=useSelector(state=>state.themekey)
  return (
    <div className={'creategroups-container'+((lighttheme)?"":" dark")}>
        <input placeholder='Enter group name' />
        <IconButton>
          <DoneOutlineRoundedIcon className={'icon'+((lighttheme)?"":" dark")}/>
        </IconButton>
    </div>
  )
}

export default Creategroup