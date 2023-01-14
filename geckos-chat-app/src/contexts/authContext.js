import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from "../components/firebase";

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

    const value = { user };

    /* jshint ignore: start */
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
    /* jshint ignore: end */

};