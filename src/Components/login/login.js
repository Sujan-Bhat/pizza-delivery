import React, { useState } from "react";
import "../styles/desforlog.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      
      <div className="body">
        {/* <img src="" alt="pizza-oven" className="pizza-oven-img"></img> */}
        <div className="x">
        <div className="container">
          <form action="#" method="POST" onSubmit={submitHandler}>
            <div className="login">
              <h2>SIGN IN</h2>
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

            <span className="forgot-password">
              <a href="/password/forgot">Forgot password?</a>
            </span>
            
            <span className="dont-have-account">
              <a href="/register">Signup</a>
            </span>
          
            <div className="login-btn">
              <button
                type="Submit"
                id="sumbit"
                name="submit"
                
              >Login</button>
            </div>
          </form>
          
        </div>
        </div>
      </div>
    </>
  );
}

export default Login;
