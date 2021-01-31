import React from 'react'
import Aux from '../../hoc/aut'
import style from './Order.module.css'
const Order = (props) => {
const ingredients=[];
for(let ingredientName in props.ingredients){
    ingredients.push({name:ingredientName ,ammount: props.ingredients[ingredientName]})
}
let ingredientOutput=(<h1>No Order Yet</h1>);
if(ingredients){
     ingredientOutput=ingredients.map(i=>{
        return <span
        style={{
            textTransform:"capitalize",
            border:"2px solid grey",
            display:"inline-block",
            margin:"0px 4px",
            padding:"3px"
        }}
        key={i.name}>{i.name}:{i.ammount}</span>
    })
}


    return (
<Aux>

<div className={style.Order}>
        <p>Ingredients: {ingredientOutput}</p> 
        <p>Total Price:<strong>USD {props.price}</strong></p>   
            </div>
</Aux>
       
    )
}

export default Order
