import * as actionTypes from '../action/actionTypes'

const intialState={
    ingredients:null,
    totalPrice:4,
    error:false
}
const INGREDIENTS_PRICE={
    salad:0.3,
    meat:1.2,
    bacon:0.5,
    cheese:1
}
const reducer=(state=intialState,action)=>
{
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            return{
                ...state,
                ingredients:
                { 
                    ...state.ingredients,
                [action.IngredientsName]:state.ingredients[action.IngredientsName]+1
                },
                totalPrice:state.totalPrice+INGREDIENTS_PRICE[action.IngredientsName]
                }
            case actionTypes.REMOVE_INGREDIENT:
                return{
                    ...state,
                ingredients:
                { 
                    ...state.ingredients,
                [action.IngredientsName]:state.ingredients[action.IngredientsName]-1
                },
                totalPrice:state.totalPrice-INGREDIENTS_PRICE[action.IngredientsName]
                }
                case actionTypes.SET_INGREDIENTS:{
                    return{
                        ...state,
                        ingredients:action.ingredients,
                        error:false
                    }
                }
                case actionTypes.SET_INGREDIENTS_FAILED:{
                    return{
                        ...state,
                        error:true
                    }
                }
                default:
                    return state
    }
    
}
export default reducer;