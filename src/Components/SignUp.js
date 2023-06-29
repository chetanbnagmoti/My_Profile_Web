import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SingUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  
  //When SingUp Then Not open SingUP Button:-
  useEffect(()=>{
          const auth=localStorage.getItem('user');
          if(auth){
            navigate('/')
          }
  },[]);

  const collectData = async () => {
    console.log(name, email, password);
    let result = await fetch("http://127.0.0.1:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem('user',JSON.stringify(result));
    if(result){
            navigate('/');
    }
  };
  return (
    <>
      <div className="register">
        <h1>Register</h1>
        <input
          className="inputBox"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter The Name"
        />
        <input
          className="inputBox"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter The Email"
        />
        <input
          className="inputBox"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter The Password"
        />
        <button className="appButton" type="button" onClick={collectData}>
          Sing Up
        </button>
      </div>
    </>
  );
};

export default SingUp;
