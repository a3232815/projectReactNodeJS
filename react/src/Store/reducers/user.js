const initialState = {
    currentUser: ""
}

export const userReducers = (state = initialState, actions) => {
    switch (actions.type) {
        case 'CHANGE_USER':
            {
                return {
                    currentUser: actions.payload
                }
            }
        default:
            return state
    }
}