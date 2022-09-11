import React, { useState } from 'react';
import '../Styles/login.css'
import axios from 'axios';
// import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';

function ForgetPassword() {
    const [email, emailSet] = useState("");
    const {resetPassEmail,setResetEmail}= useAuth();
    const history=useHistory();
    const sendEmail=async()=>{
        try{
            let res=await axios.patch("https://foodapp8737.herokuapp.com/api/v1/auth/forgotpassword",{email});
           
                alert("mail sent to email");
                setResetEmail(email);
                //sending to otp page
                history.push("/otp");
            
        }catch(err){
            console.log(err.message);
            if(err.message == "Request failed with status code 404"){
                alert("User not found");
            }else if(err.message == "Request failed with status code 500"){
                alert("Internal Server Error");
            }
        }
    }
    return (
        <div className="container-grey">
            <div className="form-container">
                <div className='h1Box'>
                    <h1 className='h1'>FORGET PASSWORD</h1>
                    <div className="line"></div>
                </div>
                <div className="loginBox">
                    <div className="entryBox">
                        <div className="entryText">Email</div>
                        <input className="email input" type="email" name="Email" placeholder="Your Email" required="" onChange={(e) => emailSet(e.target.value)} />
                    </div>
                    <button className="loginBtn  form-button" type="submit" onClick={sendEmail}>
                        Send Email
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
