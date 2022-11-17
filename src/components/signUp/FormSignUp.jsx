import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const FormSignUp = () => {
  const { register, handleSubmit, reset } = useForm();

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
        <div className="sign-up__div-first-name">
          <label className="sign-up__label" htmlFor="first__name">
            First Name
          </label>
          <input
            {...register("first__name")}
            className="sign-up__input"
            type="text"
            id="first__name"
          />
        </div>
        <div className="sign-up__div-last-name">
          <label className="sign-up__label" htmlFor="last__name">Last Name</label>
          <input
            {...register("first__name")}
            className="sign-up__input"
            type="text"
            id="last__name"
          />
        </div>
        <div className="sign-up__div-email">
          <label className="sign-up__label" htmlFor="email">Email</label>
          <input
            {...register("first__name")}
            className="sign-up__input"
            type="email"
            id="email"
          />
        </div>
        <div className="sign-up__div-password">
          <label className="sign-up__label" htmlFor="password"></label>
          <input
            {...register("first__name")}
            className="sign-up__input"
            type="password"
            id="password"
          />
        </div>
        <div className="sign-up__div-phone">
          <label className="sign-up__label" htmlFor="phone"></label>
          <input
            {...register("first__name")}
            className="sign-up__input"
            type="text"
            id="phone"
          />
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;
