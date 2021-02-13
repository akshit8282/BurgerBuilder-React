import * as actionTypes from './actionTypes'

import axios from '../../axios-burger'
export const orderSuccess=(id,orderData)=>{
return{
    type:actionTypes.ORDER_SUCCESS,
    id:id,
    orderData:orderData
}
}
export const orderderFail=(error)=>{
    return {
        type:actionTypes.ORDER_FAIL,
        error:error
    }
}
export const purchaseLoading=()=>{
    return {
        type:actionTypes.PURCHASE_LOADING
    }
}
export const purchaseOrder=()=>{
    return{
        type:actionTypes.ORDER_PURCHASE
    }
}

export const initOrder=(orderData)=>{
    
    return dispatch=>{
        
        dispatch(purchaseLoading());
        axios.post('/orders.json',orderData).then((res)=>{
            dispatch(orderSuccess(res.data.name,orderData))
    }).catch((err)=>{
dispatch(orderderFail(err))
    })
    }
}