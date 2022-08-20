
//import NavBar from './components/NavBar';
//import MainWind from './components/MainWind';
import Router from './Router';
import NavBar from './components/NavBar';
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
      <NavBar/>
      <Switch>
        
          <Route path='/home' exact>
          <Home></Home>
          </Route>
          <Route path='/login' exact>
          <Login></Login>
          </Route>
          <Route path='/new' exact>
          <New></New>
          </Route>
          <Redirect from='/' to='/home' exact></Redirect>
          <Route>
            <PageNotFound></PageNotFound>
          </Route>
      </Switch>

    </div>
  );
}

export default MovieApp;