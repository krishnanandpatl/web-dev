import firebase from "firebase/app";
import secret from "./src/secrets"
firebase.initializeApp(secret);
export let auth=firebase.auth();