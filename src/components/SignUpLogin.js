import React, { useState } from 'react'
import "./SignUpLogin.css"

const SignUpLogin = () => {

  const [action, setAction] = useState("Sign Up")

  return (
    <>
      <div className='main_container'>
        <div className='container'>
          <h1 className='header'>{action}</h1>
          <div className='input_fields'>
            {
              action === "Login" ? "" : <input type='text' placeholder='Name' />
            }
            <input type='email' placeholder='Email Id' />
            <input type='password' placeholder='Password' />
          </div>
          {
            action === "Sign Up" ? "" : <div className='forgot_password'>
              <div>Forgot Password? <span>Click Here!</span></div>
            </div>
          }
          <div className='signup_login_btns'>
            <button className={action === "Sign Up" ? "slbtn gray" : "slbtn"} type='button' onClick={() => setAction("Login")}>Login</button>
            <button className={action === "Login" ? "slbtn gray" : "slbtn"} type='button' onClick={() => setAction("Sign Up")}>Sign Up</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpLogin
