import { actionTypes } from "../constants/actionTypes"

const initState = {
    loading: false,
    products: [],
    singleProduct: {},
    error: ''
}

export const productReducer = (state = initState, { type, payload }) => {
    switch(type) {
        case actionTypes.PRODUCT_REQUEST:
            return {
                ...state,
                products: [],
                singleProduct: {},
                loading: true
            }
        case actionTypes.PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                products: [],
                singleProduct: {},
                error: payload
            }
        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                loading: false,
                products: payload,
            }
        case actionTypes.SET_SINGLE_PRODUCT:
            return {
                ...state,
                loading: false,
                singleProduct: payload,
            }
        default: return state
    }
}