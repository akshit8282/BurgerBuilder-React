import React from 'react'
import styles from './Navigationitem.module.css'
function Navigationitem(props) {
    return (
        <li className={styles.Navigationitem}><a href={props.link} className={props.active?styles.active:null}>
            {props.children}</a></li>
    )
}

export default Navigationitem
