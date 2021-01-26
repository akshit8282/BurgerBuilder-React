import React from 'react'
import style from './backdrop.module.css'
function backdrop(props) {
   return props.show?<div className={style.Backdrop} onClick={props.clicked}></div>:null;
}

export default backdrop
