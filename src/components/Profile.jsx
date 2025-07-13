import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Avatar from "../components/Avatar";
import { Link } from "react-router";

export default function Profile({ title, subtitle }) {
  return (
    <>
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

      {/**************************
       * PROFILE SECTION
       ***************************/}
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
        <h1 className="text-xl mt-2 font-medium">{title}</h1>
        <h2 className="text-neutral-500 text-sm">{subtitle}</h2>
      </div>
    </>
  );
}
