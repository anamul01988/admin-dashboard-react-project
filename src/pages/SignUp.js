import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = useUserAuth();
    let navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      try {
        await signUp(email, password);
        navigate("/");
      } catch (err) {
        setError(err.message);
      }
    };
    return (
        <div>
               <div className="register-portionb ">
           <div className="register-box ">
  <div className="register-logo">
    <a href="../../index2.html"><b>Admin</b>LTE</a>
  </div>
  <div className="card mb-5">
    <div className="card-body register-card-body">
      <p className="login-box-msg">Register a new membership</p>
      <form action="../../index.html" method="post" onSubmit={handleSubmit}>
        {/* <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Full name" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div> */}
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        {/* <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Retype password" />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div> */}
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
              <label htmlFor="agreeTerms">
                I agree to the <a href="#">terms</a>
              </label>
            </div>
          </div>
      
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
          </div>
    
        </div>
      </form>
      <div className="social-auth-links text-center">
        {/* <p>- OR -</p>
        <a href="#" className="btn btn-block btn-primary">
          <i className="fab fa-facebook mr-2" />
          Sign up using Facebook
        </a>
        <a href="#" className="btn btn-block btn-danger">
          <i className="fab fa-google-plus mr-2" />
          Sign up using Google+
        </a> */}
      </div>
      {/* <a href="login.html" className="text-center">I already have a membership</a> */}
      <div className="social-auth-links text-center">
         <p>already have an account <Link to="/"  className="btn btn-block btn-primary">Sign In</Link> </p>
      </div>
      {/* <Link to="/"  className="btn btn-block btn-primary">Sign In</Link>
 */}
      <a href="/dashboard" className="btn btn-block btn-primary my-2 text-capitalize ">Go to Dashboard for now </a>

    </div>
    
  </div>
</div>

        </div>
        </div>
    );
}

export default Signup;
