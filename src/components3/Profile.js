import React from "react";
import './Profile.css';
import { useState } from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navber3 from "../components2/Navber3";
import EditProfile from "./EditProfile";
import MyOrder from "./MyOrder";
import Cart from "./Cart";

function Profile() {
    const [activeComponent, setActiveComponent] = useState("EditProfile"); // State to track active component
    //const [activeComponent, setActiveComponent] = useState("EditProfile");

    const handleMyOrderClick = () => {
      setActiveComponent("MyOrder"); // Show MyOrder component
    };
  
    const handleEditProfileClick = () => {
      setActiveComponent("EditProfile"); // Show EditProfile component
    };
    const handleCartClick = () =>{
      setActiveComponent("Cart"); // Show Cart component
    }
  return (
    <div className="Container">
      <Navber3 />
      <div className="cont">
        <div className="header">
          <a href="main.htm"><i className="fa-solid fa-arrow-left"></i></a><span>User profile</span>
        </div>
        <div className="pro">
            <div className="round-img"></div>
            <div className="te">
                <p>Hello</p>
                <span>Rohit kumar</span>
            </div>
        </div>
        <div className  ="allbtn">
          <div className="btn1">
              <button type="button" onClick={handleMyOrderClick}>My order</button>
              <i className="fa-solid fa-arrow-right"></i>
          </div>
          <div className="btn1">
              <button type="button" onClick={handleCartClick}>Show cart</button>
              <i className="fa-solid fa-arrow-right"></i>
          </div>
          <div className="btn1">
              <button type="button" onClick={handleEditProfileClick}>Edit Profile</button>
              <i className="fa-solid fa-arrow-right"></i>
          </div>
          <div className="btn1">
              <button type="button">Logout</button>
              <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
      {activeComponent === "EditProfile" && <EditProfile/>}
      {activeComponent === "MyOrder" && <MyOrder/>}
      {activeComponent === "Cart" && <Cart/>}
    </div>
  );
}
export default Profile;