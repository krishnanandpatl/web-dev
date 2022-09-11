import { createStore } from 'redux';
//import ballReducer from './reducer/ballReducer';
//import batReducer from './Redux/reducer/batReducer';
import rootReducer from './Redux/rootReducer';
const store=createStore(rootReducer);
export default store;