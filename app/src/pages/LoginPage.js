import React, { useState } from "react";

const LoginPage = () => {

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [requestError, setRequestError] = useState("");

  const onButtonClick = () => {

    // zero out errors
    setUsernameError("");
    setPasswordError("");
    setRequestError("");

    // validate username
    if ("" === username) {
      setUsernameError("Please enter username");
      return;
    }

    if (username.length < 8) {
      setUsernameError("Username must be at least 8 characters");
      return;
    }

    // validate password
    if ("" === password) {
      setPasswordError("Please enter password");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return;
    }
  }

  return (
    <div className="flex items-center justify-center py-32">
      <div className="card card-bordered card-normal w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Please log in</h2>
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
            <button onClick={onButtonClick} className="btn btn-primary w-full">Log in</button>
          </div>
          <label>{requestError}</label>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;