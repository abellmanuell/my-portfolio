import { Link } from "react-router";
import Avatar from "./components/Avatar";

export default function App() {
  return (
    <section className="text-sm h-dvh flex flex-col items-center justify-center">
      <h1>Hello, world!</h1>
      <h1>
        I am{" "}
        <span className="font-mono italic font-medium"> Abel Emmanuel. </span>
      </h1>

      <div className="my-4">
        <Avatar className="h-[150px] w-[150px]" />
      </div>

      <p>Click here to learn more:</p>
      <ul className="flex flex-col items-center">
        <li>
          <Link to="/software-developer" className="underline text-sky-500">
            Software Developer
          </Link>
        </li>
        <li>
          <Link to="/funnel-builder" className="underline text-sky-500">
            Sales & Landing Page Builder
          </Link>
        </li>
        <li>
          <Link to="/blog" className="underline text-sky-500">
            My Blog
          </Link>
        </li>
      </ul>
    </section>
  );
}
