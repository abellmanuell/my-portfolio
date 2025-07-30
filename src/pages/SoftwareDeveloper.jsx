import { Link } from "react-router";
import { articles } from "../lib/data.js";
import Profile from "../components/Profile.jsx";

export default function SoftwareDeveloper() {
  return (
    <section className="sm:w-2/6 m-auto px-2 py-10 sm:py-20 ">
      <Profile
        title="Abel Emmanuel"
        subtitle="Software Developer"
        hot_title="LinkedIn"
        hotlink="https://www.linkedin.com/in/abellmanuell/"
      />

      {/**************************
       * A QUICK INTRODUCTION
       ***************************/}
      <article className="mt-6 space-y-6">
        <p>
          I&apos;m Abel Emmanuel, a 20-year old indie-hacker, open source
          contributor, and sales funnel builder.
        </p>

        <p>
          I&apos;m currently building{" "}
          <Link to="https://www.zaid.rest" className="text-sky-500 underline">
            Zaid
          </Link>
          , a church management software that helps churches manage their
          members, events, and finances, etc.
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

      {/**************************
       * SOCIAL MEDIA LINKS
       ***************************/}
      <article>
        <ul className="flex items-center justify-center my-6 space-x-2 ">
          <li>
            <Link className="text-sky-500" to="https://x.com/abellmanuell">
              X/Twitter
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
          <li>•</li>
          <li>
            <Link className="text-sky-500" to="https://github.com/abellmanuell">
              GitHub
            </Link>
          </li>
        </ul>
      </article>

      {/**************************
       * RECENT ARTICLES
       ***************************/}

      <article>
        <h1 className="text-xl mb-4 font-medium">My recent article</h1>
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
      </article>
    </section>
  );
}
