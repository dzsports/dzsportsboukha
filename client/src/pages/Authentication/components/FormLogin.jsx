import React from 'react'
import login from '../../../assets/login.jpg'

import './login.css'
import { Link } from 'react-router-dom'

const FormLogin = () => {
  return (
    <div className='log' >
        <div className="con">
            <div className="design">
                <img src={login} alt="none"/>
            </div>
            <div className="login">
                <h3 className="titlee">تسجيل</h3>
                <div className="text-input">
                    <input type="text" placeholder="اسم المستخدم"/>
                </div>
                <div className="text-input">
                    <i className="ri-lock-fill"></i>
                    <input type="password" placeholder="كلمة السر"/>
                </div>
                <button className="login-btn">تسجيل</button>
                {/* <Link to="/" className="forgot lin">نسيت كلمة السر</Link> */}
                <div className="create">
                    <Link to="/dzsports/signup" className='lin'>انشاء حساب </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormLogin