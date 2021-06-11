// import constants
import {ActionTypes} from '../constants/actionTypes';

const initialState = {
    products: []
}


export const productReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload
            };

        default: 
            return state;
    }
}

export const selectedProductReducere = (state = {}, {type,payload}) => {
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return {
                ...state,
                ...payload
            }
        // Khi ta đang xem details 1 sp, và click qua xem details sản phẩm khác thì ta cần phải xoá sản phẩm vừa xem trước đó đi (để khi xem sp khác sẽ không bị hiện lại sản phẩm đó rồi mất 1 khoảng tg ngắn mới hiện sản phẩm hiện tại lên)
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return{}
        default: 
            return state;
    }
}
