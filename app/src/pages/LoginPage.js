import React, { useState } from "react";

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
    <div className="flex items-center justify-center py-32">
      <div className="card card-bordered card-normal w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Please log in</h2>
          <form onSubmit={handleSubmit}>
            <input
              value={username}
              onChange={e => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              className="input input-bordered w-full max-w-xs" />
            <label>{usernameError}</label>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs" />
            <label>{passwordError}</label>
            <div className="card-actions w-full">
              <input type="submit" value="Log In" className="btn btn-primary w-full" />
            </div>
            <label>{requestError}</label>
            <label>{loggedIn}</label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;