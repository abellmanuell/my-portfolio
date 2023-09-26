import React from "react";
import { Element } from "react-scroll";

import Home from "./features/home/Home";
import Project from "./features/projects/Project";
import Contact from "./features/contact/Contact";

function MyPortfolio() {
  return (
    <React.Fragment>
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
