import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import signin from "../../Images/signin.png";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import "@fontsource/ibm-plex-sans";
import "./signin.css";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";



const SignIn = ({ setOpenSignIn, open2, setOpenSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
      setOpenSignIn(false);
      console.log(" User is signed in.");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={`main-container ${open2 ? "d-block" : "d-none"}`}>
      <div className={`signin`}>
        <p
          onClick={() => setOpenSignIn(false)}
          className="text-end d-none d-lg-block"
        >
          <RxCross1 size={25} className="close" />
        </p>
        <div className="signin-body">
          <p className="title d-none d-lg-block">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
          <div className="form-div d-flex justify-content-between">
            <div className="w-100 w-lg-50 main-form">
              <p className="d-none d-lg-block ">Sign In</p>
              <span style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
                <p style={{ margin: "0", marginInlineEnd: '49%' }} className="d-lg-none">Welcome Back!</p>

                <p onClick={() => setOpenSignIn(false)} className="text-end">
                  <RxCross1 size={25} className="close2 d-lg-none" />
                </p>
              </span>
              <input
                className="w-100 p-2"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                className="w-100 p-2"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>

              <div className="d-flex justify-content-between align-items-center">
                <button className="submit" onClick={handleSignIn}>Sign In</button>
                <p className="fp text-end d-block d-lg-none mb-0 ">
                  <span
                    className="fs-6"
                    style={{ textDecoration: "underline" }}
                    onClick={() => {
                      setOpenSignIn(false);
                      setOpenSignUp(true);
                    }}
                  >
                    or, Create account
                  </span>
                </p>
              </div>
              {error && <p className="error">{error}</p>}
              <button className="facebook w-100">
                <BsFacebook className="me-2" />
                Sign In with Facebook
              </button>
              <button
                className="google w-100 "
                style={{ marginBottom: "24px" }}
              >
                <FcGoogle className="me-2" />
                Sign In with Google
              </button>

              <a className="password " href="/">Forgot Password</a>
            </div>
            <div className="w-lg-50 img-div d-none d-lg-block">
              <p className="fp text-end">
                Don’t have an account yet?
                <span
                  className="sing-color"
                  onClick={() => {
                    setOpenSignIn(false);
                    setOpenSignUp(true);
                  }}
                >
                  Create new for free!
                </span>
              </p>
              <img className="w-100" src={signin} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
