import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const formRef = useRef("");
  const handleSubmit = () => {
    const email = formRef.current.email.value;
    const pass = formRef.current.pass.value;
    signInWithEmailAndPassword(email, pass);
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
        <Link to="/register" className="text-decoration-none text-success ">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
