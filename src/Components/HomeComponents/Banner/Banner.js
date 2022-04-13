import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import banner1 from "../../../images/banner/banner1.jpg";
import banner2 from "../../../images/banner/banner2.jpg";
import banner3 from "../../../images/banner/banner3.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>24/7 Customer Support</h3>
          <p>
            We have professional car service partners with verified resources.
            We are making a one-stop auto service solution because your
            flexibility is our main priority.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3>On Time Work Completion</h3>
          <p>
            We have professional car service partners with verified resources.
            We are making a one-stop auto service solution because your
            flexibility is our main priority.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Professional Automobile Mechanic</h3>
          <p>
            We have professional car service partners with verified resources.
            We are making a one-stop auto service solution because your
            flexibility is our main priority.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
