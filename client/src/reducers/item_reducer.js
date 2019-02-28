import types from '../actions/types';

const DEFAULT_STATE = {
    all: [],
    single: {},
    data: [],
};

export default (state=DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_ALL_DATA:
            return{...state, data: action.payload}
        case types.GET_SINGLE_ITEM:
        console.log("action", action.payload.data)
            return{...state, data: action.payload.data.item[0]}
        case types.GET_IMAGE:
            return{...state, images: action.payload.data.imageurl,}
        case types.STORE_IMAGE:
            return{...state}
        case types.CREATE_ITEM_DATA:
            return{...state, single: action.payload.data.newID}
        case types.GET_ITEM_DATA:
            return{...state, data: action.payload.data.iteminfo}
        default:
            return state;
    }
}