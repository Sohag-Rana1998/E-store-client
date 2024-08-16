import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../components/SocialLogin";


const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);

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
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-full text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now</h1>
            <p className="py-6">
              Welcome to the future! Register to embark on an amazing journey
              with us. Discover how our platform can simplify your life and
              achieve your goals.
            </p>
          </div>
          <div className="card bg-base-100 w-full md:w-[50%] shrink-0 shadow-2xl">
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
