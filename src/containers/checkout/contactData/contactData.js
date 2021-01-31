import React,{ Component } from "react";
import Button from "../../../components/UI/Button/Button";
import style from './contactData.module.css'
import axios from '../../../axios-burger'
import Spinner from '../../../components/UI/Spinner/Spinner'
class Contact extends Component{
    state={
        name:"",
        email:"",
        phone:"",
        address:{
            street:"",
            postalCode:""
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
            customer:{
                name:"mk batra",
                street:"test1",
                country:"aus",
            },
        }
        axios.post('/orders.json',order).then((res)=>{
                this.setState({loading:false,});
                this.props.history.push('/');
        }).catch((err)=>{
this.setState({loading:false});
        })
    }
render(){
    let form=(<form className={style.Form}>
        <input  className={style.Input} type="text" placeholder="Your Name"  />
        <input  className={style.Input}type="text" placeholder="Your Email"  />
        <input className={style.Input} type="text" placeholder="Your Phone"  />
        <input  className={style.Input}type="text" placeholder="Your Street"  />
        <input  className={style.Input}type="text" placeholder="Postal Code"  />
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