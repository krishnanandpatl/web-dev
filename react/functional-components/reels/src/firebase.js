import {initializeApp} from "firebase/app";
import secret from "./secrets";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

let app=initializeApp(secret);
export let auth=getAuth(app);
export const db=getFirestore(app);