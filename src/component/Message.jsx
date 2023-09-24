import React from 'react'
import Img from "../img/download.jpg"

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={Img} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={Img} alt="" />
      </div>
    </div>
  )
}



export default Message;