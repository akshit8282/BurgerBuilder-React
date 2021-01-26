import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
const Burger=(props)=>{
    let transformedIngredients=Object.keys(props.ingredients)
    .map(ikeys=>{
        return [...Array(props.ingredients[ikeys])].map((_,i)=>{
            return <BurgerIngredients  key={ikeys+i} type={ikeys}/> 
        })
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[]);
    if(transformedIngredients.length===0){
transformedIngredients=<p>Please start adding</p>
    }
    return(
        <div className={styles.Burger}>
<BurgerIngredients type="bread-top"/>
{transformedIngredients}
<BurgerIngredients type="bread-bottom"/>
        </div>
    );
}
export default Burger;