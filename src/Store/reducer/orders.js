import * as actionTypes from '../action/actionTypes'
const initialState={
    loading :false,
    order:[]
}
const reducer =(state=initialState,action)=>{
switch(action.type)
{
    case actionTypes.ORDER_SUCCESS:
        const newOrder={
            id:action.id,
            order:{...action.orderData}
        }
        return {
            ...state,
            loading:false,
            order:state.order.concat(newOrder)
        }
        case actionTypes.ORDER_FAIL:
            return{
                ...state
                ,
                loading :false,
                error:action.error
            }
            case actionTypes.PURCHASE_LOADING:
                return{
                    ...state,
                    loading:true
                }
                default:
                    return state;
}
}
export default reducer;