import './App.css';
import Bat from './components/BatRedux/Bat'
import Ball from './components/BallsRedux/Ball';
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Ball></Ball>
        <Bat></Bat>
      </Provider>
    </div>
  );
}

export default App;
