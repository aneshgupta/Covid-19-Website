import React from "react";
import { Image } from "react-bootstrap";
import bannerImage from "../../assets/banner.jpg";
import DashBoard from "../Dashboard/DashBoard";

const Home = function () {
  return (
    <div>
      <Image src={bannerImage} fluid />
      {/* <img src={cases1} width="560" height="300" />
      <img src={cases3} width="550" height="300" />
      <img src={cases4} width="460" height="350" />
      <img src={cases2} width="650" height="350" /> */}
      <DashBoard />
    </div>
  );
};

export default Home;
