import React from "react";
import Heading from "./heading";

export default function about() {
  return (
    <div className="w-[90vw] md:w-4/5 mx-auto py-20 grid md:grid-cols-2">
      <div>
        <Heading content="More About Me" />

        <p className="py-12 text-xl">
          A front-end software engineer with technical writing as a secondary
          superpower.
          <br />
          <br />
          Whether I'm working with JavaScript to solve algorithms or developing
          React, my major goal is always to produce clear, comprehensible
          information that resolves issues.
          <br />
          <br />
          While I'm not coding or writing, I'm probably playing soccer, watching
          a documentary, or just pondering the possibility that the earth is
          flat.
        </p>
      </div>
    </div>
  );
}
