import { FiSearch } from "react-icons/fi";
import { GoSquareFill, GoDotFill } from "react-icons/go";
import { AiFillCaretDown } from "react-icons/ai";
import Union from '../../Images/union.png';
import '../Navbar/navbar.css'
import '@fontsource/ibm-plex-sans';
import { useState, useEffect } from "react";
import SignUp from "../SignUp/signup";
import SignIn from "../SignIn/signin";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function Navbar() {
    const [openSignUp, setOpenSignUp] = useState(false);
    const [openSignIn, setOpenSignIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    const handleSignUpClick = () => {
        setOpenSignUp(true);
    };

    // const handleSignInClick = () => {
    //     setOpenSignIn(true);
    // };

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth);
    };

    return (
        <nav className='px-2 lg-px-5 d-flex justify-content-end d-lg-block my-2'>
            <SignUp setOpenSignUp={setOpenSignUp} open={openSignUp} setOpenSignIn={setOpenSignIn} />
            <SignIn setOpenSignIn={setOpenSignIn} open2={openSignIn} setOpenSignUp={setOpenSignUp} />
            <div className='Rectangle d-none d-lg-flex justify-content-between align-items-center'>
                <p className='fs-3 mx-5 text-uppercase union-color2 mb-0'>
                    <span className='union-color'>ATG.</span>W
                    <img height={24} src={Union} alt="union" className='mb-1' />
                    RLD
                </p>
                <label className='search d-flex align-items-center'>
                    <FiSearch />
                    <input type="text" placeholder='Search for your favorite groups in ATG' />
                </label>
                <div className="account">
                    {user ? (
                        <p className='mb-0' onClick={handleSignOut}>{user.email} <AiFillCaretDown /></p>
                    ) : (
                        <p onClick={handleSignUpClick} className='mb-0'>Create account. <span className='sign-color'>It's free! </span><AiFillCaretDown/></p>
                    )}
                </div>
            </div>
            <div className='menu d-lg-none d-flex'>
                <span className='square'>
                    <GoSquareFill size={23}/>
                </span>
                <span onClick={handleSignOut} className='circle '>
                    <GoDotFill size={23} />
                </span>
                <span onClick={handleSignUpClick} className='triangle'>
                    <AiFillCaretDown size={23} />
                </span>
            </div>
        </nav>
    );
}

export default Navbar;
