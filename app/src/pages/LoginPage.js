import React, { useState } from "react";
import FormCard from "../components/FormCard";

const LoginPage = () => {

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [requestError, setRequestError] = useState("");
  const [loggedIn, setLoggedIn] = useState("");

  const handleSubmit = (e) => {

    // don't reload the page
    e.preventDefault();

    // zero out errors
    setUsernameError("");
    setPasswordError("");
    setRequestError("");

    // validate username
    if ("" === username) {
      setUsernameError("Please enter username");
      return;
    }

    if (username.length < 6) {
      setUsernameError("Username must be at least 8 characters");
      return;
    }

    // validate password
    if ("" === password) {
      setPasswordError("Please enter password");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 8 characters");
      return;
    }

    // make request to backend
    fetch("/login", {
      method: "GET",
      headers: { "Authorization": "Basic " + btoa(username + ":" + password) }
    }).then(response => {
      if (response.ok) {
        setLoggedIn("Successfully logged in");
      } else {
        setRequestError("Username or password does not match");
      }
    });
  }

  return (
    <FormCard>
      <h2 className="card-title">Log In</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
          className="input input-bordered w-full max-w-xs my-1" />
        <label>{usernameError}</label>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="input input-bordered w-full max-w-xs my-1" />
        <label>{passwordError}</label>
        <div className="card-actions w-full">
          <input type="submit" value="Log in" className="btn btn-primary w-full my-1" />
        </div>
        <label>{requestError}</label>
        <label>{loggedIn}</label>
      </form>
    </FormCard>
  );
};

export default LoginPage;