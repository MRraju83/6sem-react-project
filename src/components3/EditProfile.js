import React from 'react';
import { useState } from 'react';
function EditProfile(){

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

    return(
        <div>
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
    )
}
export default EditProfile;
