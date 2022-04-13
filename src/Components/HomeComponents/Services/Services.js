import React, { useEffect, useState } from "react";
import { CardGroup } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-5 mb-5 text-center text-primary">Our Services</h2>
        <CardGroup className="card-group">
          {services.map((service) => (
            <Service service={service}></Service>
          ))}
        </CardGroup>
      </div>
    </div>
  );
};

export default Services;
