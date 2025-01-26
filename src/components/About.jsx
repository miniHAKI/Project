import React from "react";
import girls from "../assets/girls.jpg";
import Cards from "./AboutSection/Cards";
import Swiper from "./AboutSection/Swiper";
import AboutBar from "./AboutSection/AboutBar";

const About = () => {
  return (
    <div className="about">
      <div className="about-section flex flex-col lg:flex-row items-center pt-10 lg:pt-20 px-4 lg:px-20">
        <div className="left lg:pr-20 lg:pl-20 mb-8 lg:mb-0 text-center lg:text-left">
          <h1 className="font-bold text-3xl lg:text-4xl">Our Story</h1>
          <div className="paragraph font-normal mt-6 lg:mt-10 tracking-tighter">
            <p>
              Launched in 2015, Exclusive is South Asia's premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </p>
            <p className="pt-4">
              Exclusive has more than 1 million products to offer, growing very
              fast. Exclusive offers a diverse assortment in categories ranging
              from consumer.
            </p>
          </div>
        </div>

        <div className="right">
          <img
            className="rounded-md max-w-full lg:max-w-md mx-auto"
            src={girls}
            alt="About us"
          />
        </div>
      </div>
      <Cards />
      <Swiper />
      <AboutBar />
    </div>
  );
};

export default About;
