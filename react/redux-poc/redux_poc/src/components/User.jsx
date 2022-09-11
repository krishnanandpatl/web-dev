import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import userMiddleware from '../Redux/reducer/user/userMiddleware';

function User(props) {
    useEffect(()=>{
        props.fetchUser();
    },[]);
  return (
    <>
    <h1>USER</h1>
    {props.loading==true?<div>....Loading.....</div>:
    <h2>{props.user.name}</h2>}
    </>
  )
}
function stateToProps(store){
    return store.User;
}
function propsToDispatch(dispatch){
    return{
        fetchUser:()=>{
            return dispatch(userMiddleware);
        }
    }
}

export default connect(stateToProps,propsToDispatch)(User);