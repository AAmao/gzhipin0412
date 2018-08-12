import React from 'react'
import logo from "./logo/images/logo.png"
import "./logo/lodo.less"
export default function Logo() {
    return(
        <div className='logo-container'>
            <img src={logo} alt='logo' className='logo-img' />
        </div>
    )

}