import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Sign Up");

  return (
    <div className='login-popup'>
        <div className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2> <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Sign Up"?<input type="text" placeholder='Your name' />:<></>}
                <input type="email" placeholder='Your email' />
                <input type="password" placeholder='Password' />
            </div>
            <button>{currState==="Login"?"Login":"Create account"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" name="" id="" />
                <p>Al continuar, acepto los términos de uso y la política de privacidad.</p>
            </div>
            {currState==="Login"
                ?<p>Crear una cuenta nueva? <span onClick={()=>setCurrState('Sign Up')}>Click Aquí</span></p>
                :<p>Ya tienes una cuenta? <span onClick={()=>setCurrState('Login')}>Inicie sesión aquí</span></p>
            }
        </div>
    </div>
  )
}

export default LoginPopup
