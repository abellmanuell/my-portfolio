import { Link } from "react-router";
import { articles } from "../lib/data.js";
import Profile from "../components/Profile.jsx";

export default function FunnelBuilder() {
  return (
    <section className="sm:w-2/6 m-auto px-2 py-10 sm:py-20 ">
      <Profile title="Abel Emmanuel" subtitle="Sales & Landing Page Builder" />

      {/**************************
       * A QUICK INTRODUCTION
       ***************************/}
      <article className="mt-6 space-y-6">
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

      {/**************************
       * RECENT ARTICLES
       ***************************/}

      <article>
        <h1 className="text-xl mb-4 font-medium">My recent projects</h1>
        <ul>
          {/* {articles.map((article, index) => (
            <li key={index}>
              <Link to={article.link} className="block mb-4">
                <h1>{article.title}</h1>
                <p className="text-sm text-neutral-500">{article.date}</p>
              </Link>
            </li>
          ))} */}
        </ul>
      </article>
    </section>
  );
}
