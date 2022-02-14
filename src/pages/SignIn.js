import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
        await logIn(email, password);
        navigate("/home");
      } catch (err) {
        setError(err.message);
      }
    };
  
    const handleGoogleSignIn = async (e) => {
      e.preventDefault();
      try {
        await googleSignIn();
        navigate("/home");
      } catch (error) {
        console.log(error.message);
      }
    };
    return (
       <div>
  <div className="login-page">
    <div className="login-box">
      <div className="login-logo">
        <a href="../../index2.html"><b>Admin</b>LTE</a>
      </div>
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Sign in to start your session</p>
          {error && <Alert variant="danger">{error}</Alert>}
          <form action="../../index3.html" onSubmit={handleSubmit} method="post">
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email"    onChange={(e) => setEmail(e.target.value)} />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password" className="form-control" placeholder="Password"     onChange={(e) => setPassword(e.target.value)}/>
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">
                    Remember Me
                  </label>
                </div>
              </div>
          
              <div className="col-4">
                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
              </div>
            
            </div>
          </form>
          <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
          <div className="social-auth-links text-center mb-3">
            <p>- OR -</p>
            {/* <a href="#" className="btn btn-block btn-primary">
              <i className="fab fa-facebook mr-2" /> Sign in using Facebook
            </a>
            <a href="#" className="btn btn-block btn-danger">
              <i className="fab fa-google-plus mr-2" /> Sign in using Google+
            </a> */}
          </div>
    
          {/* <p className="mb-1">
            <a href="forgot-password.html">I forgot my password</a>
          </p> */}
          <p className="mb-0"> Dont's have an account?
            {/* <a href="register.html" className="text-center">Register a new membership</a> */}
            <Link to="/signup" className="text-center">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}

export default Signin;
