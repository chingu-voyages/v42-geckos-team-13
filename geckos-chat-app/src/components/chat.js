import React from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from "../components/firebase";
import { ChatEngine } from "react-chat-engine";


const Chats = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await auth.signOut();
        navigate("/");
    }
    /* jshint ignore: start */
    return (
        <div className='chats-page'>
            <div className='nav-bar'>
                <div className='logo-tab'>
                    Gecko-Chat
                </div>
                <div onClick={handleLogout} className='logout-tab'>
                    Logout
                </div>
            </div>

            <ChatEngine
                height="calc(100vh - 66px)"
                projectId="5575bb44-a3a2-4fc8-98bf-dd95ba042897" //To be removed and made an env variable
                userName="."
                userSecret="."
            />

        </div>

    );
    /* jshint ignore: end */
};


export default Chats;