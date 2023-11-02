import React from "react";
import Heading from "./heading/Heading";
import MainHomeContent from "./mainContent/MainHomeContent";

function Home() {
  return (
    <article>
      <div className="h-full">
        <Heading />
        <MainHomeContent />
      </div>
    </article>
  );
}

export default Home;
