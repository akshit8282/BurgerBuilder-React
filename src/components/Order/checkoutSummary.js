import React from 'react'
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button'
import style from './checkoutSummary.module.css'
const checkoutSummary = (props) => {
    return (
        <div className={style.CheckoutSummary}>
            <h1 >how its taste?..</h1>
            <div style={{margin:"auto",height:"300px",width:"100%"}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button clicked={props.checkoutContinue} btnType="Success">CONTINUE</Button>
<Button clicked={props.checkoutCancel} btnType="Danger">CANCEL</Button>
        </div>
    )
}

export default checkoutSummary
