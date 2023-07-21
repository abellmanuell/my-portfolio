import React from "react";
import { Link } from "react-router-dom";
import { FaUserTie, FaFile } from "react-icons/fa";
import langAnimation from "../animation/programming-languages.json";
import LottieAnimation from "../Lottie";

export default function introview(props) {
  const { title, developer, description } = props;

  return (
    <section className="w-[90vw] md:w-4/5 mx-auto md:grid grid-cols-2 gap-x-10">
      <div className="pt-20">
        <h1 className="text-4xl md:text-5xl leading-tight md:leading-[1.27] font-bold select-none">
          Hi 👋, I Am{" "}
          <strong className="text-amethyst-700 md:text-2xl md:inline-block md:bg-amethyst-900 md:text-amethyst-50 md:py-2 md:px-4 rounded-full">
            {title}
          </strong>
          <br />
          {developer || "Joe Doe"}
        </h1>
        <p className="py-6 sm:py-12 text-lg text-amethyst-900">
          {description || "No Description"}
        </p>

        <ol className="md:flex md:space-x-10">
          <li>
            <Link
              to="/hire_me"
              className="inline-flex justify-center items-center bg-rose-500 text-white py-4 px-10 rounded-md font-bold space-x-1 mb-5 md:mb-0"
            >
              <FaUserTie className="inline-block" />
              <span>Hire Me</span>
            </Link>
          </li>
          <li>
            <a
              href="/Abel_Emmanuel.pdf"
              className="inline-flex justify-center items-center bg-white text-black border-2 border-amethyst-900 py-4 px-10 rounded-md font-bold space-x-1"
              download
            >
              <FaFile />
              <span>My Resume</span>
            </a>
          </li>
        </ol>
      </div>

      <div className="hidden md:block">
        <LottieAnimation lotti={langAnimation} />
      </div>
    </section>
  );
}
