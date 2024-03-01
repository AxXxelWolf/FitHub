import React from "react";
import "./Form.css";
import { useState } from "react";

import { FaUser, FaLock, FaCamera } from "react-icons/fa";

const Form = () => {
  const baseUrl = "http://localhost:8080";
  const [registerformData, setRegisterFormData] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    profilePicture: null,
  });

  const [loginformData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegisterFormChange = (e) => {
    const { name, value } = e.target;
    setRegisterFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setRegisterFormData((prevData) => ({ ...prevData, profilePicture: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loginMode) {
      // Login mode
      try {
        const response = await fetch(baseUrl + "/api/auth/login", {
          // mode: "no-cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginformData),
        });

        console.log("Login response:", response);

        if (response.ok) {
          // Handle successful login
          console.log("Login successful");
        } else {
          // Handle login failure
          console.error("Login failed");
        }
      } catch (error) {
        console.error("Error in login fetch:", error);
      }
    } else {
      // Registration mode
      try {
        const response = await fetch(baseUrl + "/api/auth/register", {
          // mode: "no-cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerformData),
        });

        console.log("Registration response:", response);

        if (response.ok) {
          // Handle successful registration
          console.log("Registration successful");
        } else {
          // Handle registration failure
          console.error("Registration failed");
        }
      } catch (error) {
        console.error("Error in registration fetch:", error);
      }
    }
  };

  const [loginMode, setLoginMode] = useState(true);

  const toggleMode = () => {
    setLoginMode((loginMode) => !loginMode);
  };
  return (
    <div className="form-wrapper">
      {loginMode ? (
        <>
          <div className="Wrapper">
            <div className="login-form">
              <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={loginformData.username}
                    onChange={handleLoginChange}
                    required
                  />
                  <FaUser className="icon" />
                </div>
                <div className="input-box">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={loginformData.password}
                    onChange={handleLoginChange}
                    required
                  />
                  <FaLock className="icon" />
                </div>
                <div className="remember-forgot">
                  <label>
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <a href="#">Forgot Password?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                  <p>
                    Don't have an account?{" "}
                    <span onClick={toggleMode} className="reg-link">
                      Register
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <div className="Wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className="input-box">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={registerformData.name}
                onChange={handleRegisterFormChange}
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={registerformData.username}
                onChange={handleRegisterFormChange}
                required
              />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={registerformData.password}
                onChange={handleRegisterFormChange}
                required
              />
              <FaLock className="icon" />
            </div>
            <div className="input-box">
              <input
                type="password"
                placeholder="Retype Password"
                name="confirmPassword"
                value={registerformData.confirmPassword}
                onChange={handleRegisterFormChange}
                required
              />
              <FaLock className="icon" />
            </div>
            <div className="input-box">
              <label className="file-label">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <FaCamera className="icon" />
              </label>
            </div>
            <button type="submit">Register</button>
            <div className="register-link">
              <p>
                Already have an account?{" "}
                <span onClick={toggleMode} className="reg-link">
                  Login
                </span>
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
