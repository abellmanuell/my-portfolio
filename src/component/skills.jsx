import Heading from "./heading";
import { AiFillHtml5 } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsGit } from "react-icons/bs";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoSass,
} from "react-icons/bi";

export default function Skills() {
  return (
    <article className="w-[90vw] md:w-4/5 mx-auto py-10">
      <Heading content="My Skills and Technologies" />

      <main>
        <section className="py-4 grid grid-cols-2 space-y-2 md:grid-cols-3">
          <span className="flex items-center text-2xl">
            <AiFillHtml5 className="text-8xl" /> HTML5
          </span>

          <span className="flex items-center text-2xl">
            <BiLogoCss3 className="text-8xl" /> CSS3
          </span>

          <span className="flex items-center text-2xl">
            <BiLogoJavascript className="text-8xl" /> JavaScript
          </span>

          <span className="flex items-center text-2xl">
            <BiLogoReact className="text-8xl" /> React/Redux
          </span>

          <span className="flex items-center text-2xl">
            <BiLogoNodejs className="text-8xl" /> Node.js
          </span>

          <span className="flex items-center text-2xl">
            <FcGoogle className="text-8xl" /> Googling
          </span>

          <span className="flex items-center text-2xl">
            <BsGit className="text-8xl" /> Git/Shell
          </span>

          <span className="flex items-center text-2xl">
            <BiLogoTailwindCss className="text-8xl" /> Tailwindcss
          </span>

          <span className="flex items-center text-2xl">
            <BiLogoSass className="text-8xl" /> SASS
          </span>
        </section>
      </main>
    </article>
  );
}
