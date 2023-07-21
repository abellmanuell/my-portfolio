import Handle from "./handle";
import Heading from "./heading";

export default function Footer() {
  return (
    <footer className="w-[90vw] md:w-4/5 mx-auto py-10">
      <Heading content="Contact Me" />
      <p className="text-amethyst-900 text-lg md:text-2xl py-2">
        Got an offer for me? Or a project we can work on?
        <br /> Fill in the details and I'll get back to you as soon as I can.
      </p>
      <article>
        <section className="grid md:grid-cols-2">
          <form
            action="#"
            method="post"
            className="space-y-2 mt-4 text-amethyst-900"
          >
            <input
              type="text"
              placeholder="Enter Full name"
              name="full_name"
              className="w-full p-4 text-lg border-2 rounded-md"
            />
            <br />
            <input
              type="email"
              placeholder="Enter Email address"
              name="email_address"
              className="w-full p-4 text-lg border-2 rounded-md"
            />
            <br />
            <textarea
              name=""
              cols="10"
              rows="3"
              placeholder="Type message here..."
              className="w-full p-4 text-lg border-2 rounded-md"
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="bg-rose-500 font-bold px-10 py-3 text-white rounded-md cursor-pointer"
            />
          </form>
        </section>

        <section className="mt-10 text-center text-amethyst-900">
          <ul>
            <li>
              <label htmlFor="">Email Address: </label>
              <a className="text-lg" href="mailto:mannydev02@gmail.com">
                mannydev02@gmail.com
              </a>
            </li>
            <li>
              <label htmlFor="">Telephone: </label>
              <a href="tel:+2349025534431">+23490 255 344 31</a>
            </li>
          </ul>

          <div className="flex justify-center py-5">
            <Handle />
          </div>

          <p>
            Developed by <strong>Abel Emmanuel</strong> 👨🏽💻
          </p>
        </section>
      </article>
    </footer>
  );
}
