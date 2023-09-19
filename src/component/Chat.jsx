import React from 'react'
import Cam from "../img/vedio.png"
import Add from "../img/people.png"
import More from "../img/dot.png"
import Messages from './Messages'
import Input from './input'


 const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>&nbsp;Sachin</span>
        <div className="chatIcon">&nbsp;
          <img src={Cam} alt="" width={"20px"} />
          <img src={Add} alt="" width={"20px"} />
          <img src={More} alt="" width={"20px"} />
        </div>
      </div>
        <Messages />
        <Input />
    </div>
  )
}


export default Chat;