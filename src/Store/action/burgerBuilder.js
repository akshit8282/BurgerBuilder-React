import * as actionType from './actionTypes'
import axios from '../../axios-burger'
export const addIngredients=(name)=>{
    return {
IngredientsName:name,
type:actionType.ADD_INGREDIENT
    }
}
export const removeIngredients=(name)=>{
    return {
IngredientsName:name,
type:actionType.REMOVE_INGREDIENT
    }
}

export const failedIngredient=()=>{
    return {
        type:actionType.SET_INGREDIENTS_FAILED
    }
}

export const setIngredient=(ingredients)=>{
    return {
        type:actionType.SET_INGREDIENTS,
        ingredients:ingredients
    }
}
export const initIngredient=()=>{
    return dispatch=>{
        axios.get("https://react-burgerbuilder-ab5c6-default-rtdb.firebaseio.com/ingredients.json").then((res)=>{
            dispatch(setIngredient(res.data));
        }).catch(err=>{
            dispatch(failedIngredient())
        }

        );
    }
}