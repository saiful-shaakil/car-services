import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const CheckOut = () => {
  const [user, loading] = useAuthState(auth);
  if (!user) {
    return <Loading></Loading>;
  }
  return (
    <div className="mt-5">
      <h1 className="text-center text-primary">Check Out Details</h1>
      <form className="w-50 mx-auto">
        <input
          className="w-100 mb-2"
          type="text"
          placeholder="Enter Your Name Here"
        />
        <input
          className="w-100 mb-2"
          type="text"
          placeholder="Enter Your Mobile Number Here"
        />
        <input
          className="w-100 mb-2 btn btn-primary"
          type="button"
          value="Check Out"
        />
      </form>
    </div>
  );
};

export default CheckOut;
