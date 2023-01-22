import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from "../components/firebase";
import firebase from 'firebase/compat/app';

//Create context
const AuthContext = React.createContext();


export const useAuth = () => useContext(AuthContext);

// Gets user from firebase auth and sets the new user
// Then reroutes to react
export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
            if (user) { 
                navigate('/chats'); 
            } 
        });
    }, [user, navigate]);

    //const value = { user };
    const value = {
        user,
        signup: (email, password) => {
            return firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    setUser(user);
                    navigate('/chats');
                })
                .catch((error) => {
                    console.log("Error creating user:", error);
                    throw error;
                });
        },
        login: (email, password) => {
            return firebase.auth().signInWithEmailAndPassword(email, password)
                .then((user) => {
                    setUser(user);
                    navigate('/chats');
                })
                .catch((error) => {
                    console.log("Error logging in:", error);
                    throw error;
                });
        },
        logout: () => {
            return firebase.auth().signOut()
                .then(() => {
                    setUser(null);
                    navigate('/');
                })
                .catch((error) => {
                    console.log("Error logging out:", error);
                    throw error;
                });
        }
    };

    /* jshint ignore: start */
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
    /* jshint ignore: end */

};