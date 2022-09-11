import { createStore } from 'redux';
//import ballReducer from './reducer/ballReducer';
import batReducer from './reducer/batReducer';
const store=createStore(batReducer);
export default store;