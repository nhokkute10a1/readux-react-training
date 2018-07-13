import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';
import { Url } from '../utils/apiUrl';

//FetchApi
export const actFetchProductsRequest = (products) => {
    return (dispatch) => {
        return callApi(Url.ProductApi, 'GET', null)
            .then(res => {
                dispatch(actFetchProducts(res.data));
            })
    }
}
export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        products
    }
}


//DeleteApi
export const actDeleteProductsRequest = (id) => {
    return (dispatch) => {
        return callApi(Url.ProductApi + "/" + id, 'DELETE', null)
            .then(res => {
                dispatch(actDeleteProducts(id));
            })
    }
}
export const actDeleteProducts = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}
//AddApi
export const actAddProductsRequest = (products) => {
    return (dispatch) => {
        callApi(Url.ProductApi, 'POST', products)
            .then(res => {
                dispatch(actAddProducts(res.data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}
export const actAddProducts = (products) => {
    return {
        type: Types.ADD_PRODUCT,
        products
    }
}

//GetByIdApi
export const actGetByIdProductsRequest = (id) => {
    return (dispatch) => {
        callApi(Url.ProductApi + '/' + id, 'GET', null)
            .then(res => {
                dispatch(actGetByIdProducts(res.data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}
export const actGetByIdProducts = (products) => {
    return {
        type: Types.GET_BY_ID_PRODUCT,
        products
    }
}
//UpdateApi
export const actUpdateProductsRequest = (product) => {
    return (dispatch) => {
        callApi(Url.ProductApi + '/' + product.id, 'PUT', product)
            .then(res => {
                dispatch(actUpdateProducts(res.data))
            })
            .catch(err => {
                console.log(err);
            })
    }
}
export const actUpdateProducts = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}