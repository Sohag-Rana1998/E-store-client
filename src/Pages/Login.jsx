import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../components/SocialLogin";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    try {
      const result = await signIn(email, password);
      console.log(result);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Login Successfull",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="">
      <Helmet>
        <title>E-Store | Login</title>
      </Helmet>
      <div className="bg-base-200 py-10 min-h-screen w-full ">
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row-reverse gap-5 justify-center md:justify-between items-center ">
          <div className="text-center w-full md:w-[40%] lg:text-left">
            <h1 className="text-3xl md:text-5xl font-bold">Login now!</h1>
            <p className="text-wrap ">
              Your adventure starts here. <br /> Login to explore.
            </p>
          </div>
          <div className="bg-base-100 p-5  rounded-md w-full border s md:w-[60%] shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="w-[90%] mx-auto mb-5">
              {" "}
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
