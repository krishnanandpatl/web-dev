import React, { useState } from 'react';
import '../Styles/login.css'
import axios from 'axios';
// import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';

function Otp() {
    const [otp, otpSet] = useState("");
    const {resetPassEmail,setOtp}=useAuth();
    const history=useHistory();
    const saveOtp=async()=>{
        try{
            setOtp(otp);
            ///send to password and confirmpassword page
            history.push("/passwordReset");
        }catch(err){
            console.log(err.message)
        }
    }
    return (
        <>
        {
            resetPassEmail!=null?
            <div className="container-grey">
            <div className="form-container">
                <div className='h1Box'>
                    <h1 className='h1'>Enter OTP</h1>
                    <div className="line"></div>
                </div>
                <div className="loginBox">
                    <div className="entryBox">
                        <div className="entryText">OTP</div>
                        <input className="email input" type="text" value={otp} name="Email" placeholder="Your OTP" required="" onChange={(e) => otpSet(e.target.value)} />
                    </div>
                    <button className="loginBtn  form-button" type="submit" onClick={saveOtp}>
                        Send OTP
                    </button>

                </div>
            </div>
        </div>:
        <h2 className="container-grey">First go to Reset password</h2>
        }
        </>
        
    )
}

export default Otp;
