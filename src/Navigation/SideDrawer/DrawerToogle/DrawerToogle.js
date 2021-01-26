import React from 'react'
import style from './DrawerToogle.module.css'
function DrawerToogle(props) {
    return (
        <div className={style.DrawerToggle} onClick={props.clicked}>
           <div></div>
           <div>
               </div>
               <div></div> 
        </div>
    )
}

export default DrawerToogle
