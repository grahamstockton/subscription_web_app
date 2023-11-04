import React from "react";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="card card-bordered card-normal w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Please log in</h2>
          <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" />
          <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
          <input type="password" placeholder="Confirm Password" className="input input-bordered w-full max-w-xs" />
          <div className="card-actions w-full">
            <button className="btn btn-primary w-full">Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;