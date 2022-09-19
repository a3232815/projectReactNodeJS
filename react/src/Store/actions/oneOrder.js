

export const saveOrder = (arrProduct) => {
    return {
        type: "SAVA_ORDER",
        payload: arrProduct
    }
}

export const addTobasket = (product,qty) => {
    return {
        type: "ADD_TO_BASKET",
        payload: {...product,qty}
    }
}
export const finishOrder = (thisOrder) => {
    return {
        type: "FINISH_ORDER", 
        payload:thisOrder
    }
}
export const delOrder = () => {
    return {
        type: "DEL_ORDER", 
        payload:""
    }
}



export const deleteFromBasket = (prodId) => {
    return {
        type: "DELETE_PRODUCT",
        payload: prodId
    }
}

export const updateQtyOfProduct = (prodId, qty) => {
    return {
        type: "UPDATE_QTY_OF_PRODUCT",
        payload: { prodId, qty }
    }
}