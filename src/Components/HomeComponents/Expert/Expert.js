import React from "react";
import { Card } from "react-bootstrap";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <Card className="col-4">
      <Card.Img variant="top" className="w-100" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Expert;
