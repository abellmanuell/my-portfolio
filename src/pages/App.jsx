import React from "react";

import me from "../assets/me.jpg";

import Heading1 from "../components/Heading1";
import Image from "../components/Image";
import Paragrah from "../components/Paragrah";
import Heading2 from "../components/Heading2";
import Link from "../components/Link";

export default function App() {
  // Document Title
  document.title = "Abel Emmanuel - Software developer";

  return (
    <div className="p-2 sm:px-10">
      {/* Heading Section */}
      <Image src={me} alt="Abel Emmanuel" />
      <div className="my-5">
        <Heading1>Hi, I'm Abel Emmanuel</Heading1>
        <Paragrah className="text-gray-500">
          A software developer. <br />
          I build and design websites and applications. <br />I love javascript
          and its ecosystem but never limit myself. <br /> I build, ship, deploy
          project quick & fast.
        </Paragrah>
      </div>

      {/* Social Media handle */}
      <div className="my-10">
        <Link link="https://linkedin.com/in/abellmanuell">LinkedIn</Link>
        <br />
        <Link to="https://x.com/abellmanuell">X/Twitter</Link>
      </div>

      {/* Most recent projects */}
      <div>
        <Heading2 className="text-lg">My Recent Projects</Heading2>

        <table className="border border-collapse my-2">
          <thead>
            <tr>
              <th className="border py-1 px-2">Project name</th>
              <th className="border py-1 px-2"></th>
              <th className="border py-1 px-2"></th>
            </tr>
          </thead>

          <tbody>
            <TableRow
              title="Paau Market"
              githubUrl="https://github.com/paaumarket/paaumarket-ionic-app.git"
              demoUrl="https://paaumarket.com.ng/"
            />
            <TableRow
              title="Nexa Energy Ltd"
              githubUrl="https://github.com/abellmanuell/nexa-energy.git"
              demoUrl="https://nexaenergyltd.com/"
            />

            <TableRow
              title="pBlog"
              githubUrl="https://github.com/abellmanuell/pblog.git"
              demoUrl="https://pblog-lac.vercel.app/"
            />
          </tbody>
        </table>

        <Paragrah>
          I want to see{" "}
          <Link to="https://linkedin.com/in/abellmanuell">more projects</Link>.
        </Paragrah>

        <div>
          <Paragrah>
            Work with me{" "}
            <Link to="https://linkedin.com/in/abellmanuell">Let Talk</Link>.
          </Paragrah>
        </div>
      </div>
    </div>
  );
}

// Component for Table Row and Table Data
function TableRow({ title, githubUrl, demoUrl }) {
  return (
    <tr>
      <td className="border py-1 px-2 text-gray-500">{title}</td>
      <td className="border py-1 px-2">
        <a href={githubUrl} target="_blank" className="underline text-blue-500">
          source code
        </a>
      </td>
      <td className="border py-1 px-2">
        <a href={demoUrl} target="_blank" className="underline text-blue-500">
          view
        </a>
      </td>
    </tr>
  );
}
