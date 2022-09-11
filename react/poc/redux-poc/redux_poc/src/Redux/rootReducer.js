import {combineReducers} from 'redux';
import ballReducer from './reducer/ballReducer';
import batReducer from './reducer/batReducer';
import userReducer from './reducer/user/userReducer';
const rootReducer=combineReducers({
    Ball:ballReducer,
    Bat:batReducer,
    User:userReducer
});
export default rootReducer;