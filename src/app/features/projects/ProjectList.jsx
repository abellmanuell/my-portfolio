import React from "react";
import { Icon } from "@iconify/react";
import { Fade } from "react-swift-reveal";

const projects = [
  {
    id: "1",
    name: "Twitter Clone",
    image: "twitter-clone.png",
    description:
      "A clone of web twitter application using React, Tailwindcss and other libraries.",
    languages: ["React", "Tailwind"],
    repository_url: "https://github.com/abellmanuell/twitter-clone-",
    url: "https://twitterc-lone.netlify.app/",
  },
  {
    id: "2",
    name: "Paau Market",
    image: "paaumarket.webp",
    description:
      "Paau Market is a dynamic MERN eCommerce application that tends to create an avenue for Prince Audu Abubakar Unversity's student to buy or sell products to other students.",
    languages: ["React", "Tailwind", "Express", "MongoDB", "Redux"],
    repository_url: "https://github.com/paaumarket/paau-market",
    url: "https://paaumarket.com.ng",
  },
  {
    id: "3",
    name: "Apple Watch Series 2",
    image: "apple_watch.png",
    description:
      "It a single web page designed with Tailwind CSS, a utility-first workflow and with React-vite. The User Interface (UI) was gotten from Dribble.com.",
    languages: ["React", "Tailwind"],
    repository_url: "https://gitlab.com/abellmanuell1/applewatchseries2",
    url: "https://applewatchseries2.netlify.app",
  },
  {
    id: "4",
    name: "Tickety",
    image: "tickety.png",
    description:
      "The project centers around developing a web app for purchasing movie and concert tickets, with a focus on delivering a user-friendly experience for my client's fans and customers.",
    languages: ["React", "Tailwind", "Express", "MongoDB"],
    repository_url: "https://gitlab.com/abellmanuell/tickety",
    url: "https://ticketty.netlify.app/",
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

function Project({ name, image, description, repository_url, url, languages }) {
  return (
    <>
      <Fade duration={1000} delay={500}>
        <article className="space-y-10 md:space-y-0 md:space-x-10 pb-10 md:grid grid-cols-2 items-center animate-pulse">
          <div>
            <div
              className="before:table before:pt-[70%] bg-cover bg-[40%] bg-white bg-no-repeat relative rounded-lg shadow-md"
              style={{ backgroundImage: `url(/projects/${image})` }}
            ></div>
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
                href={repository_url}
                className="inline-block p-2 bg-orange-fdf300 rounded-lg"
                target="_blank"
              >
                Source Code
                {/* <Icon icon="devicon:github" /> */}
              </a>
              <a
                href={url}
                className="inline-block p-2 bg-blue-004892 text-white rounded-lg"
                target="_blank"
              >
                Demo
                {/* <Icon icon="mdi:web" /> */}
              </a>
            </div>
          </div>
        </article>
      </Fade>
    </>
  );
}
export default ProjectList;
