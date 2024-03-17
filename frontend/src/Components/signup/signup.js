import React, { useEffect, useState } from "react";
import "../styles/desforlog.css";
import { useNavigate } from 'react-router-dom';

function Signup() {
  
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const navigate = useNavigate()
  
  useEffect(()=>{
    if(isA){
      navigate("/")
    }
},[setIsAuthenticated])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const registerData = {
      name,
      email,
      password
    };
  }

  return (
    <>
      
      <div className="body">
        {/* <img src="" alt="pizza-oven" className="pizza-oven-img"></img> */}
        <div className="x">
        <div className="container">
          <form onChange={handleSubmit} >
            <div className="login">
              <h2>SIGN UP</h2>
            </div>
            <hr></hr>
            <div className="name">
              <label htmlFor="name" className="label-for-name">
                
              </label>
              <input
                type="text"
                id="name"
                placeholder="Username"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
            </div>
            <div className="e-mial">
              <label htmlFor="e-mails" className="label-for-email">
                
              </label>
              <input
                type="email"
                id="e-mails"
                placeholder="E-mail"
                name="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>
            <div className="password">
              <label htmlFor="password" className="label-for-password">
                
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
            </div>

            
          
            <div className="login-btn">
            <button
                type="Submit"
                id="sumbit"
                name="submit"
                className="button1"
              >Signup</button>
            </div>
            <span className="reg-login">Already Have account<a href="/login"> Login </a> </span>
          </form>
          
        </div>
      </div>
      </div>
    </>
  );
}

export default Signup;
