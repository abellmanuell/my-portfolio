import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter, FaGithubSquare } from "react-icons/fa";

export default function handle() {
  return (
    <ul className="flex items-center col-start-6 col-end-7 text-2xl">
      <li>
        <Link
          to="https://github.com/abellmanuell"
          target="_blank"
          className="inline-block p-1 mx-1 bg-amethyst-50 rounded-md border-[1.5px] self-center text-amethyst-700 hover:text-amethyst-900"
        >
          <FaGithubSquare />
        </Link>
      </li>
      <li>
        <Link
          to="https://www.linkedin.com/in/abellmanuell/"
          target="_blank"
          className="inline-block p-1 mx-1 bg-amethyst-50 rounded-md border-[1.5px] self-center text-amethyst-700 hover:text-amethyst-900"
        >
          <FaLinkedin />
        </Link>
      </li>

      <li>
        <Link
          to="https://twitter.com/abellmanuell"
          target="_blank"
          className="inline-block p-1 mx-1 bg-amethyst-50 rounded-md border-[1.5px] self-center text-amethyst-700 hover:text-amethyst-900"
        >
          <FaTwitter />
        </Link>
      </li>
    </ul>
  );
}
