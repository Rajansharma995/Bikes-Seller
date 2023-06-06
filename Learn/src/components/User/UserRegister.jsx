import React, { useState } from "react";
import '../../assets/css/UserRegister.css';
const UserRegister = () => {
  const [userFirstName, setUserFirstName] = useState('');
  const [userMiddleName, setUserMiddleName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userDateOfBirth, setUserDateOfBirth] = useState('');
  const [userGender, setUserGender] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
  
    console.log("User registered:", {
      userFirstName,
      userMiddleName,
      userLastName,
      userEmail,
      userPassword,
      userDateOfBirth,
      userGender,
      userPhoneNumber
    });

    
    setUserFirstName('');
    setUserMiddleName('');
    setUserLastName('');
    setUserEmail('');
    setUserPassword('');
    setUserDateOfBirth('');
    setUserGender('');
    setUserPhoneNumber('');
  };

  return (
    <div className="user-register">
      <form onSubmit={handleRegister}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={userFirstName}
          onChange={(e) => setUserFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          name="middleName"
          placeholder="Middle Name"
          value={userMiddleName}
          onChange={(e) => setUserMiddleName(e.target.value)}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={userLastName}
          onChange={(e) => setUserLastName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          required
        />
        <input
          type="text"
          name="dateOfBirth"
          placeholder="Date of Birth"
          value={userDateOfBirth}
          onChange={(e) => setUserDateOfBirth(e.target.value)}
          required
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={userGender}
          onChange={(e) => setUserGender(e.target.value)}
          required
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={userPhoneNumber}
          onChange={(e) => setUserPhoneNumber(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UserRegister;
