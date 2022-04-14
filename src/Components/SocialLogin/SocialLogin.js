import React from "react";
import google from "../../images/social/google.png";
import facebook from "../../images/social/facebook.png";
import github from "../../images/social/github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  let errorMessage;
  if (error || error1) {
    errorMessage = (
      <div>
        <p>
          {error?.message} {error1?.message}
        </p>
      </div>
    );
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div
          style={{ height: "1px", backgroundColor: "gray" }}
          className="w-50"
        ></div>
        <p className="px-2">OR</p>
        <div
          style={{ height: "1px", backgroundColor: "gray" }}
          className="w-50"
        ></div>
      </div>
      {errorMessage}
      <button
        onClick={() => signInWithGoogle()}
        className="w-50 my-2 d-block mx-auto btn btn-info"
      >
        <img width={"28px"} src={google} alt="" /> &nbsp; Google Sign In
      </button>
      <button className="w-50 my-2 d-block mx-auto btn btn-info">
        <img width={"28px"} src={facebook} alt="" /> &nbsp; Facebook Sign In
      </button>
      <button
        onClick={() => signInWithGithub()}
        className="w-50 my-2 d-block mx-auto btn btn-info"
      >
        <img width={"28px"} src={github} alt="" /> &nbsp; GitHub Sign In
      </button>
    </div>
  );
};

export default SocialLogin;
