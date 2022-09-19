


const initialState = {
    arrOrders: []
}

export const allOrderReduser = (state = initialState, actions) => {
    switch (actions.type) {
        case 'SAVE_ALL_ORDERS':
            {
                return {
                    arrOrders: actions.payload
                }
            }
        case 'DELETE_ORDER':
            // const arrFilt = state.basket.filter((item) => {
            //     return item.id != action.payload
            // })
            // return {
            //     thisOrder: state.thisOrder,
            //     basket: arrFilt
            // }
            {
                let a=state.arrOrders.filter((item)=>{
                    return item.id!=actions.payload
                })
                return {
                    arrOrders:a
                }
            }

        default:
            return state;
    }

}