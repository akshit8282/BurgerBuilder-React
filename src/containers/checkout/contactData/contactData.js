import React,{ Component } from "react";
import Button from "../../../components/UI/Button/Button";
import style from './contactData.module.css'
import axios from '../../../axios-burger'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'
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
    value:"cheapest" 
}
      },
        loading:false
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
return isValid
    }
    orderHandler=(event)=>{
event.preventDefault();
const Form={};
for(let element in this.state.orderForm){
    Form[element]=this.state.orderForm[element].value;
}

  this.setState({loading:true});
        this.setState({purchasing:true})
        const order={
            ingredients:this.props.ingredients,
            price:this.props.price,
           order:Form
        }
        axios.post('/orders.json',order).then((res)=>{
                this.setState({loading:false,});
                this.props.history.push('/');
        }).catch((err)=>{
this.setState({loading:false});
        })
    }

inputHandler=(event,indentifier)=>{
const updatedForm={...this.state.orderForm};
const updatedElement={...updatedForm[indentifier]};

updatedElement.value=event.target.value;
const isvalidation=this.validationCheck(updatedElement.value,updatedElement.validation)
updatedElement.touched=true
updatedElement.valid=isvalidation
updatedForm[indentifier]=updatedElement;
this.setState({orderForm:updatedForm});
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
shouldValid={i.config.validation}
touched={i.config.touched}
           />
       })}
        <Button className={style.Input} btnType="Success" clicked={this.orderHandler}>Order</Button>
    </form>);
if(this.state.loading){
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
export default Contact;