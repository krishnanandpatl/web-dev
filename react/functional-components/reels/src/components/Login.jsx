import React,{useState} from 'react'

function Login() {
  let [email,setEmail]=useState("");
  let [password,setPassword]=useState("");
  const printDetails=()=>{
    alert(email+" "+password)
    setEmail(null);
    setPassword(null);
  }

  return (
    <div>
      <div>logo</div>
      <div>
        <div>Email</div>
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"></input>
        <div>Password</div>
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"></input>
        <div>Forget Password?</div>
        <button type="button" onClick={printDetails}>Login</button>
        <div>SignUP</div>
      </div> 
    </div>
  )
}


export default Login;