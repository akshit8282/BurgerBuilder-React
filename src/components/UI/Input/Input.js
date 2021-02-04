import React from 'react'
import styles from './Input.module.css'
const Input=(props)=>{
    let i=0;
let inputElement=null;
let Input=[styles.Input]
if(props.validated&&props.shouldValid&&props.touched){
Input.push(styles.Invalid);
}
switch(props.elementType)
{
    case "input":inputElement=<input className={Input.join(" ")} {...props.config} value={props.value}  onChange={props.changed}/>
    break;
    case "select":inputElement=<select className={Input.join(" ")} value={props.value}  onChange={props.changed}>
        {props.config.options.map(option=>{
           return <option key={i++} value={option.value}>{option.displayValue}</option>
        })}
    </select>
    break;
    default:
       inputElement= <input className={Input.join(" ")}  {...props.config} value={props.value}/>
}
return(

    <div className={styles.Form}>
        <label className={styles.Label}>{props.label}</label>
        {inputElement}
    </div>
);
}
export default Input;