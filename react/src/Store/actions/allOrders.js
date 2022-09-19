export const saveAllOrders=(arrOrder)=>{
    return{
        type:'SAVE_ALL_ORDERS',
        payload:arrOrder
    }

}

export const deleteOrder=(orderId)=>{
    return{
        type:'DELETE_ORDER',
        payload:orderId
    }

}