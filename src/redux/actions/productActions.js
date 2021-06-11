// Import constants
import { ActionTypes } from '../constants/actionTypes';

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products 
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

// Khi ta đang xem details 1 sp, và click qua xem details sản phẩm khác thì ta cần phải xoá sản phẩm vừa xem trước đó đi (để khi xem sp khác sẽ không bị hiện lại sản phẩm đó rồi mất 1 khoảng tg ngắn mới hiện sản phẩm hiện tại lên)
export const removedselectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}
