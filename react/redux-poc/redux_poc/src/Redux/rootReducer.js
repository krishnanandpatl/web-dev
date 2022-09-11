import {combineReducers} from 'redux';
import ballReducer from './reducer/ballReducer';
import batReducer from './reducer/batReducer';
const rootReducer=combineReducers({
    Ball:ballReducer,
    Bat:batReducer
});
export default rootReducer;