import types from '../actions/types';

const DEFAULT_STATE = {
    all: [],
    single: {},
};

export default (state=DEFAULT_STATE, action) => {
    switch(action.type){
        // case types.UPDATE_FISH_DATA:
        //     return{...state, data: action.payload}
        default:
            return state;
    }
}