import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

//Authentication configuration for firebase gecko-chat application 
const firebaseConfig = { //To be removed and made an env variable
    apiKey: "AIzaSyBJMRFvz2B9edsi1eDRz4QfFElZgdjCvek",
    authDomain: "gecko-chat.firebaseapp.com",
    projectId: "gecko-chat",
    storageBucket: "gecko-chat.appspot.com",
    messagingSenderId: "902488253939",
    appId: "1:902488253939:web:feb62721712919a9401e86"
};

export const auth = firebase.initializeApp(firebaseConfig).auth();  