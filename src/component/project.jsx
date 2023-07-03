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
    <div className=" rounded-md bg-amethyst-50 p-8 shadow-md shadow-amethyst-100">
      <img src={img} alt="Apex Crypto Recovery" loading="lazy" />

      <div>
        <p className="py-5 text-xl">
          {description ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repudiandae alias itaque non autem, dolore vitae aliquid quam maxime cum."}
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
