import { actionTypes } from "../constants/actionTypes"

export const setProducts = products => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products
    }
}
export const productFetchRequest = () => {
    return {
        type: actionTypes.PRODUCT_REQUEST
    }
}

export const productFetchError = error => {
    return {
        type: actionTypes.PRODUCT_ERROR,
        payload: error
    }
}

export const setSingleProduct = product => {
    return {
        type: actionTypes.SET_SINGLE_PRODUCT,
        payload: product
    }
}