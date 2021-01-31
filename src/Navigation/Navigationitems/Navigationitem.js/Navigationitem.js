import React from 'react'
import styles from './Navigationitem.module.css'
import {NavLink} from 'react-router-dom'
function Navigationitem(props) {
    return (
        <li className={styles.Navigationitem}>
            <NavLink to={props.link} activeClassName={styles.active} exact>
            {props.children}</NavLink></li>
    )
}

export default Navigationitem
