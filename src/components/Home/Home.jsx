import React from "react";
import { Image } from "react-bootstrap";
import bannerImage from "../../assets/banner.jpg";
import DashBoard from "../Dashboard/DashBoard";

const Home = function () {
  return (
    <div>
      <Image src={bannerImage} fluid />
      <DashBoard />
    </div>
  );
};

export default Home;
