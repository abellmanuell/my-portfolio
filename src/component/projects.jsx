import React from "react";
import Heading from "./heading";
import Project from "./project";
import { productList } from "./projectList";

export default function projects() {
  return (
    <div className="w-[90vw] md:w-4/5 mx-auto py-10">
      <Heading content="Latest Software Projects" />

      <main className="py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-start">
        {productList.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </main>
    </div>
  );
}
