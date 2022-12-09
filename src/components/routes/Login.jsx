import React from "react";
import { useSelector } from "react-redux";
import FormLogin from "../login/FormLogin";
import UserInformation from "../userInfo/UserInformation";

const Login = () => {
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <main className="login">{user ? <UserInformation /> : <FormLogin />}</main>
  );
};

export default Login;
