import React, { Component } from 'react';
import Aux from '../../hoc/aut';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-burger';
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../withErrorHandler/withErrorHandler'



const INGREDIENTS_PRICE={
    salad:0.3,
    meat:1.2,
    bacon:0.5,
    cheese:1
}
class burgerbuilder extends Component {
    state={
        ingredients:null,
        totalPrice:4,
        purchase:false,
        purchasing:false,
        loading:false
    }
componentDidMount(){
    axios.get("https://react-burgerbuilder-ab5c6-default-rtdb.firebaseio.com/ingredients.json").then((res)=>{
        this.setState({ingredients:res.data});
    }).catch(err=>{console.log(err)});
}
    
    updatePurchaseState(ingredients)
    {
     const sum=Object.keys(ingredients).map(ikey=>{
         return ingredients[ikey];
     }).reduce((sum,el)=>{
         return sum+el;
     },0);
this.setState({
    purchase:sum>0
})
    }
     addIngredients=(type)=>{
        let oldcount=this.state.ingredients[type];
        let newcount=oldcount+1;
        const newingredient={
            ...this.state.ingredients
        }
         newingredient[type]=newcount;
          let oldprice=this.state.totalPrice;
         let newprice=oldprice+INGREDIENTS_PRICE[type];
          this.setState({
              totalPrice:newprice,
              ingredients:newingredient
          })
          this.updatePurchaseState(newingredient);
    }
    deleteIngredients=(type)=>{
        let oldcount=this.state.ingredients[type];
        let newcount=oldcount-1;
        const newingredient={
            ...this.state.ingredients
        }
         newingredient[type]=newcount;
          let oldprice=this.state.totalPrice;
         let newprice=oldprice-INGREDIENTS_PRICE[type];
          this.setState({
              totalPrice:newprice,
              ingredients:newingredient
          })
          this.updatePurchaseState(newingredient)
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
        queryParams.push("price="+this.state.totalPrice);
        const queryString=queryParams.join('&');
          this.props.history.push({
              pathname:'/checkout',
              search:"?"+queryString
          });
       
    }
    render() {
        const disabledInfo={
            ...this.state.ingredients
        }
        for(let keys in disabledInfo){
            disabledInfo[keys]=disabledInfo[keys]<=0;
        }
        let orderSummary=null;
        
       
        let burger=<Spinner/> 
        
        if(this.state.ingredients){
            burger=(<Aux>(<Burger ingredients={this.state.ingredients}/>
                <BuildControls addIngredients={this.addIngredients} deleteIngredients={this.deleteIngredients}
                disabledInfo={disabledInfo}
                price={this.state.totalPrice}
                purchase={this.state.purchase}
                ordered={this.purchaseHandler}/>)</Aux>);
                orderSummary=<OrderSummary ingredient={this.state.ingredients} cancel={this.purchaseCancel} continued={this.purchaseContinue} price={this.state.totalPrice}/>
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

export default withErrorHandler(burgerbuilder,axios);
