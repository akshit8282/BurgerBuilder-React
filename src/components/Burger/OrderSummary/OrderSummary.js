import React from 'react'
import Aux from '../../../hoc/aut'
import Button from '../../UI/Button/Button'


function OrderSummary(props) {
    const summary=Object.keys(props.ingredient).map(igkey=>{
    return <li key={igkey}><span style={{textTransform:'capitalize'}}>{igkey}</span>:{props.ingredient[igkey]}</li>
    })
    return (
        <Aux>
            <h3>Your Order Summary:</h3>
            <p>The Following Ingredients Are As Follows:</p>
{summary }
<p><strong>Total Price:{props.price.toFixed(2)}</strong></p>
<p>For more Checkout..?</p>
<Button clicked={props.continued} btnType="Success">CONTINUE</Button>
<Button clicked={props.cancel} btnType="Danger">CANCEL</Button>

        </Aux>
            
        
    )
}

export default OrderSummary
