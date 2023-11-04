import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">Home</NavLink>
        </div>
        <div className="navbar-end">
          <div className="tabs">
            <NavLink to="/signup" className={highlightActive}>Sign up</NavLink>
            <NavLink to="/login" className={highlightActive}>Log in</NavLink>
            <NavLink to="/content" className={highlightActive}>Content</NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

const highlightActive = ({ isActive }) => {
  return isActive ? "tab tab-active" : "tab"
}

export default Layout;
