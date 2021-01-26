import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls=[
    {label:'Meat',type:"meat"},
    {label:'Salad',type:"salad"},
    {label:'Cheese',type:"cheese"},
    {label:'Bacon',type:"bacon"},

]


const BuildControls=(props)=>{
return(
    <div className={styles.BuildControls}>
        <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
{controls.map((ctr)=>{
return <BuildControl  
key={ctr.label} 
label={ctr.label}
added={()=>props.addIngredients(ctr.type)}
delete={()=>props.deleteIngredients(ctr.type)}
disabled={props.disabledInfo[ctr.type]}
/>
})}
<button className={styles.OrderButton} disabled={!props.purchase}
onClick={props.ordered}> ORDER NOW!</button>
    </div>
)
}
export default  BuildControls;