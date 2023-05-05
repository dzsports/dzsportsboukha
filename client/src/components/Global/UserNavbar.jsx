import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './UserNavbar.css' 

import logoMain from '../../assets/Logo/LogoMain.png'

const Navbare = () => {
    const [select, setSelect] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
return (
    <>
    <nav className='userNav fixed left-0 right-0 z-50 overflow-hidden'>
        <div className="container nav w-full flex items-center">
            <div className="logo flex items-center">
                <Link to='/dzsports/interface'><img src={logoMain} className='logoImg hidden md:block' alt="DZSPORTS LOGO" onClick={scrollToTop} /></Link>
            </div>
            <div className='flex align-baseline'>
                <Link to="/dzsports/interface" className=' p-4 relative' onClick={scrollToTop} ><i class="uil uil-estate"></i></Link>
                <Link to="/dzsports/" className=' p-4 relative'><i class="uil uil-comment-alt-message"></i></Link>
                <Link to="/dzsports/" className=' p-4 relative'><i class="uil uil-bell"></i></Link>
            </div>
            <div>
                <div className="select relative">
                    <div className="head flex align-middle justify-center" onClick={(e)=> setSelect(!select)} ><i class="userIcon uil uil-user-circle"></i><span className='username mr-2'>DZSPORTS Team</span></div>
                    <div className={`options ${select ? 'show' : ''}`} onClick={(e)=>setSelect(!select)} >
                        <div className="option"><i className="uil uil-user-circle"></i><span className=' mr-2'>الحساب الشخصي</span></div>
                        <div className="option"><i className="uil uil-setting"></i><span className=' mr-2'>الإعدادات</span></div>
                        <div className="option"><i className="uil uil-sign-out-alt"></i><span className=' mr-2'>تسجيل الخروج</span></div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    </>
)
}

export default Navbare