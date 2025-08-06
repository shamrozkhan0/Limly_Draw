import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="px-5 py-5 d-flex flex-column gap-4 w-75">
      <h1 className="m-0">Let's Log-in </h1>

      <div className="d-flex flex-column gap-3">
        <input
          type="email"
          name="email"
          placeholder="abcemail@.com"
          className="px-3 py-2 rounded outline-none border border-1 border-secondary fs-5"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="px-3 py-2 rounded outline-none border border-1 border-secondary fs-5"
        />
      </div>

      <Link to={'resetpassword'} className="w-100 text-end">Forgot Password</Link>

      <button type="submit" className="bg-blue text-white fw-medium fs-5 py-2 rounded border-0">Submit</button>
      <p className="text-end m-0 d-flex align-items-center justify-content-end  gap-1">Don't Have An Account? <Link to="signup">SignUP</Link></p>
    </div>
  );
};

export default Login;
