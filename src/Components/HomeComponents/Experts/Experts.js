import React from "react";
import { CardGroup } from "react-bootstrap";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const Experts = () => {
  const experts = [
    { id: 1, name: "Will Smith", img: expert1 },
    { id: 2, name: "Will Martin", img: expert2 },
    { id: 3, name: "Dwayne Rock", img: expert3 },
    { id: 4, name: "Martin Putin", img: expert4 },
    { id: 5, name: "Chris Gayle", img: expert5 },
    { id: 6, name: "Eva Jhonson", img: expert6 },
  ];
  return (
    <div className="container" id="experts">
      <h2 className="text-primary text-center mt-5">Our Experts</h2>
      <div className="row g-5">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
