import React, { useState, useEffect } from "react";
import "../AllPosts/post.css";
import Jungle from "../../Images/jungle.jpeg";
import UnSplash from '../../Images/unsplash.jpeg'
import Car from '../../Images/car.jpeg'
import { FaCaretDown, FaUsers, FaPen } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import { BiErrorCircle } from "react-icons/bi";
import {  AiTwotoneCalendar } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { IoLocationOutline, IoEyeOutline } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";
import { TbBriefcase2 } from "react-icons/tb";
import User1 from "../../Images/user1.jpeg";
import User2 from "../../Images/user2.jpeg";
import User3 from "../../Images/user3.jpeg";
import User4 from "../../Images/user4.jpeg";
import Userlist from './UserList/userlist'
import { auth } from "../../firebase";

const Post = () => {
  const [write, setWrite] = useState([]);
  const [dots1, setDots1] = useState(false);
  const [dots2, setDots2] = useState(false);
  const [dots3, setDots3] = useState(false);
  const [dots4, setDots4] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return unsubscribe; // Cleanup function to unsubscribe from the auth state change 
  }, []);
  return (
    <div className="post-section mx-auto px-3">
      <div className="col top-header d-flex justify-content-between">
        <p className="min-btn1 d-lg-none">Post(368)</p>
        <p className="min-btn2 d-lg-none">
          Filter All: <FaCaretDown />
        </p>
        <ul className="list-unstyled d-none d-lg-flex">
          <li className="active">All Post(32)</li>
          <li>Artical</li>
          <li>Event</li>
          <li>Education</li>
          <li>Job</li>
        </ul>
        <div className="post-btn d-none d-lg-block">
          <button className="btn-bg1">
            Write a Post <FaCaretDown />
          </button>
          {isLoggedIn ? (
            <button className="btn-bg1">
              Leave Group <FaCaretDown />
            </button>
          ) : (
            <button className="btn-bg2">
              Join Group <FaUsers />
            </button>
          )}
        </div>
      </div>
      <div className="col main-post">
        <div className="row ">
          <div className="col-lg-8 poster-left">

            {/* First post */}
            <div className="card">
              <img className="w-100 img" src={Jungle} alt="post-img" height={220}/>
              <div className="post">
              <p className="type my-2">✍️ Article</p>
              <div className="d-flex justify-content-between">
                <p className="title">
                  What if famous brands had regular fonts? Meet RegulaBrands!
                </p>
                <span
                  onClick={() => setDots1(!dots1)}
                  className={`edit position-relative ${dots1 ? "editbg" : ""}`}
                >
                  <BsThreeDots size={23}/>
                  {dots1 && (
                    <ul className="list-unstyled position-absolute">
                      <li>Edit</li>
                      <li>Report</li>
                      <li>Option 3</li>
                    </ul>
                  )}
                </span>
              </div>
              <div className="visit-button">
                <p className="mb-0">
                  <span className="para">
                    {" "}
                    I’ve worked in UX for the better part of a decade. From now
                    on, I plan to rei…
                  </span>{" "}
                </p>
                <br />
              </div>
              <div className="d-flex justify-content-between">
                <div className="user d-flex align-items-center">
                  <img
                    className=""
                    src={User1}
                    alt="user"
                    width={48}
                    height={48}
                  />
                  <div className="ms-2">
                    <p className="user-name mb-0">Sarthak Kamra</p>
                    <p className="view mb-0 d-lg-none">1.4k views</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <span className="view d-none d-lg-block">
                    <IoEyeOutline/> 1.4k views
                  </span>
                  <span className="share d-flex justify-content-center align-items-center">
                    <IoMdShare/>
                    <span className="ms-2 d-block d-lg-none">Share</span>
                  </span>
                </div>
              </div>
              </div>
            </div>

            {/* second post */}
            <div className="card">
              <img className="w-100 img" src={UnSplash} alt="post-img" height={220}/>
              <div className="post">
              <p className="type my-2">🔬️ Education</p>
              <div className="d-flex justify-content-between">
                <p className="title">
                  Tax Benefits for Investment under National Pension Scheme
                  launched by Government
                </p>
                <span
                  onClick={() => setDots2(!dots2)}
                  className={`edit position-relative ${dots2 ? "editbg" : ""}`}
                >
                  <BsThreeDots size={23} />
                  {dots2 && (
                    <ul className="list-unstyled position-absolute">
                      <li>Edit</li>
                      <li>Report</li>
                      <li>Option 3</li>
                    </ul>
                  )}
                </span>
              </div>
              <div className="visit-button">
                <p className="mb-0">
                  <span className="para">
                    {" "}
                    I’ve worked in UX for the better part of a decade. From now
                    on, I plan to rei…
                  </span>{" "}
                </p>
                <br />
              </div>
              <div className="d-flex justify-content-between">
                <div className="user d-flex align-items-center">
                  <img
                    className=""
                    src={User2}
                    alt="user"
                    width={50}
                    height={48}
                  />
                  <div className="ms-2">
                    <p className="user-name mb-0">Sarah West</p>
                    <p className="view mb-0 d-lg-none">1.4k views</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <span className="view d-none d-lg-block">
                    <IoEyeOutline/> 1.4k views
                  </span>
                  <span className="share d-flex justify-content-center align-items-center">
                    <IoMdShare/>
                    <span className="ms-2 d-block d-lg-none">Share</span>
                  </span>
                </div>
                </div>
              </div>
            </div>

            {/* third post */}
            <div className="card">
              <img
                className="w-100 img"
                src={Car}
                alt="post-img"
                height={260}
                
              />
              <div className="post">
              <p className="type my-2">🗓️ Meetup</p>
              <div className="d-flex justify-content-between">
                <p className="title">
                  Finance & Investment Elite Social Mixer @Lujiazui
                </p>
                <span
                  onClick={() => setDots3(!dots3)}
                  className={`edit position-relative ${dots3 ? "editbg" : ""}`}
                >
                  <BsThreeDots size={23} />
                  {dots3 && (
                    <ul className="list-unstyled position-absolute">
                      <li>Edit</li>
                      <li>Report</li>
                      <li>Option 3</li>
                    </ul>
                  )}
                </span>
              </div>
              <div className="visit-button">
                <p className="mb-0">
                  <span className="para">
                    {" "}
                    <AiTwotoneCalendar className="me-1" />
                    Fri, 12 Oct, 2018
                  </span>{" "}
                  <span className="ms-5">
                    <IoLocationOutline /> Ahmedabad, India
                  </span>
                </p>
                <button className="my-4">Visit Website</button>
              </div>
              <div className="d-flex justify-content-between">
                <div className="user d-flex align-items-center">
                  <img src={User3} alt="user" width={48} height={48} />
                  <div className="ms-3">
                    <p className="user-name mb-0">Ronal Jones</p>
                    <p className="view mb-0 d-lg-none">1.4k views</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <span className="view d-none d-lg-block">
                    <IoEyeOutline/> 1.4k views
                  </span>
                  <span className="share d-flex justify-content-center align-items-center">
                    <IoMdShare/>
                    <span className="ms-2 d-block d-lg-none">Share</span>
                  </span>
                </div>
                </div>
              </div>
            </div>
            {/* fourth post  */}
            <div className="card post">
              <p className="type my-2">💼️ Job</p>
              <div className="d-flex justify-content-between">
                <p className="title">Software Developer</p>
                <span
                  onClick={() => setDots4(!dots4)}
                  className={`edit position-relative ${dots4 ? "editbg" : ""}`}
                >
                  <BsThreeDots size={23} />
                  {dots4 && (
                    <ul className="list-unstyled position-absolute">
                      <li>Edit</li>
                      <li>Report</li>
                      <li>Option 3</li>
                    </ul>
                  )}
                </span>
              </div>
              <div className="visit-button">
                <p className="mb-0">
                  <span className="para">
                    {" "}
                    <TbBriefcase2 className="me-1" />
                    Innovaccer Analytics Private Ltd.
                  </span>{" "}
                  <span className="ms-5">
                    <IoLocationOutline /> Noida, India
                  </span>
                </p>
                <button className="my-4 apply">Apply on Timesjobs</button>
              </div>
              <div className="d-flex justify-content-between">
                <div className="user d-flex align-items-center">
                  <img src={User4} alt="user" width={48} height={48} />
                  <div className="ms-3">
                    <p className="user-name mb-0">Joseph Gray</p>
                    <p className="view mb-0 d-lg-none">1.4k views</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <span className="view d-none d-lg-block">
                    <IoEyeOutline/> 1.4k views
                  </span>
                  <span className="share d-flex justify-content-center align-items-center">
                    <IoMdShare/>
                    <span className="ms-2 d-block d-lg-none">Share</span>
                  </span>
                </div>
              </div>
            </div>
    
            <button className="phone-post d-lg-none">
              <FaPen />
            </button>
          </div>
          <div className="poster-right col-lg-4 d-none d-lg-flex justify-content-center">
            <div className="center-dive">
              <div className="location">
                <label className="d-flex justify-content-between align-items-center">
                  <span>
                    <GrLocation />
                    <input
                      readOnly={write ? write : ""}
                      type="text"
                      defaultValue="Noida, India"
                      placeholder="Enter your location"
                    />
                  </span>
                  <span onClick={() => setWrite(!write)}>
                    {write ? <FaPen /> : <RxCross2 />}
                  </span>
                </label>
                <p className="mb-0 d-flex mt-4">
                  <p className="mb-0 me-1">
                    <BiErrorCircle />
                  </p>
                  Your location will help us serve better and extend a
                  personalised experience.
                </p>
              </div>
             {isLoggedIn && <Userlist />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
