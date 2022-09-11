import axios from 'axios';
import React,{useState} from 'react'
import { useAuth } from '../Context/AuthProvider';
import {useHistory} from 'react-router-dom'
function PasswordReset() {
    const [password, passwordSet] = useState("");
    const [passwordCnf, passwordCnfSet] = useState("");
    const {resetPassEmail,
        setResetEmail,
        otpPassEmail,
        setOtp}=useAuth();
    const history=useHistory();

//api call of reset password
const resetPassword=async()=>{
    try{
        let res= await axios.patch("https://foodapp8737.herokuapp.com/api/v1/auth/resetpassword",{
            otp:otpPassEmail,
            password:password,
            confirmpassword:passwordCnf,
            email:resetPassEmail
        })
        if(res.status==201){
            alert("Password changed successfully");
            setOtp(null);
            setResetEmail(null);
        }else if(res.status==200){
            if(res.result=="Otp Expired"){
                alert("OTP expired. Regenrate OTP again.");

                //instead of alert use react-roast for all
            }else if(res.result=="otp not match"){
                alert("Wrong OTP");
            }
            setOtp(null);
            setResetEmail(null);
            
        }
            
            history.push("/login");
    }catch(err){
        console.log(err.message);
        if(err.message == "Request failed with status code 500"){
            alert("Internal server error");
        }
        setOtp(null);
        setResetEmail(null);
    }
}

  return (
    <>
    {
    resetPassEmail&&otpPassEmail?
    <div className="container-grey">
            <div className="form-container">
                <div className='h1Box'>
                    <h1 className='h1'>Reset Password</h1>
                    <div className="line"></div>
                </div>
                <div className="loginBox">
                </div>
                    <div className="entryBox">
                        <div className="entryText">Password</div>
                        <input className="password input" type="text" value={password} onChange={(e) => passwordSet(e.target.value)} />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Confirm Password</div>
                        <input className="password input" type="text" value={passwordCnf} onChange={(e) => passwordCnfSet(e.target.value)} />
                    </div>
                    <button className="loginBtn  form-button" type="submit" onClick={resetPassword}>
                        Submit
                    </button>

            </div>
    </div>:
    <h2 className="container-grey">First go to Reset password</h2>
  }
    </>
    
  )
}

export default PasswordReset;