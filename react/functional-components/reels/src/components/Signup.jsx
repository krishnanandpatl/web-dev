import React, { useState } from 'react';
import {auth,db} from '../firebase';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {doc,setDoc } from "firebase/firestore"; 
import { async } from '@firebase/util';

function Signup() {
  let [email,setEmail]=useState("");
  let [name,setName]=useState("");
  let [password,setPassword]=useState("");
  let [error,setError]=useState("");
  let [loader,setLoader]=useState(false);
  //let [user,setUser]=useState("");

  const signup=async()=>{
    try{
      setLoader(true);
      let usr=await createUserWithEmailAndPassword(auth,email,password);
      await setDoc(doc(db, "users", usr.user.uid), {
        email,
        name,
        reelsIds: [],
        profileImgUrl: "",
        userId: usr.user.uid
    });
    //setUser(null);
      
    }catch(err){
        console.log(err);
      setError(err.message);
      setTimeout(()=>{
        setError("");
      },2000)
    }
    setLoader(false);
  }

  return (
    <>
    {
      error!=""?<h1>Error is {error}</h1>:
    loader==true?<h1>.......Loading....</h1>:

    <>
      <div>Email</div>
      <input type="email" placeholder="email" onChange={(e)=>{setEmail(e.target.value)}}></input>
      <div>Name</div>
      <input type="text" placeholder="name"onChange={(e)=>{setName(e.target.value)}}></input>
      <div>Password</div>
      <input type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}></input>
      <button onClick={signup}>Signup</button>
      <div>Login</div>
    </>
    }
    </>
  )
}

export default Signup