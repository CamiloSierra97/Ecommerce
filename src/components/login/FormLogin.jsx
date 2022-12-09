import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const FormLogin = () => {
  const { register, handleSubmit, reset } = useForm();
  const [showError, setShowError] = useState({
    visibility: "hidden",
  });

  const passwordValidation = () => {
    setShowError({
      visibility: "hidden",
    });
  };

  const submit = (data) => {
    const URL = "https://sierra-ecommerce.onrender.com/api/v1/auth/login";
    axios
      .post(URL, data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        setShowError({
          visibility: "visible",
          fontSize: "0.6rem",
          fontWeight: "100",
        });
      });
    reset({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login__container">
      <form onSubmit={handleSubmit(submit)} className="login__form">
        <h2 className="login__title">
          Welcome! Enter your email and password to continue
        </h2>
        <div className="login__div-email">
          <label className="login__label" htmlFor="email">
            Enter you email
          </label>
          <input
            {...register("email")}
            className="login__input"
            type="email"
            id="email"
          />
        </div>
        <div className="login__div-password">
          <label className="login__label" htmlFor="password">
            Enter your password
          </label>
          <input
            {...register("password")}
            className="login__input"
            type="password"
            id="password"
          />
          <small style={showError}>Wrong or invalid credentials</small>
        </div>
        <button className="login__btn" onClick={passwordValidation}>
          Login
        </button>
      </form>
      <section className="sign-up__container">
        <small className="sign-up__title">Not registered yet?</small>
        <small className="sign-up__link">
          <NavLink to="/signup">
            <small>Sign up</small>
          </NavLink>
        </small>
      </section>
    </div>
  );
};

export default FormLogin;
