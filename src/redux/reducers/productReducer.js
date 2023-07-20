import { actionTypes } from "../constants/actionTypes"

const initState = {
    products: [
        {
            id: 1,
            name: 'Mobile',
            price: 23000
        }
    ]
}

export const productReducer = (state = initState, { type, payload }) => {
    switch(type) {
        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        default: return state
    }
}