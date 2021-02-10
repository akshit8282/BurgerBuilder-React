import * as actionType from './actionTypes'

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

export const initIngredient=()=>{
    return{
        
    }
}