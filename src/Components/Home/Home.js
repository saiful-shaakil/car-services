import React from "react";
import Banner from "../HomeComponents/Banner/Banner";
import Experts from "../HomeComponents/Experts/Experts";
import Services from "../HomeComponents/Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
    </div>
  );
};

export default Home;
