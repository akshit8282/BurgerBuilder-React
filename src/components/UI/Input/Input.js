import React from 'react'
import styles from './Input.module.css'
const Input=(props)=>{
let inputElement=null;
switch(props.elementType)
{
    case "input":inputElement=<input className={styles.Input} {...props.config} value={props.value}/>
    break;
    case "textarea":inputElement=<textarea className={styles.Input} {...props}/>
    break;
    default:
       inputElement= <input className={styles.Input} {...props.config} value={props.value}/>
}
return(

    <div className={styles.Form}>
        <label className={styles.Label}>{props.label}</label>
        {inputElement}
    </div>
);
}
export default Input;