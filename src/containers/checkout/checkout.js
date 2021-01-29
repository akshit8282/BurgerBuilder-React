import { Component } from "react";
import React from 'react'
import CheckoutSummary from '../../components/Order/checkoutSummary'
class Checkout extends Component{
    state={
        ingredients:{
            bacon:1,
            cheese:2,
        }
    }
    checkoutCancel=()=>{
        this.props.history.goBack();
    }
    checkoutContinue=()=>{
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        return(
<CheckoutSummary ingredients={this.state.ingredients}
checkoutCancel={this.checkoutCancel}
checkoutContinue={this.checkoutContinue}
/>
        );
    }
}
export default Checkout;
