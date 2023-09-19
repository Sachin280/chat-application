import React from 'react'
import Baby from "../img/baby.jpg"

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Sachin yadav</span>
      <div className="user">
        <img src={Baby} alt="" />
        <span>Sachin</span>
        <button>Logout</button>
      </div>
    </div>
  )
}




export default Navbar;