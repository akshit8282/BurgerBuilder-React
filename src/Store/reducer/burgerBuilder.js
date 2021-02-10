import * as actionTypes from '../action/actionTypes'

const intialState={
    ingredients:{
        salad:0,
        bacon:0,
        meat:0,
        cheese:0
    },
    totalPrice:4,
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
                default:
                    return state
    }
    
}
export default reducer;