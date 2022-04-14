import React from "react";
import google from "../../images/social/google.png";
import facebook from "../../images/social/facebook.png";
import github from "../../images/social/github.png";
const SocialLogin = () => {
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
      <button className="w-50 my-2 d-block mx-auto btn btn-info">
        <img width={"28px"} src={google} alt="" /> &nbsp; Google Sign In
      </button>
      <button className="w-50 my-2 d-block mx-auto btn btn-info">
        <img width={"28px"} src={facebook} alt="" /> &nbsp; Facebook Sign In
      </button>
      <button className="w-50 my-2 d-block mx-auto btn btn-info">
        <img width={"28px"} src={github} alt="" /> &nbsp; GitHub Sign In
      </button>
    </div>
  );
};

export default SocialLogin;
