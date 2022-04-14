import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = (event) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const formRef = useRef("");
  const handleSubmit = (event) => {
    const email = formRef.current.email.value;
    const pass = formRef.current.pass.value;
    signInWithEmailAndPassword(email, pass);
    navigate(from, { replace: true });
    event.preventDefault();
  };
  if (loading) {
    return <Loading></Loading>;
  }

  const resetPassword = async () => {
    const email = formRef.current.email.value;
    await sendPasswordResetEmail(email);
    if (email) {
      toast("Sent Email");
    }
  };

  return (
    <div className="w-50 mx-auto">
      <h1 className="text-center text-primary">Please Login</h1>
      <form ref={formRef}>
        <input
          placeholder="Enter Your Email"
          className="w-100 mb-2"
          name="email"
          type="email"
          required
        />
        <input
          placeholder="Enter Your Password"
          className="w-100 mb-2"
          type="password"
          name="pass"
          id=""
          required
        />
        <input
          onClick={handleSubmit}
          className="w-100 btn btn-primary"
          type="button"
          value="Log In"
        />
      </form>
      <p className="text-center w-100 mt-3">
        New to car genius? &nbsp;
        <Link to="/register" className="text-decoration-none text-primary ">
          Register
        </Link>
      </p>
      <p className="text-center w-100 mt-3">
        Forget password? &nbsp;
        <button
          onClick={resetPassword}
          className="text-decoration-none text-primary border-0 bg-white"
        >
          Reset Now
        </button>
      </p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
