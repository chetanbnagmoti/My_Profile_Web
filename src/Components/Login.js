import React, { useEffect, useState }  from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth){
        navigate('/');
    }
  },[]);

  const handleLogin=async()=>{
         console.log(email,password);
         let result=await fetch("http://localhost:5000/login",{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
         });
         result=await result.json();
         console.log(result);
         if(result.name){
            localStorage.setItem('user',JSON.stringify(result));
            navigate('/');
         }else{
            alert("Plase Enter correct Details");
         }
  }
   return (
    <div className="login">
        <h1>Login</h1>
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
        <button className="appButton" type="button" onClick={handleLogin}>
          Login
        </button>
    </div>
   )
}

export default Login;