import React, { useState } from "react";
import "./login.css";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(form);
  };

  return (
    <div class="container">
      <div class="screen">
        <div class="screen__content">
          <form class="login" onSubmit={handleSubmit}>
            <div class="login__field">
              <i class="login__icon fas fa-user"></i>
              <input
                type="text"
                class="login__input"
                placeholder="User name / Email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input
                type="password"
                class="login__input"
                placeholder="Password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
            <button class="button login__submit" type="submit">
              <span class="button__text">Log In Now</span>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>

            <form method="get" action="http://localhost:3000/signup">
              <button class="button login__submit">
                <span class="button__text">Get Signed Up</span>
                <i class="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
          </form>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};
export default Login;
