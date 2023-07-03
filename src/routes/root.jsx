import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Handle from "@/component/handle";
import IntroView from "@/component/introview";
import About from "@/component/about";
import Project from "@/component/projects";

export default function root() {
  useEffect(() => {
    document.title = "(@abellmanuell) Abel Emmanuel";
  }, []);

  return (
    <article id="bg-sprinkle" className="h-full">
      <div className="md:h-full">
        <nav className="grid md:grid-cols-6 items-center border-b-2 border-amethyst-50 px-4 md:px-8 py-5">
          <div className="col-span-2">
            <Link
              to="/"
              className="text-amethyst-900 lg:text-lg hover:text-black"
            >
              <span className="text-amethyst-300">@</span>abellmanuell 👨‍💻
            </Link>
          </div>

          <Handle />
        </nav>

        <main>
          <IntroView
            developer="Abel Emmanuel"
            title="Software Developer"
            description="I'm a growing developer with a primary focus on Javascript, React, and open-source projects. I love being part of communities that inspire and challenge one another."
          />
        </main>
      </div>

      <section id="bg-sprinkle"  className="md:h-full">
        <About />
      </section>

      <section  id="bg-sprinkle"  className="md:h-full">
        <Project />
      </section>
    </article>
  );
}
