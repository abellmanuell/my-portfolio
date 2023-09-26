import React from "react";
import { Icon } from "@iconify/react";

const techStacks = [
  { id: "1", name: "Javascript", icon: "logos:javascript" },
  { id: "2", name: "React", icon: "logos:react" },
  { id: "3", name: "Redux", icon: "logos:redux" },
  { id: "4", name: "TailwindCSS", icon: "devicon:tailwindcss" },
  { id: "5", name: "Node.js", icon: "logos:nodejs-icon-alt" },
  { id: "6", name: "Express.js", icon: "devicon:express" },
  { id: "7", name: "mongoDB", icon: "devicon:mongodb" },
  { id: "8", name: "GitHub", icon: "devicon:github" },
];

function TechStacks() {
  return (
    <section className="grid gap-4 md:gap-6 text-black grid-cols-2 pb-10 md:grid-cols-4">
      {techStacks.map((language) => {
        return (
          <div
            key={language.id}
            className="bg-white flex items-center px-4 py-3 md:px-6 lg:px-10 rounded-md space-x-2 font-medium shadow-md"
          >
            <div className="text-2xl">
              <Icon icon={language.icon} />
            </div>
            <div>
              <p>{language.name}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default TechStacks;
