import React,{ Component } from "react";
import Button from "../../../components/UI/Button/Button";
import style from './contactData.module.css'
import axios from '../../../axios-burger'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
import {connect} from 'react-redux'
import * as action from '../../../Store/action/index'
import withErrorHandler from '../../../withErrorHandler/withErrorHandler'
class Contact extends Component{
    state={
      orderForm:{
name:{
    elementType:"input",
    elementConfig:{
        type:"text",
        placeholder:"Your Name"
    },
    value:'',
    validation:{
        required:true,
    },
    valid:false,
    touched:false,
},
email:{
    elementType:"input",
    elementConfig:{
        type:"email",
        placeholder:"Your Email"
    },
    value:"",
    validation:{
        required:true,
    },
    valid:false,
    touched:false,
},
Phone:{
    elementType:"input",
    elementConfig:{
        type:"text",
        placeholder:"Your Phone"
    },
    value:"",
    validation:{
        required:true,
    },
    valid:false,
    touched:false, 
},
country:{
    elementType:"input",
    elementConfig:{
        type:"text",
        placeholder:"Country"
    },
    value:"",
    validation:{
        required:true,
    },
    valid:false,
    touched:false, 
},
Code:{
    elementType:"input",
    elementConfig:{
        type:"text",
        placeholder:"Postal code"
    },
    value:"",
    validation:{
        required:true,
        minLength:3,
        maxLength:6
    },
    valid:false ,
    touched:false,
},
deliveryMethod:{
    elementType:"select",
    elementConfig:{
        options:[{value:"cheapest",displayValue:"cheapest"},
        {value:"fastest",displayValue:"fastest"}
    ],
        
    },
    validation:{
        required:true,
    },
    value:"cheapest",
    valid:true ,
    ok:false
}
      },
        
        formisValid:false
    }
    validationCheck=(element,rules)=>{
let isValid=false 
if(rules.required){
isValid=element.trim()!==''
}
if(rules.minLength){
    isValid=element.length>=rules.minLength&&isValid;
}
if(rules.maxLength){
    isValid=element.length<=rules.maxLength&&isValid;
}
if(element==='cheapest'&&element==='fastest')
isValid=true
return isValid
    }
    orderHandler=(event)=>{
event.preventDefault();
const Form={};
for(let element in this.state.orderForm){
    Form[element]=this.state.orderForm[element].value;
}

  
        
        const order={
            ingredients:this.props.ing,
            price:this.props.totalPrice,
           order:Form
        }
      this.props.orderSuccess(order)
    }

inputHandler=(event,indentifier)=>{
const updatedForm={...this.state.orderForm};
const updatedElement={...updatedForm[indentifier]};

updatedElement.value=event.target.value;
const isvalidation=this.validationCheck(updatedElement.value,updatedElement.validation)
updatedElement.touched=true
updatedElement.valid=isvalidation
updatedForm[indentifier]=updatedElement;
let formValid=true;
for(let element in updatedForm){
    
    formValid=updatedForm[element].valid&&formValid;
}


this.setState({orderForm:updatedForm,formisValid:formValid});
}


render(){
let formArray=[];
for(let i in this.state.orderForm){
    formArray.push({
        id:i,
        config:this.state.orderForm[i]
    })
}

    let form=(<form onSubmit={this.orderHandler}>

       {formArray.map(i=>{
           return <Input key={i.id} elementType={i.config.elementType} 
           config={i.config.elementConfig}
           value={i.config.value} 
           changed={(event)=>this.inputHandler(event,i.id)
        
        }
        validated={!i.config.valid}
shouldValid={i.config.ok}
touched={i.config.touched}
           />
       })}
        <Button className={style.Input} disabled={!this.state.formisValid} btnType="Success" clicked={this.orderHandler}>Order</Button>
    </form>);
if(this.props.loading){
    form=<Spinner/>
}

    return(
        <div className={style.ContactData}>
<h1>Form Data</h1>
<h3>Enter your Data</h3>
{form}

        </div>
    );
}
}
const mapStateToProps=(state)=>{
    return {
        ing:state.burger.ingredients,
        totalPrice:state.burger.totalPrice,
        loading:state.order.loading
    }
}
const mapDispatchToProps=(dispatch)=>{
return {
    orderSuccess:(orderData)=>dispatch(action.initOrder(orderData))
}
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(Contact,axios));