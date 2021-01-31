import React,{ Component } from "react";
import Button from "../../../components/UI/Button/Button";
import style from './contactData.module.css'
class Contact extends Component{
    state={
        name:"",
        email:"",
        phone:"",
        address:{
            street:"",
            postalCode:""
        }
    }
render(){
    return(
        <div className={style.ContactData}>
<h1>Form Data</h1>
<h3>Enter your Data</h3>
<form className={style.Form}>
    <input  className={style.Input} type="text" placeholder="Your Name" value="name" />
    <input  className={style.Input}type="text" placeholder="Your Email" value="email" />
    <input className={style.Input} type="text" placeholder="Your Phone" value="phone" />
    <input  className={style.Input}type="text" placeholder="Your Street" value="street" />
    <input  className={style.Input}type="text" placeholder="Postal Code" value="code" />
    <Button className={style.Input} btnType="Success">Order</Button>
</form>

        </div>
    );
}
}
export default Contact;