import React from 'react'
import User1 from "../../../Images/leisure.jpeg";
import User2 from "../../../Images/activism.jpeg";
import User3 from "../../../Images/mba.jpeg";
import User4 from "../../../Images/philosophy.jpeg";
import { AiFillLike } from "react-icons/ai";

function userlist() {
    return (
        <div>
          <div className="user-list user mt-5">
                <p className="text-uppercase d-flex align-items-center">
                  <span className="d-flex align-items-center me-1">
                    <AiFillLike width={16} height={15} />
                  </span>{" "}
                  <span>REcommended Groups</span>
                </p>
                <div className="list">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <img src={User4} alt="user"width={36} height={36}  />
                      <span className="ms-2">Leisure</span>
                    </div>
                    <button>Follow</button>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <div>
                      <img src={User1} alt="user" width={36} height={36} />
                      <span className="ms-2">Activism</span>
                    </div>
                    <button>Follow</button>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <div>
                      <img src={User3} alt="user" width={36} height={36} />
                      <span className="ms-2">MBA</span>
                    </div>
                    <button>Follow</button>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <div>
                      <img width={36} height={36}  src={User2} alt="user" />
                      <span className="ms-2">Philosophy</span>
                    </div>
                    <button>Follow</button>
                  </div>
                  <p className="text-end mt-5 text-info">See More...</p>
                </div>
              </div>        
        </div>
    )
}

export default userlist
