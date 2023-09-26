import React from "react";
import { Icon } from "@iconify/react";

function Contact() {
  return (
    <section>
      <div className="px-5 py-10">
        <div className="flex justify-center space-x-2 text-5xl">
          <div>
            <a href="mailto:mannydev02@gmail.com" target="_blank">
              <Icon icon="logos:google-gmail" />
            </a>
          </div>

          <div>
            <a href="https://twitter.com/abellmanuell" target="_blank">
              <Icon icon="ri:twitter-x-fill" />
            </a>
          </div>
          <div>
            <a href="https://linkedin.com/in/abellmanuell" target="_blank">
              <Icon icon="skill-icons:linkedin" />
            </a>
          </div>
          <div>
            <a href="https://github.com/abellmanuell/" target="_blank">
              <Icon icon="devicon:github" />
            </a>
          </div>
        </div>
      </div>

      <footer>
        <p className="text-center p-2 text-neutral-600">
          Made with <span className="text-red-500">&#10084;</span> in Nigeria by
          Abel Emmanuel
        </p>
      </footer>
    </section>
  );
}

export default Contact;
