import React from "react";
import { Card } from "react-bootstrap";

const Service = ({ service }) => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" className="w-100" src={service.img} />
        <Card.Body>
          <Card.Title>{service.name}</Card.Title>
          <Card.Text>{service.description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Service;