import React from "react";

import TechStacks from "./TechStacks";

function MainHomeContent() {
  return (
    <>
      <main className="px-5 bg-amber-700 text-white bg-hero-image">
        <div className="min-h-screen md:h-full md:w-3/4 m-auto">
          <section className="pt-24 pb-5 md:pb-10">
            <p>Hey, my name is</p>
            <div className="flex space-x-2 text-3xl md:text-5xl">
              <h1 className="font-bold">Abel Emmanuel</h1>
              <span className="hidden md:block">&#128075;</span>
            </div>
          </section>

          <section className="pb-10 md:pb-20">
            <p>
              I am a{" "}
              <strong className="text-orange-fdf300">Software Developer</strong>{" "}
              , I have experience building websites and applications with
              JavaScript, React, Redux, Express, NodeJs, Tailwind, and MongoDB.
              With this tools, I have built software that solve real-life
              problems. I am very capable of learning new skills quickly and am
              happy to work in any environment.
            </p>
            <br />
            <p>
              My strongest suits are on the front end. I have good commercial
              experience in this area, with a keen interest in expanding my
              skillset in a diverse range of technologies.
            </p>
            <br />
            <p>
              <b>I am open to new opportunities on-site or Remote.</b>
            </p>
          </section>

          <TechStacks />
        </div>
      </main>
    </>
  );
}

export default MainHomeContent;
