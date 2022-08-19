import React from 'react'
import {Route,Redirect} from 'react-router-dom';
import {Switch} from 'react-router-dom';

function Home(){
    return <div>Home</div>
}
function Homeaddon(){
    return <div>Home Add-On</div>
}
function Pagenot(){
    return <div>404</div>
}
function Router() {
  return (
    <>
    <div>Router App</div>
    <Switch>
        <Route path="/home/xyz">
            <Homeaddon></Homeaddon>
        </Route>
        <Route path="/home">
            <Home></Home>
        </Route>
        <Redirect from="/" to="/home"></Redirect>
        <Route
        ><Pagenot></Pagenot>
        </Route>

    </Switch>
    </>
  )
}

export default Router;