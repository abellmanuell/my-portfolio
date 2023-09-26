import React, { useRef } from "react";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react";

import myPicture from "../../../../assets/mypicture.png";
import cv from "../../../../assets/cv/Abel_Emmanuel_Resume.pdf";

// React Icons
import { LuMenu } from "react-icons/lu";

function Heading() {
  /* ************************************************************ */
  const menuButtonRef = useRef(null);
  const cancelButtonRef = useRef(null);
  const navRef = useRef(null);

  function onMenuClicked(e) {
    let openMenu = menuButtonRef.current;
    let closeMenu = cancelButtonRef.current;

    if (openMenu.className === "block") {
      openMenu.className = "hidden";
      closeMenu.className = "block";
      navRef.current.classList.remove("space-x-4");
      navRef.current.classList.remove("hidden");
      navRef.current.classList.add("nav-full-page");
    } else {
      openMenu.className = "block";
      closeMenu.className = "hidden";
      navRef.current.classList.remove("nav-full-page");
      navRef.current.classList.add("hidden");
      navRef.current.classList.add("space-x-4");
    }
  }

  /* ************************************************************ */

  return (
    <div className="relative">
      <header className="bg-blue-004892 z-10 fixed top-0 w-full transition-all ease-in-out duration-200 text-white">
        <article className="md:w-3/4 space-x-2 mx-auto flex items-center h-16 p-5">
          <div>
            <Link
              className="cursor-pointer"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              <img
                className="w-14"
                src={myPicture}
                alt="Abel Emmanuel Picture"
              />
            </Link>
          </div>
          <div className="flex-grow">
            <Link
              className="cursor-pointer"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              <p className="font-medium">Abel Emmanuel</p>
            </Link>
          </div>
          <div className="text-2xl">
            <div className="md:hidden">
              <button
                ref={menuButtonRef}
                className="visible"
                onClick={(ev) => onMenuClicked(ev)}
              >
                <LuMenu />
              </button>
            </div>

            <nav
              ref={navRef}
              className="hidden md:flex text-base space-x-4 items-center"
            >
              <button
                className="hidden absolute z-20"
                ref={cancelButtonRef}
                onClick={(ev) => onMenuClicked(ev)}
              >
                <Icon icon="ic:outline-cancel" className="text-2xl" />
              </button>

              <div>
                <Link
                  className="cursor-pointer hover:underline decoration-orange-fdf300"
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Projects
                </Link>
              </div>

              <div>
                <Link
                  className="cursor-pointer hover:underline decoration-orange-fdf300"
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Contact
                </Link>
              </div>

              <div>
                <a
                  href={cv}
                  download
                  className="cursor-pointer hover:underline decoration-orange-fdf300 block bg-orange-500 px-4 py-2 rounded-md shadow-md"
                >
                  View CV
                </a>
              </div>
            </nav>
          </div>
        </article>
      </header>
    </div>
  );
}

export default Heading;
