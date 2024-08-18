import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../components/SocialLogin";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(createUser);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    try {
      const result = await createUser(email, password);
      console.log(result);
      updateUserProfile(name, photo);
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Registered Successfully",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <Helmet>
        <title>E-Store | Register</title>
      </Helmet>
      <div className=" bg-base-200 min-h-screen w-full py-10">
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between md:justify-center flex-col lg:flex-row-reverse">
          <div className="w-full text-center md:text-left md:w-[50%]">
            <h1 className="text-3xl md:text-5xl font-bold">Register Now</h1>
            <p className="py-6">
              Welcome to the future! Register to embark on an amazing journey
              with us. Discover how our platform can simplify your life and
              achieve your goals.
            </p>
          </div>
          <div className="border rounded-xl bg-base-100 w-full md:w-[50%] shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
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
                <button className="btn btn-primary">Register</button>
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

export default Register;
