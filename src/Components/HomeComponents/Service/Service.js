import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const detailsAboutEachService = () => {
    navigate("/service");
  };
  return (
    <Card className="col-4">
      <Card.Img variant="top" className="w-100" src={service.img} />
      <Card.Body>
        <Card.Title>{service.name}</Card.Title>
        <Card.Text>{service.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <button onClick={detailsAboutEachService}>Details</button>
      </Card.Footer>
    </Card>
  );
};

export default Service;
