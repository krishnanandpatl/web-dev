import './App.css';
import React,{useContext} from 'react'
import Login from './components/Login';
import Signup from './components/Signup';
import Feed from './components/Feed';
import Forget from './components/Forget';
import Profile from './components/Profile';
import PageNotFound from './components/PageNotFound';
import { AuthContextProvider,AuthContext } from './context/AuthContext';
import {Switch,Route,Redirect} from 'react-router-dom';

function App() {
 
  return (
    <>
    <AuthContextProvider>
    <Switch>
      <RedirectToFeed path='/login' exact comp={Login}>
      </RedirectToFeed>
      <RedirectToFeed path='/signup' exact comp={Signup}>
      </RedirectToFeed>
      <RedirectToFeed path='/forget' exact comp={Forget}>
      </RedirectToFeed>
      <PrivateRoute path='/profile' exact comp={Profile}>
      </PrivateRoute>
      <PrivateRoute path='/' exact comp={Feed}>
      </PrivateRoute>
      <Route>
        <PageNotFound/>
      </Route>
    </Switch>
    </AuthContextProvider>
    </>
      );
}
function PrivateRoute(props){
  let Component=props.comp;
  let cUser=useContext(AuthContext);
  return(
    <Route 
    {...props}
    render={
      (props)=>{
        return cUser!=null? <Component {...props}></Component>:<Redirect {...props} to="/login"></Redirect>
        
      }
    }>

    </Route>
  )
}
function RedirectToFeed(props){
  let Component=props.comp;
  let cUser=useContext(AuthContext);
  return(
    <Route 
    {...props}
    render={
      (props)=>{
        return cUser!=null? <Redirect {...props} to="/"></Redirect>:<Component {...props}></Component>
        
      }
    }>

    </Route>
  )
}
export default App;