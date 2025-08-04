import { Link } from "react-router";
import { articles } from "../lib/data.js";
import Profile from "../components/Profile.jsx";

export default function MyBlog() {
  return (
    <section className="sm:w-2/6 m-auto px-2 py-10 sm:py-20 ">
      <Profile
        title="My Blog"
        subtitle="Software Developer"
        hot_title="LinkedIn"
        hotlink="https://www.linkedin.com/in/abellmanuell/"
      />

      {/**************************
       * RECENT ARTICLES
       ***************************/}

      <article>
        <h1 className="text-xl mb-4 font-medium">All Blog post</h1>
        <ul className="space-y-6">
          {articles.map((article, index) => (
            <li key={index}>
              <Link
                to={article.link}
                className="block mb-4"
                title={article.title}
              >
                <h1 title={article.title}>{article.title}</h1>
                <p className="text-sm text-neutral-500">{article.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
