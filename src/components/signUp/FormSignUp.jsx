import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const FormSignUp = () => {
  const { register, handleSubmit, reset } = useForm();
  const [value, setValue] = useState();

  const check = (data) => {
    const URL = "https://sierra-ecommerce.onrender.com/api/v1/users";
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    reset({});
  };

  return (
    <div className="sign-up__container">
      <form onSubmit={handleSubmit(check)} className="sign-up__form">
        <h2 className="sign-up__title">Create an account</h2>
        <div className="sign-up__div-name">
          <label className="sign-up__label" htmlFor="first__name"></label>
          <input
            {...register("first__name")}
            className="sign-up__input"
            type="text"
            id="first__name"
            placeholder="First Name"
          />
          <label className="sign-up__label" htmlFor="last__name"></label>
          <input
            {...register("last__name")}
            className="sign-up__input"
            type="text"
            id="last__name"
            placeholder="Last Name"
          />
        </div>
        <div className="sign-up__div-email">
          <label className="sign-up__label" htmlFor="email"></label>
          <input
            {...register("email")}
            className="sign-up__input"
            type="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="sign-up__div-password">
          <label className="sign-up__label" htmlFor="password"></label>
          <input
            {...register("password")}
            className="sign-up__input"
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="sign-up__div-phone">
          <label className="sign-up__label" htmlFor="phone"></label>
          <PhoneInput
            {...register("phone")}
            className="sign-up__input"
            value={value}
            onChange={setValue}
            id="phone"
            placeholder="Phone number"
          />
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;
