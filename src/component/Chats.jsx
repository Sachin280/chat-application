import React from 'react'
import Photo from "../img/baby.jpg"

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src={Photo} alt="" />
        <div className="userChatInfo">
          <span>Sachin</span>
          {/* <p>Hello</p> */}
        </div>
      </div>

      <div className="userChat">
        <img src={Photo} alt="" />
        <div className="userChatInfo">
          <span>Sachin</span>
          {/* <p>Hello</p> */}
        </div>
      </div>

      <div className="userChat">
        <img src={Photo} alt="" />
        <div className="userChatInfo">
          <span>Sachin</span>
          {/* <p>Hello</p> */}
        </div>
      </div>
    </div>
  )
}



export default Chats;