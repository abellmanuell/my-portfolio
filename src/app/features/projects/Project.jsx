import React from "react";
import ProjectList from "./ProjectList";

function Project() {
  return (
    <section className="px-5 h-full bg-neutral-100 text-neutral-800">
      <article className="py-24 min-h-screen md:h-full md:w-3/4 m-auto">
        <div className="pb-14 text-center space-y-10">
          <h1 className="text-3xl font-semibold">Projects</h1>
          <p>
            Here are a few of my favourite <b>Full Stack</b> and{" "}
            <b>Front End</b> focused projects
          </p>
        </div>

        <ProjectList />
      </article>
    </section>
  );
}

export default Project;
