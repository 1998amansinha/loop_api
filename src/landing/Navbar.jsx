import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signOutFirebase } from "../firebase/authMethods";
import { removeUser } from "../utils/slice/userSlice";
import Cookies from "js-cookie";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOutFirebase();
      localStorage.removeItem("userToken"); // Clear token
      Cookies.remove("userToken");
      dispatch(removeUser());
      navigate("/login"); // Redirect to login after sign-out
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl ml-10">
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
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end mr-10">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full font-bold bg-neutral text-white text-lg">
                  {user?.firstName?.charAt(0)}
                  {user?.lastName?.charAt(0)}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>

                <li>
                  <Link to="/login" onClick={handleSignOut}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn mr-2">
                Sign in
              </Link>
              <Link to="/sign-up" className="btn btn-neutral">
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
