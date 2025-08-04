import { Link } from "react-router";

export default function SocialMedias() {
  return (
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
  );
}
