import React from 'react'
import BurgerLogo from '../../assets/images/28 burger-logo.png'
import style from './Logo.module.css'
function Logo() {
    return (
        <div className={style.Logo}>
            <img src={BurgerLogo} alt="My Burger"/>
        </div>
    )
}

export default Logo
