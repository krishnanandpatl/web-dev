import React,{useState,useEffect} from "react";
import {auth} from '../firebase';
import {onAuthStateChanged} from 'firebase/auth';
export const AuthContext=React.createContext();

export function AuthContextProvider({children}){
    let [cUser,setUser]=useState(null);
    let [mainloader,setMainloader]=useState(true);

    useEffect(()=>{
        onAuthStateChanged(auth,(cUser)=>{
          if(cUser){
              setUser(cUser);
          }else{
              setUser(null);
          }
          setMainloader(false);
        });
    },[]);
    let value={cUser};
    return (
        <AuthContext.Provider value={value}>
           {mainloader==false&&children}
        </AuthContext.Provider>
    )

}


