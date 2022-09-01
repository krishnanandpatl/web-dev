import React,{useEffect, useState} from 'react';
import {auth} from '../firebase';
import {signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'
import { async } from '@firebase/util';

function Login() {
  let [email,setEmail]=useState("");
  let [password,setPassword]=useState("");
  let [user,setUser]=useState(null);
  let [loader,setLoader]=useState(false);
  let [error,setError]=useState("");
  let [mainloader,setMainloader]=useState(true);

  const submit=async()=>{
    try{
    setLoader(true);
    let userCred=await signInWithEmailAndPassword(auth,email, password);
    setUser(userCred.user);
    }catch(err){
      setError(err.message);
      setTimeout(()=>{
        setError("");
      },2000)
    }
    setLoader(false);
  }
  const signout=async()=>{
    await signOut(auth);
    setUser(null);
  }
  useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
        if(user){
            setUser(user);
        }else{
            setUser(null);
        }
        setMainloader(false);
      });
  },[]);

  return (
    <>
      {
      mainloader==true?<h1>Page Loading......</h1>:
      error!=""?<h1>Error is {error}</h1>:
         loader==true?<h1>.......Loading....</h1>:
            user!=null?
            <>
            <button onClick={signout}>Signout</button>
            <h1>user is {user.uid}</h1>
            </>
                : <div>
                      <div>Email</div>
                      <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"></input>
                      <div>Password</div>
                      <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"></input>
                      <div>Forget Password?</div>
                      <button type="button" onClick={submit}>Login</button>
                      <div>SignUP</div>
                  </div> 
      }
      
    </>
  )
}


export default Login;