import * as Types from '../constants/ActionTypes';

var initialState = {};
const itemEditing = (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_BY_ID_PRODUCT:
            return action.products;
        default:
            return state;
    }
}

export default itemEditing;