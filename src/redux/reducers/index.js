// import package
import { combineReducers } from "redux";
// import reducers
import {productReducer, selectedProductReducere} from './productReducer';

const rootReducer = combineReducers({
    products: productReducer,
    selectedProduct: selectedProductReducere
})

export default rootReducer;
