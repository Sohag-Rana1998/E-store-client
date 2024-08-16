import React, { useContext } from "react";

import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = (e) => {
    logOut();
  };
  console.log(user);
  return (
    <div className="bg-base-100 ">
      <div className="navbar  justify-between bg-base-100 max-w-7xl w-full mx-auto">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to={"/"}>
            <button className="btn btn-ghost text-2xl font-bold">
              E-<span className="text-[#ff4135]">Store</span>
            </button>
          </Link>
        </div>

        <div className="">
          {user ? (
            <>
              <div className="flex items-center gap-3">
                <h3 className="text-sm font-bold">{user?.displayName}</h3>
                <div className="w-14 h-14 rounded-full ">
                  <img
                    className="w-full h-full rounded-full"
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
                <button onClick={handleLogOut} className="btn btn-secondary">
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className=" flex items-center gap-3">
              {" "}
              <Link to={"/login"}>
                {" "}
                <button className="btn btn-secondary">Login</button>
              </Link>
              <Link to={"/register"}>
                {" "}
                <button className="btn btn-primary">Register</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
