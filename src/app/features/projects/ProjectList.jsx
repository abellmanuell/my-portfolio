import React from "react";
import { Icon } from "@iconify/react";

const projects = [
  {
    id: "1",
    name: "Twitter Clone",
    image: "/twitter-clone.png",
    description:
      "A clone of web twitter application using React, Tailwindcss and other libraries.",
    languages: ["React", "Tailwind"],
    github_url: "https://github.com/abellmanuell/twitter-clone-",
    url: "https://twitterc-lone.netlify.app/",
  },
  {
    id: "2",
    name: "Paau Market",
    image: "/pauu-market.png",
    description:
      "Paau Market is a dynamic MERN eCommerce application that tends to create an avenue for students to buy or sell products to other students.",
    languages: ["React", "Tailwind", "Express", "MongoDB", "Redux"],
    github_url: "https://github.com/abellmanuell/paau-market",
    url: "https://paaumarket.web.com",
  },
].reverse();

function ProjectList() {
  return (
    <section>
      {projects.map((project) => {
        return <Project key={project.id} {...project} />;
      })}
    </section>
  );
}

function Project({ name, image, description, github_url, url, languages }) {
  return (
    <>
      <article className="space-y-10 md:space-y-0 md:space-x-10 md:flex items-center pb-10">
        <div>
          <img
            className="w-[600px] bg-white h-[300px] object-contain rounded-lg shadow-md"
            src={`/projects/${image}`}
            alt={name}
          />
        </div>

        <div>
          <h3 className="text-5xl font-semibold">{name}</h3>
          <div className="pt-5">
            <p>{description}</p>
            <div className="grid grid-cols-4 gap-2 py-5 text-center text-xs">
              {languages.map((language, index) => {
                return (
                  <div
                    key={index}
                    className="bg-neutral-200 shadow-sm p-2 rounded-lg"
                  >
                    {language}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-x-2">
            <a
              href={github_url}
              className="inline-block p-2 bg-orange-500 text-white rounded-lg"
              target="_blank"
            >
              <Icon icon="devicon:github" />
            </a>
            <a
              href={url}
              className="inline-block p-2 bg-blue-004892 text-white rounded-lg"
              target="_blank"
            >
              <Icon icon="mdi:web" />
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
export default ProjectList;
