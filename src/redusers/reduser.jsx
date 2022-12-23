import { actionType } from '../contants/actionType'


const initialState = {
    userRecord: JSON.parse(localStorage.getItem('userRecord')) || []
}

export const userDetail = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.SIGNUP_USER:
            state.userRecord = [
                ...state.userRecord,
                payload
            ]
            localStorage.setItem('userRecord', JSON.stringify(state.userRecord))
            return state

        default: return state
    }
}

const token = {
    loginUser: JSON.parse(localStorage.getItem('token')) || []
}

export const loginUserData = (state = token, { type, payload }) => {
    switch (type) {
        case actionType.LOGIN_USER_DATA:
            return state

        default: return state
    }
}

const initialStateCart = {
    products: JSON.parse(localStorage.getItem('APIDATA')) || [],
    cartProduct: [],
    productBuy : {}
}

export const addToCartProduct = (state = initialStateCart, { type, payload }) => {
    switch (type) {
        case actionType.SELECTED_PRODUCT:
            const addCount = state.cartProduct.findIndex((itme) => itme.id === payload.id)
            // console.log('addCount',state.cartProduct[addCount])
            if (addCount >= 0) {
                state.cartProduct[addCount].quantity += 1;
            } else {
                const temp = { ...payload, quantity: 1 }
                // console.log('temp', temp)
                state.cartProduct = [
                    ...state.cartProduct,
                    temp
                ]
                return state
            }

        case actionType.SELECT_PRODUCT_REMOVE:
            const deleteProduct = state.cartProduct.filter((val) => val.id !== payload)
            return {
                ...state,
                cartProduct: deleteProduct
            }

        case actionType.REMOVE_ADD_PRODUCT:
            const addCountDec = state.cartProduct.findIndex((itme) => itme.id === payload.id)
            console.log('addCountDec---', addCountDec)
            if (state.cartProduct[addCountDec].quantity > 1) {
                state.cartProduct[addCountDec].quantity -= 1
                return {
                    ...state,
                    cartProduct: [
                        ...state.cartProduct
                    ]
                }
            } else if (state.cartProduct[addCountDec].quantity === 1) {
                const deleteProduct = state.cartProduct.filter((val) => val.id !== payload.id)
                return {
                    ...state,
                    cartProduct: deleteProduct
                }
            }

        case actionType.BUY_NOW_PRODUCT:
            return {
                ...state,
                productBuy: payload
            }

        default: return state
    }
}




