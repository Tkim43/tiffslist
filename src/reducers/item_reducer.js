import types from '../actions/types';

const DEFAULT_STATE = {
    all: [],
    single: {},
    data: [],
};

export default (state=DEFAULT_STATE, action) => {
    switch(action.type){
        case types.CREATE_ITEM_DATA:
            console.log("action", ...state, action.payload)
            return{...state, data: action.payload}
        case types.GET_ITEM_DATA:
            return{...state, data: action.payload.data.iteminfo}
        default:
            return state;
    }
}