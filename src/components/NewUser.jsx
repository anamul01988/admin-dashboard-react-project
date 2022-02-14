import React from 'react';
import './NewUser.css';
import { Link } from "react-router-dom";
const Newuser = () => {
    return (
        <div>
            <div className="newUser">
      <div className="userTitle">
          <h1 className="newUserTitle">New User</h1>
          <Link to={"/userAll/"}>
            <button className="newUserButton">Existing User</button>
        </Link>
        </div>
      {/* <h1 className="newUserTitle">New User</h1> */}
      <form className="newUserForm justify-content-center">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="anamul" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Anamul haque" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="anamul@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+880 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Dhaka | BD" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {/* <button className="newUserButton">Create</button> */}
        {/* <Link to={"/userAll/"}>
            <button className="newUserButton">Existiong User</button>
        </Link> */}
       
      </form>
      <div className="newUserButtonArea d-flex justify-content-center">
      <button className="newUserButton ">Create</button>
      </div>
    </div>
            
        </div>
    );
}

export default Newuser;
