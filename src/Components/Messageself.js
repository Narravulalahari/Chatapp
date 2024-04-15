import React from 'react'

const Messageself = () => {
    let props2={name:"You",message:'This is a sample message'}
  return (
    <div className='self-message-container'>
        <div className='messagebox'>
            <p>{props2.message}</p>
            <p className='self-timestamp'>12:00am</p>
        </div>
    </div>
  )
}

export default Messageself