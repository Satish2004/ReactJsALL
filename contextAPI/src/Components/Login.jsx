// import React, { useContext, useState } from 'react';
import { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

const Login = () => {
  let [userName, setuserName] = useState("");
  let [password, setPassword] = useState("");
  //  yaha se useContext use hota hai ye bhi such as like useState ki tarah hota hai
  const { setuser } = useContext(UserContext); // most imp line ki variable ko {} andar lete hai destructuring kr rhe hai

  let handleSubmit = (e) => {
    e.preventDefault();
    setuser({ userName, password }); 
  };
  let HandleOnChangeUserName = (e) => {
    setuserName(e.target.value);
  };
  let HandleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // Means to say waha se acccess kiye js se then .Provider ko variable bana ke ek sepaarte file me rakhe then we use in App.jsx and when we use this context use one of them hook whos name is useContext
  // onClick use Button when we use input element
  // when we use form then we use form the where works submit button work onSubmit btn

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={userName}
        onChange={HandleOnChangeUserName}
      />
      <input
        type="password"
        placeholder="enter your password"
        value={password}
        onChange={HandleOnChangePassword}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
