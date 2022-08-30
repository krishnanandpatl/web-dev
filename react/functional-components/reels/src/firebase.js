import {initializeApp} from "firebase/app";
import secret from "./secrets";
import {getAuth} from "firebase/auth";

let app=initializeApp(secret);
export let auth=getAuth(app);