import React, { useState } from "react";
import "./signup.css";
import { RxCross1 } from "react-icons/rx";
import signin from "../../Images/signin.png";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import "@fontsource/ibm-plex-sans";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase";

const SignUp = ({ setOpenSignUp, open, setOpenSignIn }) => {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [name, setName] = useState(""); // for firstname
  const [lastName, setLastName] = useState("");  //for lastname

  const handleSignUp = async () => {
    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, email, password, name, lastName);
      // User signed up successfully
      console.log("success");
      setEmail("");
      setPassword("");
      setName("");
      setLastName("");


      setOpenSignUp(false);
    } catch (error) {
      // Handle sign-up errors
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className={`main-container ${open ? "d-block" : "d-none"}`}>
      <div className={`signup`}>
        <p
          onClick={() => setOpenSignUp(false)}
          className="text-end d-none d-lg-block"
        >
          <RxCross1 size={25} className="close" />
        </p>
        <div className="signup-body">
          <p className="title d-none d-sm-block">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
          <div className="form-div d-flex justify-content-between">
            <div className="w-100 w-lg-50 main-form">
              <span
                style={{
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p style={{ margin: "0", marginInlineEnd: "49%" }}>
                  Create Account
                </p>

                <p onClick={() => setOpenSignUp(false)} className="text-end">
                  <RxCross1 size={25} className="close2 d-lg-none" />
                </p>
              </span>

              <input
                className="w-50 p-2"
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <input
                className="w-50 p-2"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></input>
              <input
                className="w-100 p-2"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                className="w-100 p-2"
                type="text"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state onChange
              ></input>
              <input
                className="w-100 p-2"
                type="password"
                placeholder="Confirm Password"
              ></input>

              <div className="d-flex justify-content-between align-items-center">
                <button className="submit" onClick={handleSignUp}>
                  Create Account
                </button>
                <p className="fp text-end d-block d-lg-none mb-0">
                  <span
                    className="fs-6"
                    style={{ textDecoration: "underline" }}
                    onClick={() => {
                      setOpenSignIn(true);
                      setOpenSignUp(false);
                    }}
                  >
                    or, Sign In
                  </span>
                </p>
              </div>
              <button className="facebook w-100">
                <BsFacebook className="me-2" />
                Sign Up with Facebook
              </button>
              <button className="google w-100">
                <FcGoogle className="me-2" />
                Sign Up with Google
              </button>

              <span className="last-p text-end  d-lg-none ">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </span>
            </div>
            <div className="w-lg-50 img-div d-none d-lg-block pb-10">
              <p className="fp text-end">
                Already have an account?
                <span
                  className="sing-color"
                  onClick={() => {
                    setOpenSignIn(true);
                    setOpenSignUp(false);
                  }}
                >
                  Sign In
                </span>
              </p>
              <img
                className="w-100"
                src={signin}
                alt=""
                style={{ maxWidth: "95%", height: "auto" }}
              />
              <p className="last-p text-center ">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
