import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const emailRef = useRef("");
  const passRef = useRef("");
  const handleSubmit = () => {
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    createUserWithEmailAndPassword(email, pass);
  };
  return (
    <div className="w-50 mx-auto">
      <h1 className="text-center text-primary">Please Register</h1>
      <form>
        <input
          ref={emailRef}
          placeholder="Enter Your Name"
          className="w-100 mb-2"
          name="name"
          type="text"
          required
        />
        <input
          ref={emailRef}
          placeholder="Enter Your Email"
          className="w-100 mb-2"
          name="email"
          type="email"
          required
        />
        <input
          ref={passRef}
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
          value="Register"
        />
      </form>
      <p className="text-center w-100 mt-3">
        Already have an account? &nbsp;
        <Link to="/login" className="text-decoration-none text-success">
          Log In
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
