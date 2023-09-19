import React from 'react'
import Add from "../img/Screenshot 2023-09-17 152430.png"

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Welcome to my Chat Application</span>
            <span className='title'>Register</span>
            <form>
                <input type='text' placeholder='Enter Your Name' />
                <input type='email' placeholder='Enter Your Email' />
                <input type='password' placeholder='Enter Your Password' />
                <input style={{display: "none"}} type='file' id='file' />
                <label htmlFor="file">
                  <img src={Add} alt="" />
                  <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>You do have an account? <a href="Login.jsx">Login</a></p>
        </div>

    </div>
  )
}
