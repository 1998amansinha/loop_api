import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            ></div>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            loop Api
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="font-bold text-base">
              <Link to="/docs">Docs</Link>
            </li>
            <li className="font-bold text-base">
              <Link to="/support">Support</Link>
            </li>
            <li className="font-bold text-base">
              <Link to="about">About</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn  mr-2">
            Sign in
          </Link>
          <Link to="/sign-up" className="btn btn-neutral">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
