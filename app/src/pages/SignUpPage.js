import React from "react";
import FormCard from "../components/FormCard";

const SignUpPage = () => {
  return (
    <FormCard>
      <h2 className="card-title">Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs my-1" />
        <input type="password" placeholder="Password" className="input input-bordered w-full max-w-xs my-1" />
        <input type="password" placeholder="Confirm Password" className="input input-bordered w-full max-w-xs my-1" />
        <div className="card-actions w-full">
          <input type="submit" value="Sign up" className="btn btn-primary w-full my-1" />
        </div>
      </form>
    </FormCard>
  );
};

export default SignUpPage;