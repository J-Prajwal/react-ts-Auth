import axios from "axios";
import React, { useState } from "react";
import { LoginProps, UserCreds } from "../constants/AuthenticationTypes";

const Login = (props: LoginProps) => {

  const [userCreds, setUserCreds] = useState<UserCreds>({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.name;
    const value = e.target.value;
    setUserCreds((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", userCreds)
      .then((res) => {
        props.handleAuth();
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Login</h1>
      <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="EMail"
          onChange={handleOnChange}
          name="email"
          value={userCreds.email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handleOnChange}
          name="password"
          value={userCreds.password}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
