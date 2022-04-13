import React from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceName } = useParams();
  return (
    <div className="container text-center">
      <h3 className="mt-5">
        This is details about{" "}
        <span className="text-primary">{serviceName}</span>
      </h3>
      <button className="btn btn-success">Proceed to Checkout</button>
    </div>
  );
};

export default ServiceDetails;
