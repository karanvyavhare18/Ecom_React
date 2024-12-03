import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import login_page_img from '../Images/login_page_img.jpg';
import Navbar from "../NavbarComponent/Navbar";
import { Link } from "react-router-dom";

// const { useState } = require("react");

const Login = ({ setIsAuthenticated, setRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
  
    try {
      // Send login request to backend
      const response = await axios.post("http://localhost:8080/signIn", {
        email,
        password,
      });
  
      // Check if the role exists in the response
      if (response.data && (response.data.role === "admin" || response.data.role === "user")) {
        setIsAuthenticated(true);
        setRole(response.data.role); // response.data contains the role
        setSuccessMessage("Login successful! Redirecting...");
  
        setTimeout(() => {
          if (response.data.role === "admin") {
            navigate("/admin/home");
          } else {
            navigate("/user/home");
          }
        }, 1500);
      } else {
        setErrorMessage("Unexpected role. Please contact support.");
      }
    } catch (error) {
      console.error("Login error:", error.response);
      setErrorMessage(
        error.response?.data?.message || "Invalid email or password."
      );
    }
  };



  return (
    <div>
      
      <div className="container mt-5">
        <div className="card border-light-subtle shadow-sm">
          <div className="row g-0">
            <div className="col-12 col-md-6">
              <img
                className="img-fluid w-100 h-100"
                loading="lazy"
                src={login_page_img}
                alt="BootstrapBrain Logo"
              />
            </div>
            <div className="col-12 col-md-6">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="row">
                  <div className="col-12">
                    <div className="mb-5">
                      <h2 className="h3">Login</h2>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row gy-3 gy-md-4 overflow-hidden">
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="password" className="form-label">
                        Password <span className="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          className="btn bsb-btn-xl btn-primary"
                          type="submit"
                        >
                          Log in
                        </button>
                        {errorMessage && (
                      <p className="text-danger mt-2">{errorMessage}</p>
                    )}
                    {successMessage && (
                      <p className="text-success mt-2">{successMessage}</p>
                    )}
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-12">
                    <hr className="mt-5 mb-4 border-secondary-subtle" />
                    <p className="m-0 text-secondary text-center">
                      Don't have an account?{" "}
                      <Link
                        to="/register"
                        className="link-primary text-decoration-none"
                      >
                        Sign up
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
