import { actionTypes } from "../constants/actionTypes"

const initState = {
    loading: false,
    products: [],
    error: ''
}

export const productReducer = (state = initState, { type, payload }) => {
    switch(type) {
        case actionTypes.PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                products: [],
                error: payload
            }
        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                loading: false,
                products: payload
            }
        default: return state
    }
}