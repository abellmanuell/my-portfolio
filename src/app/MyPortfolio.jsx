import React from "react";
import { Element } from "react-scroll";

import Home from "./features/home/Home";
import Project from "./features/projects/Project";
import Contact from "./features/contact/Contact";

import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function MyPortfolio() {
  return (
    <React.Fragment>
      <Link
        to="https://www.upwork.com/freelancers/~0149cd82615e1ba212"
        target="_blank"
        className="fixed top-40 bg-[#f7df1e] text-white font-bold z-50 hidden md:flex justify-center items-center space-x-4 py-2 px-4 rounded-r-full ring-offset-8 ring-2 ring-offset-transparent"
      >
        <Icon icon="bxl:upwork" className="text-2xl text-[#108a00]" />
        <span className="text-xs text-black">Hire Me!</span>
      </Link>

      <Element name="home">
        <Home />
      </Element>

      <Element name="projects">
        <Project />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </React.Fragment>
  );
}

export default MyPortfolio;
