import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        email: result.user?.email,
        name: result.user?.displayName,
        photo: result.user?.photoURL,
      };
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Login Successfull",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    });
  };

  return (
    <div className="">
      <div className="flex items-center w-full my-3">
        <hr className="w-full " />
        <p className="px-3 ">OR</p>
        <hr className="w-full " />
      </div>
      <div>
        <button
          onClick={handleGoogleSignIn}
          aria-label="Login with Google"
          type="button"
          className="flex btn  btn-outline items-center justify-center font-bold  w-full  space-x-4 border-2 rounded-md focus:ring-2 focus:ring-offset-1 border-[#399edd] "
        >
          <img
            src="https://docs.material-tailwind.com/icons/google.svg"
            alt="metamask"
            className="h-6 w-6"
          />{" "}
          <p>Login with Google</p>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
