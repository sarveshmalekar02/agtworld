import React, { useState, useEffect } from 'react';
import '../Banner/banner.css';
import { FaArrowLeft } from "react-icons/fa";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../../firebase";

const Banner = () => {
    const [joined, setJoined] = useState(false);
    const [userSignedIn, setUserSignedIn] = useState(false);

    const handleJoinLeaveClick = () => {
        setJoined(!joined); 
    };

    useEffect(() => {
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUserSignedIn(user); // update userSignedIn based on whether user is present
        });
        
        return () => unsubscribe();
    }, []);

    if (userSignedIn) {
        return null; // render nothing if the user is signed in
    }

    return (
        <div className='Banner position-relative'>
            <div className='btn-div d-lg-none d-flex justify-content-between px-3 pt-3'>
                <FaArrowLeft/>
                <button onClick={handleJoinLeaveClick}>{joined ?  "Join Group" : "Leave G" }</button>
            </div>
            <div className='overlay position-absolute'>
                <h1>Computer Engineering</h1>
                <p>142,765 Computer Engineers follow this</p>
            </div>
        </div>
    );
};

export default Banner;
