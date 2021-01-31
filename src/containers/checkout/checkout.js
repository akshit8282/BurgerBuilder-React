import { Component } from "react";
import React from 'react'
import CheckoutSummary from '../../components/Order/checkoutSummary'
import Contact from '../checkout/contactData/contactData'
import {Route} from 'react-router-dom'
class Checkout extends Component{
    state={
        ingredients:{
            bacon:1,
            cheese:2,
        }
    }
     componentDidMount(){
         const ingredients={};
         const query=new URLSearchParams(this.props.location.search);
         for(let params of query.entries()){
             ingredients[params[0]]=+params[1];
         }
         this.setState({ingredients:ingredients})
     }
    checkoutCancel=()=>{
        this.props.history.goBack();
    }
    checkoutContinue=()=>{
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        return(
            <div>
<CheckoutSummary ingredients={this.state.ingredients}
checkoutCancel={this.checkoutCancel}
checkoutContinue={this.checkoutContinue}

/>
<Route path={this.props.match.path+"/contact-data"} component={Contact}/>
</div>
        );
    }
}
export default Checkout;
