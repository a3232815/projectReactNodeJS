
const initialState = {
    thisOrder: {
        id: null,
        userId: null,
        ordarDate: null,
        dueDate: null
    },
    basket: []
}
export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            let hasIt = false;
            const arr0 = state.basket.filter((item) => {
                if (item.id == action.payload.id) {
                    alert("פריט זה כבר נמצא בסל הקניות שלך")
                    hasIt = true
                }


            })
            if (hasIt == false)
                return {
                    ...state,
                    basket: [...state.basket, action.payload]
                }
            else return state;
        case "FINISH_ORDER":
            return {
                ...state,
                thisOrder: action.payload
            }
        case "DEL_ORDER":
            return {
                basket:[],
                thisOrder: action.payload
            }
        case "DELETE_PRODUCT":
            const arrFilt = state.basket.filter((item) => {
                return item.id != action.payload
            })
            return {
                thisOrder: state.thisOrder,
                basket: arrFilt
            }
        case "UPDATE_QTY_OF_PRODUCT":
            let arr = state.basket.map((item) => {
                if (item.id == action.payload.prodId) {
                    return { ...item, qty: action.payload.qty }
                }
                else return item
            })
            return {
                ...state,
                basket: arr
            }
        default: return state;
    }
}