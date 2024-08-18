import React, { useContext } from "react";

import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = (e) => {
    logOut();
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Logout Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100] mt-3 w-52 p-2 shadow"
            >
              <div className="block md:hidden">
                {user ? (
                  <>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-sm font-bold">{user?.displayName}</h3>
                      <div className="w-14 h-14 rounded-full ">
                        <img
                          className="w-full h-full rounded-full"
                          alt="Tailwind CSS Navbar component"
                          src={user.photoURL}
                        />
                      </div>
                      <button
                        onClick={handleLogOut}
                        className="btn btn-secondary"
                      >
                        Logout
                      </button>
                    </div>
                  </>
                ) : (
                  <div className=" flex flex-col md:hidden items-center gap-2 ">
                    {" "}
                    <Link to={"/login"}>
                      {" "}
                      <button className="btn btn-secondary w-32">Login</button>
                    </Link>
                    <Link to={"/register"}>
                      {" "}
                      <button className="btn btn-primary w-32">Register</button>
                    </Link>
                  </div>
                )}
              </div>
            </ul>
          </div>
          <Link to={"/"} className="mr-3 md:mr-10 ">
            <button className="btn btn-ghost text-2xl font-bold">
              E-<span className="text-[#ff4135]">Store</span>
            </button>
          </Link>
          <NavLink to={"/shop"}>
            <button className="btn border border-[#ff4135] text-lg font-bold focus:outline-none">
              Shop
            </button>
          </NavLink>
        </div>

        <div className="hidden md:block">
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
            <div className=" md:flex items-center gap-3 hidden">
              {" "}
              <Link to={"/login"}>
                {" "}
                <button className="btn btn-secondary w-32">Login</button>
              </Link>
              <Link to={"/register"}>
                {" "}
                <button className="btn btn-primary w-32">Register</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
