import React, { useState } from 'react';
import { FaApple } from "react-icons/fa";
import "./Login.css";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const clientId = "117690407373-lbi45oddtcm821pitk8i5hgh0ignblbs.apps.googleusercontent.com";

const Login = () => {

  const navigate  = useNavigate();
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const onLoginSuccess = (res) => {
      console.log('Login Success:', res.profileObj);
      setShowloginButton(false);
      setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
      console.log('Login Failed:', res);
  };

  const onSignoutSuccess = () => {
      alert("You have been logged out successfully");
      console.clear();
      setShowloginButton(true);
      setShowlogoutButton(false);
  };

  const handleButtonClick = () => {
    navigate('dasboard')
  };

  return (
    <div className="login">
      <div className="logo-section">
        <span className="logo-name">Board.</span>
      </div>
      <div className="login-section">
        <div className="form">
          <h1 style={{ fontWeight: 700, lineHeight: "50px" }}>Sign In</h1>
          <span>Sign in to your account</span>
          <div className="sign-button-container">
          
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In with Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    className='login-btn'
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
            <button type="submit"> 
              <span className="icon">
                <FaApple
                  style={{
                    fontSize: "16px",
                    paddingRight: "5px",
                    marginTop: "1px",
                  }}
                />
              </span>
              <span className="value">Sign in with Apple</span>
            </button>
          </div>
          <form className="login-form">
            <div className="input-container">
              <label className="login-label" htmlFor="email">
                Email Address
              </label>
              <input
                className="login-input"
                type="text"
                placeholder="Username"
                id="email"
              />
            </div>
            <div className="input-container">
              <label className="login-label" htmlFor="password">
                Password
              </label>
              <input
                className="login-input"
                type="password"
                placeholder="Password"
                id="password"
              />
              <a href="#">Forgot password?</a>
            </div>

            <div className="button-container">
              <input type="submit" value="Sign In"  onClick={handleButtonClick}/>
            </div>
          </form>
          <p style={{ textAlign: "center", fontSize: "15px" }}>
            Don't have an account?<a href="#">Register here</a>
          </p>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
