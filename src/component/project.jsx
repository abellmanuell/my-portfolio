import { Link } from "react-router-dom";
import { TbWorldWww } from "react-icons/tb";
import { FaGithubSquare } from "react-icons/fa";

export default function project({
  img,
  description,
  webSiteURL,
  sourceCodeURL,
}) {
  return (
    <div className=" rounded-md border-2 border-amethyst-100 p-3 shadow-md shadow-amethyst-100">
      <img src={img} alt={'Image here'} loading="lazy" className="rounded-md opacity-75 hover:opacity-100"/>

      <div>
        <p className="px-5 py-2 text-base text-amethyst-900">
          {description ||
            "No description"}
        </p>

        <div className="flex justify-end text-2xl">
          <Link
            to={webSiteURL}
            className="inline-block p-1 mx-1 bg-amethyst-50 rounded-md border-[1.5px] self-center text-amethyst-700 hover:text-amethyst-900"
          >
            <TbWorldWww />
          </Link>

          <Link
            to={sourceCodeURL}
            className="inline-block p-1 mx-1 bg-amethyst-50 rounded-md border-[1.5px] self-center text-amethyst-700 hover:text-amethyst-900"
          >
            <FaGithubSquare />
          </Link>
        </div>
      </div>
    </div>
  );
}
