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
    render(){
        return(
<CheckoutSummary ingredients={this.state.ingredients} />
        );
    }
}
export default Checkout;
