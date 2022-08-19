
//import NavBar from './components/NavBar';
//import MainWind from './components/MainWind';
import Router from './Router';
import Home from './components/Home';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import New from './components/New';
import React from 'react'
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

function MovieApp() {
  return (
    <div className="App">
      <Switch>
        
          <Route path='/home'>
          <Home></Home>
          </Route>
          <Route path='/login'>
          <Login></Login>
          </Route>
          <Route path='/new'>
          <New></New>
          </Route>
          <Redirect from='/' to='/home'></Redirect>
          <Route>
            <PageNotFound></PageNotFound>
          </Route>
      </Switch>

    </div>
  );
}

export default MovieApp;