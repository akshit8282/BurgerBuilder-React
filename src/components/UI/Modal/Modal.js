import React from 'react'
import styles from './Modal.module.css'
import Aux from '../../../hoc/aut'
import Backdrop from '../backdrop/backdrop'
function Modal(props) {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div className={styles.Modal} style={{ opacity:props.show?'1':'0',
        transform:props.show?'translateY(0)':'translateY(-100vh)'}}>
            {props.children}
        </div>
        </Aux>
    )
}

export default Modal
