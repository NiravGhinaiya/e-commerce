import { actionType } from "../contants/actionType"
// import FackeStoreapi from '../apis/FackeStoreapi'



export const signupUser = (data) => {
    return {
        type: actionType.SIGNUP_USER,
        payload: data
    }
}

export const loginData = (obj) => {
    return {
        type: actionType.LOGIN_USER_DATA,
    }
}




export const selectedProduct = (product) => {
    return {
        type: actionType.SELECTED_PRODUCT,
        payload: product
    }
}

export const selectProductRemove = (deletePro) => {
    return {
        type: actionType.SELECT_PRODUCT_REMOVE,
        payload: deletePro
    }
}


export const removeAddProduct = (item) => {
    return {
        type: actionType.REMOVE_ADD_PRODUCT,
        payload: item
    }
}

export const byuNowProduct = (item) => {
    return {
        type: actionType.BUY_NOW_PRODUCT,
        payload: item
    }
}