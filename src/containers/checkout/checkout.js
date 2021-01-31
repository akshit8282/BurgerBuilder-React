import { Component } from "react";
import React from 'react'
import CheckoutSummary from '../../components/Order/checkoutSummary'
import Contact from '../checkout/contactData/contactData'
import {Route} from 'react-router-dom'
class Checkout extends Component{
    state={
        ingredients:null,
        price:0
    }
     componentWillMount(){
         const ingredients={};
         let price=0;
         const query=new URLSearchParams(this.props.location.search);
         for(let params of query.entries()){
             if(params[0]==="price"){
               price=params[1];
             }else
             ingredients[params[0]]=+params[1];
         }
         this.setState({ingredients:ingredients,price:price})
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
<Route path={this.props.match.path+"/contact-data"} render={(props)=>(<Contact ingredients={this.state.ingredients} price={this.state.price} {...props}/>)}/>
</div>
        );
    }
}
export default Checkout;
