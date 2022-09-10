import './App.css';
//import BatuseReducer from './components/BatuseReducer';
import Ball from './BallsRedux/Ball';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Ball></Ball>
      </Provider>
    </div>
  );
}

export default App;
