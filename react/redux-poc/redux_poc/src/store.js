import { createStore,applyMiddleware } from 'redux';
//import ballReducer from './reducer/ballReducer';
//import batReducer from './Redux/reducer/batReducer';
import rootReducer from './Redux/rootReducer';
import thunk from 'redux-thunk';
const store=createStore(rootReducer,applyMiddleware(thunk));
export default store;