import React from 'react'
import Photo from "../img/baby.jpg"

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user' />
      </div>
      <div className="userChat">
        <img src={Photo} alt="" />
        <div className="userChatInfo">
          <span>Sachin</span>
        </div>
      </div>
    </div>
  )
}

export default Search;
