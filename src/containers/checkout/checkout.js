import { Component } from "react";
import React from 'react'
import CheckoutSummary from '../../components/Order/checkoutSummary'
import Contact from '../checkout/contactData/contactData'
import {Redirect, Route} from 'react-router-dom'
import {connect} from 'react-redux'
class Checkout extends Component{
   
    /* componentWillMount(){
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
     }*/
    checkoutCancel=()=>{
        this.props.history.goBack();
    }
    checkoutContinue=()=>{
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        let summary=<Redirect to="/"/>
if(this.props.ing){
    summary=(<div>
<CheckoutSummary ingredients={this.props.ing}
checkoutCancel={this.checkoutCancel}
checkoutContinue={this.checkoutContinue}

/>
<Route path={this.props.match.path+"/contact-data"} component={Contact}/>
    </div>)
}

        return summary
        
    }
}

const mapStateToProps=(state)=>{
    return {
        ing:state.burger.ingredients,
        totalPrice:state.burger.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout);
