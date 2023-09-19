import React from 'react'
import Add from "../img/Screenshot 2023-09-17 152430.png"

export const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Welcome to my Chat Application</span>
            <span className='title'>Log in</span>
            <form>
                <input type='email' placeholder='Enter Your Email' />
                <input type='password' placeholder='Enter Your Password' />
                <button>Sign in</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>

    </div>
  )
}
