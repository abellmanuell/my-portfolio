import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

export default function Profolio() {
  return (
    <div className="px-4 py-10 text-sm md:text-base lg:px-96 md:px-48">
      <p className="flex px-4 py-2 bg-secondary rounded-full justify-center items-center text-center">
        <Icon
          icon="mingcute:announcement-fill"
          className="text-primary text-4xl mr-2"
        ></Icon>
        <span className=" text-primary">
          Tired of landing pages that look like everyone else's?
        </span>
      </p>

      <section className="my-5 ">
        <h1 className="text-5xl font-bold pb-5 text-center">
          Design Landing Pages That{" "}
          <span className="text-primary">Convert</span> Like Crazy.
        </h1>
        <p className="text-center text-tw-gray">
          Attract more followers, sell more products, and build a loyal audience
          with my high-converting landing page designs.
        </p>
      </section>

      <CallToAction text="Message Me for Next Steps" />

      <div className="mt-6 mb-10 flex flex-col justify-center items-center">
        <img src="/project_sample.png" alt="Project samples" />

        <img src="/trusted.png" alt="Trusted by" />
      </div>

      <div className="text-center text-tw-gray mb-20">
        <p>
          Are you tired of generic landing pages that fail to capture your
          audience's attention and drive conversions?
        </p>
        <br />
        <p>
          It's time to break free from the mold and create a landing page that
          truly stands out.
        </p>
      </div>

      <section className="my-20">
        <div className="flex justify-center mb-5">
          <p className="px-4 py-2 bg-secondary rounded-full text-center">
            <span className=" text-primary">Why Choose Me</span>
          </p>
        </div>
        <h1 className="text-5xl font-bold pb-5 text-center">
          Imagine a landing page that
        </h1>

        <div className="my-10 grid md:grid-cols-2 gap-2 ">
          <Benefit
            title="Captures attention instantly"
            description="My designs are visually striking and tailored to your target audience."
            iconName="tabler:capture-filled"
            iconBgColor="bg-[#0030ff]"
          />

          <Benefit
            title="Converts visitors into customers"
            description="Strategic placement of calls-to-action and compelling offers maximize conversions."
            iconName="ph:users-fill"
            iconBgColor="bg-[#00b844]"
          />
          <Benefit
            title="Builds trust and credibility"
            description="Professional design and clear messaging establish your authority."
            iconName="codicon:workspace-trusted"
            iconBgColor="bg-[#ff9900]"
          />

          <Benefit
            title="Optimizes for mobile"
            description="Ensures your landing page looks great and functions flawlessly on all devices."
            iconName="ion:phone-portrait-outline"
            iconBgColor="bg-[#d03171]"
          />
        </div>

        <CallToAction text="Message Me for Next Steps" />
      </section>

      <section className="my-20">
        <h1 className="text-5xl font-bold pb-5 text-center">
          Some of My Proects
        </h1>
        <div className="text-center text-tw-gray mb-10">
          <p>
            Here's just a few examples of our project we've worked out, I'm
            happy to send you more examples.
          </p>
        </div>

        <div className="my-10 grid gap-y-5 md:gap-2 ">
          <Project
            imgSrc="efma.png"
            url="https://www.efma.com.ng/"
            description="Create visually stunning, user-centric landing pages that drive conversions and build brand trust."
          />

          <Project
            imgSrc="misturah.png"
            url="https://www.misturahmarketing.com.ng/"
            description="Enhance user experience and conversion rates by optimizing landing pages for mobile devices."
          />

          <Project
            imgSrc="brainiac.png"
            url="https://www.brainiacstores.com.ng/"
            description="Develop landing pages that reflect the client's brand identity while maximizing conversions and user engagement."
          />
        </div>

        <CallToAction text="Send More Previous Projects" />
      </section>

      <section className="my-20">
        <div className="text-center text-tw-gray mb-5">
          <p>Want to Brainstorm & Plan Your Next Funnel?</p>
        </div>
        <h1 className="text-5xl font-bold pb-5 text-center mb-5">
          Book a free brainstorming session and let's talk about your project!
        </h1>

        <CallToAction text="Message Me for Next Steps" />
      </section>

      <section className="my-20">
        <div className="text-center text-tw-gray mb-5">
          <p>Meet The Designer</p>
        </div>

        <img src="/me.png" alt="Me" />
        <h1 className="text-5xl font-bold pb-2 text-center mt-10">
          Abel Emmanuel
        </h1>

        <div className="flex justify-center text-2xl pb-5">
          <Link to="https://www.messenger.com/t/171622323183252/">
            <Icon icon="logos:messenger" className="m-2" />
          </Link>

          <Link to="https://x.com/abellmanuell">
            <Icon icon="arcticons:x-twitter" className="m-2" />
          </Link>
          <Link to="https://facebook.com/abellmanuell">
            <Icon icon="logos:facebook" className="m-2" />
          </Link>
        </div>

        <div className=" text-tw-gray mb-5">
          <p>
            Emmanuel is the go-to “Landing Page Designer” for busy professional
            creators.
          </p>
          <br />
          <p>
            Passionate about building a profitable business for creators quickly
            using high-converting landing pages.
          </p>
          <br />
          <p>
            After several studying, learning, and implementing, I got to know
            the recipe for what works for professional creator as you.
          </p>
        </div>
        <CallToAction text="Message Me for Next Steps" />
      </section>

      <section className="my-10">
        <h1 className="text-5xl font-bold pb-5 text-center">My Company</h1>
        <div className="text-center text-tw-gray mb-10">
          <p>Here's my software company.</p>
        </div>

        <div className="my-10 grid gap-y-5 md:gap-2 ">
          <Project
            imgSrc="paaumarket.png"
            url="https://www.paaumarket.com.ng/"
            description="Paau Market is an online student market place."
          />
        </div>
      </section>

      <div>
        <p className="text-center text-tw-gray mb-2">
          Support Me by Buying Me a Coffee.
        </p>
        <Link
          to="https://buymeacoffee.com/abellmanuell"
          target="_blank"
          className="flex px-4 py-5 mb-10 bg-[#ffdd00] font-bold rounded-xl justify-center items-center text-center"
        >
          <Icon
            icon="simple-icons:buymeacoffee"
            className="text-white text-4xl mr-2"
          ></Icon>
          <span>Buy Me a Coffee</span>
        </Link>
      </div>

      <footer className="text-center">Designed by Me, &copy; 2024</footer>
    </div>
  );
}

const Benefit = function ({ title, description, iconName, iconBgColor }) {
  return (
    <div className="bg-secondary p-10 px-5 rounded-md border border-primary">
      <div className={`inline-block ${iconBgColor} p-3 rounded-md`}>
        <Icon icon={iconName} className="text-3xl text-white" />
      </div>
      <h4 className="mt-5 mb-2 font-bold text-primary">{title}</h4>
      <p>{description}</p>
    </div>
  );
};

const CallToAction = ({
  text,
  url = "https://www.messenger.com/t/171622323183252/",
}) => {
  return (
    <div className="flex justify-center">
      <Link
        to={url}
        target="_blank"
        className="bg-primary px-10 py-4 rounded-md font-bold text-white mx-auto inline-block"
      >
        {text}
      </Link>
    </div>
  );
};

function Project({ imgSrc, description, url }) {
  return (
    <div className="bg-secondary p-10 md:py-2 md:px-5 rounded-md border border-primary flex flex-col md:flex-row items-center justify-center">
      <div>
        <img src={`/${imgSrc}`} alt="" width="200" />
      </div>
      <p className="md:mx-4 my-5 text-center md:text-left">{description}</p>
      <div className="">
        <Link to={url} target="_blank" className="font-bold text-primary">
          View
        </Link>
      </div>
    </div>
  );
}
