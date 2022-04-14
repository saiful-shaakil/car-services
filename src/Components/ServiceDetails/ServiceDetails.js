import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceName } = useParams();
  const navigate = useNavigate();
  const checkOut = () => {
    navigate("/checkout");
  };
  return (
    <div className="container text-center">
      <h3 className="mt-5">
        This is details about{" "}
        <span className="text-primary">{serviceName}</span>
      </h3>
      <button onClick={checkOut} className="btn btn-success">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default ServiceDetails;
