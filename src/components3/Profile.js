import React from "react";
import './Profile.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navber3 from "../components2/Navber3";
import { useState } from "react";



function Profile() {

  const [isEditable, setIsEditable] = useState({
    username: false,
    surname: false,
    email: false,
    mobile: false,
  });
  const [formData, setFormData] = useState({
    username: "Rohit",
    surname: "Kumar",
    email: "rkumar@gmail.com",
    mobile: "45323XXXXX",
  });

  const [gender, setGender] = useState("male");

  // Function to toggle edit mode for specified fields
  const toggleEdit = (fields) => {
    setIsEditable((prev) => {
      let newState = { ...prev };
      fields.forEach((field) => {
        newState[field] = !prev[field];
      });
      return newState;
    });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

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
              <button type="button" onclick="">My order</button>
              <i className="fa-solid fa-arrow-right"></i>
          </div>
          <div className="btn1">
              <button type="button" onclick="Opencart()">Show cart</button>
              <i className="fa-solid fa-arrow-right"></i>
          </div>
          <div className="btn1">
              <button type="button" onclick="">Edit Profile</button>
              <i className="fa-solid fa-arrow-right"></i>
          </div>
          <div className="btn1">
              <button type="button">Logout</button>
              <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="cont2" id="profile">
            <div className="section-title">
                <span>Personal Information</span>
                <span className="edit-btn" onClick={()=>toggleEdit(['username', 'surname'])}>Edit</span>
            </div>
            <div className="input-group">
                <input type="text" id="username" className="input-field" value={formData.username} onChange={handleChange} disabled={!isEditable.username} />
                <input type="text" id="surname" className="input-field" value={formData.surname} onChange={handleChange} disabled={!isEditable.surname}/>
            </div>
            <div className="gender-section">
                <p>Your Gender</p>
                <div className="gender-section">
                <input type="radio" id="male" name="gender" checked={gender === "male"} onChange={() => setGender("male")}/>
                <label htmlFor="male">Male</label>

                <input type="radio" id="female" name="gender" checked={gender === "female"} onChange={() => setGender("female")}/>
                <label htmlFor="female">Female</label>
              </div>
            </div>
            <div className="edit-field">
                <div className="section-title">
                    <span>Email Address</span>
                    <span className="edit-btn" onClick={() => toggleEdit(["email"])}>Edit</span>
                </div>
                <input type="text" id="email" class="input-field" value={formData.email} onChange={handleChange} disabled={!isEditable.email}/>
            </div>
            <div className="edit-field">
                <div className="section-title">
                    <span>Mobile Number</span>
                    <span className="edit-btn" onClick={() => toggleEdit(["mobile"])}>Edit</span>
                </div>
                <input type="text" id="mobile" className="input-field" value={formData.mobile} onClick={handleChange} disabled={isEditable.mobile}/>
            </div>
            <button id="bbt" type="button" onclick="saveProfile()">Save</button>
          </div>
      </div>
    </div>
  );
}
export default Profile;