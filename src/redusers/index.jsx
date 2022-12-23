import { combineReducers } from "redux";
import { userDetail, loginUserData,  addToCartProduct } from './reduser'

const rootReduser = combineReducers({
    userData: userDetail,
    loginUserData: loginUserData,
    CartProduct: addToCartProduct
})

export default rootReduser;
