import types from '../actions/types';

const DEFAULT_STATE = {
    all: [],
    single: {},
    data: [],
};

export default (state=DEFAULT_STATE, action) => {
    switch(action.type){
        case types.STORE_IMAGE:
            return{...state}
        case types.CREATE_ITEM_DATA:
        // console.log("action", action.payload.data.newID )
            return{...state, single: action.payload.data.newID}
        case types.GET_ITEM_DATA:
            return{...state, data: action.payload.data.iteminfo}
        default:
            return state;
    }
}