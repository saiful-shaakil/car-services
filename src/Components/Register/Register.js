import React, { useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../Loading/Loading";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passRef = useRef("");
  const checkRef = useRef("");
  if (updating) {
    return <Loading></Loading>;
  }
  const handleSubmit = async () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    // system number 1 for css conditon
    // const agree = checkRef.current.checked;
    // if (agree) {
    //   createUserWithEmailAndPassword(email, pass);
    // }
    await createUserWithEmailAndPassword(email, pass);
    await updateProfile({ displayName: name });
    console.log(user);
    if (user) {
      navigate("/home");
    }
  };
  return (
    <div className="w-50 mx-auto">
      <h1 className="text-center text-primary">Please Register</h1>
      <form>
        <input
          ref={nameRef}
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
          ref={checkRef}
          onClick={() => setAgree(!agree)}
          className="mb-3"
          type="checkbox"
          name="terms"
          id="terms"
        />
        &nbsp;{" "}
        <label
          className={agree ? "text-primary" : "text-danger"}
          htmlFor="terms"
        >
          Accept terms and conditions
        </label>
        <input
          disabled={!agree}
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
