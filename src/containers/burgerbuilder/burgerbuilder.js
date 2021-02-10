import React, { Component } from 'react';
import Aux from '../../hoc/aut';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-burger';
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../withErrorHandler/withErrorHandler'
import {connect} from 'react-redux'
import * as BurgeractionTypes from '../../Store/action/index'


class burgerbuilder extends Component {
    state={
        ingredients:null,
        totalPrice:4,
        purchase:false,
        purchasing:false,
        loading:false
    }
componentDidMount(){
    /*axios.get("https://react-burgerbuilder-ab5c6-default-rtdb.firebaseio.com/ingredients.json").then((res)=>{
        this.setState({ingredients:res.data});
    }).catch(err=>{console.log(err)});*/
}
    
    updatePurchaseState(ingredients)
    {
     const sum=Object.keys(ingredients).map(ikey=>{
         return ingredients[ikey];
     }).reduce((sum,el)=>{
         return sum+el;
     },0);

    return sum>0;

    }
    
    purchaseHandler=()=>{
        this.setState({purchasing:true})
    }
    purchaseCancel=()=>{
        this.setState({purchasing:false})
    }
    purchaseContinue=()=>{
        //alert('you Continued')
      
        const queryParams=[];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i)+"="+encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push("price="+this.props.totalPrice);
        const queryString=queryParams.join('&');
          this.props.history.push({
              pathname:'/checkout',
              search:"?"+queryString
          });
       
    }
    render() {
        const disabledInfo={
            ...this.props.ing
        }
        for(let keys in disabledInfo){
            disabledInfo[keys]=disabledInfo[keys]<=0;
        }
        let orderSummary=null;
        
       
        let burger=<Spinner/> 
        
        if(this.props.ing){
            burger=(<Aux>(<Burger ingredients={this.props.ing}/>
                <BuildControls addIngredients={this.props.IngredientsAdded} deleteIngredients={this.props.IngredientsRemove}
                disabledInfo={disabledInfo}
                price={this.props.totalPrice}
                purchase={this.updatePurchaseState(this.props.ing)}
                ordered={this.purchaseHandler}/>)</Aux>);
                orderSummary=<OrderSummary ingredient={this.props.ing} cancel={this.purchaseCancel} continued={this.purchaseContinue} price={this.props.totalPrice}/>
        }
        if(this.state.loading){
            orderSummary=<Spinner/>
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancel}>
                    {orderSummary}
                </Modal>
               {burger}
            </Aux>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
ing:state.ingredients,
totalPrice:state.totalPrice
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        IngredientsAdded:(ingredient)=>dispatch(BurgeractionTypes.addIngredients(ingredient)),
        IngredientsRemove:(ingredient)=>dispatch(BurgeractionTypes.removeIngredients(ingredient))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(burgerbuilder,axios));
