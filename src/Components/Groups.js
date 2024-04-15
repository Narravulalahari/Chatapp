import React from 'react'
import './myStyle.css'
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import logo from "../Images/live-chat_512px.png";
import { useSelector } from 'react-redux';
import {AnimatePresence, motion} from "framer-motion"
const Groups = () => {
  const lighttheme=useSelector((state)=>state.themekey)
  return (
    <AnimatePresence>
         <motion.div 
         initial={{opacity:0,scale:0}}
         animate={{opacity:1,scale:1}}
         exit={{opacity:0,scale:0}}
         transition={{
          ease:"anticipate",
          duration:"0.3",
         }}
         className='list-container'>
        <div className={'ug-header'+((lighttheme)?"":" dark")}>
          <img src={logo} style={{height:"2rem",width:"2rem"}}/>
          <p className={'ug-title'+((lighttheme)?"":" dark")}>Available groups</p>
        </div>
        <div className={'sb-search'+((lighttheme)?"":" dark")}>
          <IconButton>
            <SearchIcon/>
          </IconButton>
          <input placeholder='Search' className='search-box'/>
          </div>
          <div className={'ug-list'+((lighttheme)?"":" dark")}>
            <motion.div whileHover={{scale:1.01}}
            whileTap={{scale:0.98}}
             className='list-tem'>
              <p className='con-icon'>P</p>
              <p className='con-title'>Praveena</p>
            </motion.div>
            <motion.div whileHover={{scale:1.01}}
            whileTap={{scale:0.98}}
             className='list-tem'>
              <p className='con-icon'>P</p>
              <p className='con-title'>Praveena</p>
            </motion.div>
            <motion.div whileHover={{scale:1.01}}
            whileTap={{scale:0.98}}
             className='list-tem'>
              <p className='con-icon'>P</p>
              <p className='con-title'>Praveena</p>
            </motion.div>
            <motion.div whileHover={{scale:1.01}}
            whileTap={{scale:0.98}}
             className='list-tem'>
              <p className='con-icon'>P</p>
              <p className='con-title'>Praveena</p>
            </motion.div>
            <motion.div whileHover={{scale:1.01}}
            whileTap={{scale:0.98}}
             className='list-tem'>
              <p className='con-icon'>P</p>
              <p className='con-title'>Praveena</p>
            </motion.div>
            <motion.div whileHover={{scale:1.01}}
            whileTap={{scale:0.98}}
             className='list-tem'>
              <p className='con-icon'>P</p>
              <p className='con-title'>Praveena</p>
            </motion.div>
            <motion.div whileHover={{scale:1.01}}
            whileTap={{scale:0.98}}
             className='list-tem'>
              <p className='con-icon'>P</p>
              <p className='con-title'>Praveena</p>
            </motion.div>
            <motion.div whileHover={{scale:1.01}}
            whileTap={{scale:0.98}}
             className='list-tem'>
              <p className='con-icon'>P</p>
              <p className='con-title'>Praveena</p>
            </motion.div>
            <motion.div whileHover={{scale:1.01}}
            whileTap={{scale:0.98}}
             className='list-tem'>
              <p className='con-icon'>P</p>
              <p className='con-title'>Praveena</p>
            </motion.div>
            
    
          </div>
        </motion.div>
    
    </AnimatePresence>
 
  )
}

export default Groups