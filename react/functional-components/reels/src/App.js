import './App.css';
import React from 'react'
import Login from './components/Login';
import Signup from './components/Signup';
import Feed from './components/Feed';
import Forget from './components/Forget';
import Profile from './components/Profile';
import PageNotFound from './components/PageNotFound';
import {Switch,Route} from 'react-router-dom';

function App() {
 
  return (
    <Switch>
      <Route path='/login' exact>
        <Login/>
      </Route>
      <Route path='/signup' exact>
        <Signup/>
      </Route>
      <Route path='/forget' exact>
        <Forget/>
      </Route>
      <Route path='/profile' exact>
        <Profile/>
      </Route>
      <Route path='/' exact>
        <Feed/>
      </Route>
      <Route>
        <PageNotFound/>
      </Route>
    </Switch>
  );
}

export default App;