import { Link } from "react-router";
// import { articles } from "../lib/data.js";
import Profile from "../components/Profile.jsx";
import mercyAyomideTestimony from "../assets/mercy_ayomide_testimony.jpg";
import faithmanTestimony from "../assets/faithman_testimony.jpg";
import faithman2Testimony from "../assets/faithman_2_testimony.jpg";

export default function FunnelBuilder() {
  return (
    <section className="sm:w-2/6 m-auto px-2 py-10 sm:py-20 ">
      <Profile
        title=""
        subtitle=""
        hot_title="Inbox on Facebook"
        hotlink="https://web.facebook.com/profile.php?id=61578108629540"
      />

      {/* TESTIMONIAL */}
      <div className="mb-10">
        <img
          className="rounded-md shadow-lg w-full mb-6"
          src={mercyAyomideTestimony}
          alt="Mercy Ayomide Landing Page Testimony"
        />
      </div>

      <section>
        <h1 className="text-2xl sm:text-2xl text-center font-bold mb-6">
          Your Sales Pages and Landing Pages Has One Job:{" "}
          <span className="underline text-sky-500 italic">
            Convert and Sales.
          </span>
        </h1>
        <p>
          If it&apos;s not turning clicks into customers, you don’t have a sales
          or landing page — you have a fancy brochure.
        </p>

        <ul className="mt-4 leading-8">
          <li>💡 Great design isn’t enough.</li>
          <li>⚙️ Tech alone won’t save it.</li>
          <li>
            📉 And sending traffic to a weak page? That’s just burning ad spend.
          </li>
        </ul>
      </section>

      <div className="my-10">
        <h1 className="text-2xl sm:text-2xl text-center font-bold mb-4">
          What you need is a{" "}
          <span className="underline italic text-sky-500">
            high-converting, conversion-obsessed
          </span>{" "}
          sales or landing page.
        </h1>
      </div>

      <div className="space-y-6">
        <p className="underline">
          One that captures attention fast, builds trust instantly, and guides
          your visitor to one clear, powerful call to action.
        </p>

        <Link
          to="https://wa.link/y13c6l"
          className="font-bold text-sky-500 block"
        >
          This is where I come in.
        </Link>

        <h2>
          Over the last few years, I’ve built premium funnels and landing pages
          for:
        </h2>
        <ul className="list-disc pl-6">
          <li>
            6-figure <b>affiliate marketers</b> who needed pages that convert
            cold traffic like clockwork
          </li>
          <li>
            <b>Ad specialists</b> running aggressive campaigns who can’t afford
            a 2% conversion rate
          </li>
          <li>
            <b>Authors, real estate developers, and consultants</b> who needed
            to turn interest into booked calls, downloads, or deals — fast
          </li>
        </ul>

        <p>
          Every page I build is backed by{" "}
          <span className="underline">
            conversion strategy, user psychology, persuasive copywriting, mobile
            responsiveness, and of course — clean, on-brand design.
          </span>
        </p>
      </div>

      {/* TESTIMONIAL */}
      <div className="my-10">
        <img
          className="rounded-sm shadow-lg w-full mb-6"
          src={faithmanTestimony}
          alt="Mercy Ayomide Landing Page Testimony"
        />
      </div>

      <div className="my-10">
        <h1 className="text-2xl sm:text-2xl text-center font-bold mb-4">
          If you’re ready for a{" "}
          <span className="underline italic text-sky-500">
            sales page or landing page
          </span>{" "}
          that:
        </h1>

        <ul>
          <li>✅ Grabs attention in 3 seconds</li>
          <li>✅ Nurtures trust in under 60</li>
          <li>✅ And moves visitors to action with zero confusion...</li>
        </ul>
      </div>

      <div className="space-y-6 my-10">
        <strong>Then let’s build it.</strong>
        <br />
        <Link
          to="https://wa.link/y13c6l"
          className="bg-sky-900 p-6 w-full block text-center font-bold text-xl rounded-md shadow-md hover:bg-sky-800 transition-colors duration-300 text-sky-100"
        >
          Message Me for Next Steps
        </Link>
      </div>

      {/**************************
       * RECENT PROJECTS
       ***************************/}
      {/* 
      <article>
        <h1 className="text-xl mb-4 font-medium">My recent projects</h1>
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <Link to={article.link} className="block mb-4">
                <h1>{article.title}</h1>
                <p className="text-sm text-neutral-500">{article.date}</p>
              </Link>
            </li>
          ))} 
        </ul>
      </article> */}

      {/**************************
       * A QUICK INTRODUCTION
       ***************************/}
      <article className="mt-6 space-y-6">
        <div>
          <img
            src="/abellmanuell.webp"
            alt="Abel Emmanuel picture"
            className="rounded-md"
          />
        </div>
        <p>
          I&apos;m Abel Emmanuel, a sales & landing page builder, software
          developer, and lover of soccer.
        </p>

        <p>
          I enjoyed building sales, landing pages, and funnels in general. Not
          only did I enjoy building, but I also enjoyed watching my craft
          generate high-quality leads and drive sales.
        </p>

        <p>
          Over time, I have built Premium pages for Top Affiliate Marketers, Ad
          Specialists, Authors, Estate Developers, Sales Consultants, and other
          industry leaders. I&apos;ve built over 20+ pages that converted leads
          into customers.
        </p>

        <p>
          When you talk about Premium sales and landing pages. You&apos;re
          talking about ME.
        </p>

        <p>Book a spot today.</p>

        <p>
          <Link to="https://wa.link/y13c6l" className="text-sky-500 underline">
            Inbox Me
          </Link>{" "}
          on WhatsApp.
        </p>
      </article>

      {/**************************
       * SOCIAL MEDIA LINKS
       ***************************/}
      <article>
        <ul className="flex items-center justify-center my-6 space-x-2 ">
          <li>
            <Link
              className="text-sky-500"
              to="https://web.facebook.com/profile.php?id=61578108629540"
            >
              Facebook
            </Link>
          </li>
          <li>•</li>
          <li>
            <Link
              className="text-sky-500"
              to="https://www.linkedin.com/in/abellmanuell/"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </article>

      {/* TESTIMONIAL */}
      <div className="my-10">
        <img
          className="rounded-sm shadow-lg w-full mb-6"
          src={faithman2Testimony}
          alt="Mercy Ayomide Landing Page Testimony"
        />
      </div>

      <div className="space-y-6 my-10">
        <Link
          to="https://wa.link/y13c6l"
          className="bg-sky-900 p-6 w-full block text-center font-bold text-xl rounded-md shadow-md hover:bg-sky-800 transition-colors duration-300 text-sky-100"
        >
          Message Me for Next Steps
        </Link>
      </div>
    </section>
  );
}
