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
    value:''
},
email:{
    elementType:"input",
    elementConfig:{
        type:"email",
        placeholder:"Your Email"
    },
    value:"" 
},
Phone:{
    elementType:"input",
    elementConfig:{
        type:"text",
        placeholder:"Your Phone"
    },
    value:"" 
},
country:{
    elementType:"input",
    elementConfig:{
        type:"text",
        placeholder:"Country"
    },
    value:"" 
},
Code:{
    elementType:"input",
    elementConfig:{
        type:"text",
        placeholder:"Postal code"
    },
    value:"" 
},
deliveryMethod:{
    elementType:"select",
    elementConfig:{
        options:[{value:"cheapest",displayValue:"cheapest"},
        {value:"fastest",displayValue:"fastest"}
    ],
        
    },
    value:"" 
}
      },
        loading:false
    }
    orderHandler=(event)=>{
event.preventDefault();

  this.setState({loading:true});
        this.setState({purchasing:true})
        const order={
            ingredients:this.props.ingredients,
            price:this.props.price,
           
        }
        axios.post('/orders.json',order).then((res)=>{
                this.setState({loading:false,});
                this.props.history.push('/');
        }).catch((err)=>{
this.setState({loading:false});
        })
    }




render(){
let formArray=[];
for(let i in this.state.orderForm){
    formArray.push({
        id:i,
        config:this.state.orderForm[i]
    })
}

    let form=(<form >

       {formArray.map(i=>{
           return <Input key={i.id} elementType={i.config.elementType} 
           config={i.config.elementConfig}
           value={i.config.value} />
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