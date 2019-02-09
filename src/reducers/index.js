import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import itemReducer from './item_reducer';

const rootReducer = combineReducers({
    list: itemReducer,
    form: formReducer
});

export default rootReducer;