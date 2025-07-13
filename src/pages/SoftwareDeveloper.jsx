import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Avatar from "../components/Avatar";
import { Link } from "react-router";

export default function SoftwareDeveloper() {
  return (
    <section className="sm:w-2/6 m-auto px-2 py-10 sm:py-20 ">
      <Link
        to="https://www.linkedin.com/in/abellmanuell/"
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-10"
      >
        <div className="flex justify-center items-center space-x-2">
          <Avatar className="h-[30px] w-[30px]" />
          <section className="leading-3">
            <div className="flex">
              <span>abellmanuell</span>
              <ArrowUpRightIcon className="h-4 w-4 text-neutral-400" />
            </div>
            <p className="text-neutral-500 text-[10px]">LinkedIn</p>
          </section>
        </div>
      </Link>

      <div className="mb-10">
        <section className="bg-[#dc8a66] p-2 rounded-md relative h-[90px] mb-4">
          <div className="w-[900px]">
            <img
              src="/abellmanuell.webp"
              alt="Abel Emmanuel's profile picture."
              className="rounded-full object-cover h-[80px] w-[80px] absolute -top-4 left-2"
              loading="lazy"
            />
          </div>
        </section>
        <h1 className="text-xl mt-2 font-medium">Abel Emmanuel</h1>
        <h2 className="text-neutral-500 text-sm">Software Developer</h2>
      </div>

      <article className="mt-6 space-y-6">
        <p>
          I&apos;m Abel Emmanuel, a 20-year old indie-hacker, open contributor,
          and sales funnel builder.
        </p>

        <p>
          I&apos;m currently building{" "}
          <Link to="" className="text-sky-500 underline">
            Zaid
          </Link>
          , a church or religious management software that helps churches manage
          their members, events, and finances, etc.
        </p>

        <p>
          I&apos;m also the founder of{" "}
          <Link
            to="https://paaumarket.com.ng/"
            className="text-sky-500 underline"
          >
            Paau Market
          </Link>
          . A student ecommerce platform that helps students buy and sell items
          to each other. I&apos;ve been building it for a year. (got over 688
          users.)
        </p>

        <p>
          And, I also build{" "}
          <Link to="http://fab3.rest/" className="text-sky-500 underline">
            Fab3
          </Link>
          , and{" "}
          <Link
            to="https://www.digit.abellmanuell.com.ng/"
            className="text-sky-500 underline"
          >
            Digit
          </Link>
          .
        </p>
      </article>
    </section>
  );
}
