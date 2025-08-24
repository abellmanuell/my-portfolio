import SocialMedias from "../../components/SocialMedias";
import Profile from "../../components/Profile";
import burntIC from "../../assets/burnt-ic.jpeg";
import newHP1 from "../../assets/new-hp-1.jpeg";
import newHP2 from "../../assets/new-hp-2.jpeg";
import { Link } from "react-router";

export default function RebuildingPaauMarketApp() {
  return (
    <section className="sm:w-2/6 m-auto px-2 py-10 sm:py-20 leading-8">
      <Profile
        title="Rebuilding Paau Market App."
        subtitle="Aug 18, 2025"
        hot_title="LinkedIn"
        hotlink="https://www.linkedin.com/in/abellmanuell/"
      />

      <article className="mt-6 space-y-6">
        <p>
          The post was supposed to be written, vetted, and published yesterday,
          Sunday, August 17th, 2025.
        </p>

        <p>
          Writing it today, Monday, and I&apos;m not going to make it a long
          post.
        </p>

        <p>
          A lot happened last week, and I couldn&apos;t build or ship a product
          or feature.
        </p>

        <p>
          Thursday last week, I was taking some kids&apos; lessons on the
          fundamentals of programming languages, and at some point I began to
          passive a burnt smell.
        </p>

        <p>
          I quickly turn off the switch, detach the charger from the laptop. I
          waited for about 2 minutes to turn on the laptop, but it didn&apos;t
          turn on.
        </p>

        <p>
          I took it to a computer engineer to find what went wrong. He opened
          the laptop and discovered that the integrated circuit (IC) had burned.
        </p>

        <p>
          Initially, we thought it was repairable; however, the IC was burned
          down to the motherboard of the laptop, which can not be replaced.
        </p>

        <div className="min-h-[500px]">
          <img
            src={burntIC}
            alt="Burnt Integrated CIrcuit"
            className="rounded-lg"
            title="Abel Emmanuel at Founders Friday"
          />
          <h4
            title=" Burnt Integrated CIrcuit"
            className="text-neutral-500 text-xs text-center mt-2 mb-10 italic"
          >
            Burnt Integrated Circuit
          </h4>
        </div>

        <p>
          The next day, the engineer called and informed me, and suggested a new
          motherboard. Immediately, when I heard the news, I was very weak
          because I thought it was a minor issue.
        </p>

        <p>I didn&apos;t know it warranted changing the motherboard.</p>

        <p>
          I asked for the price of a new motherboard. The price was high and the
          type of my laptop motherboard is scarce. And currently not in the
          market.
        </p>

        <b className="block">New HP Elitebook 840 G5.</b>

        <p>
          Due to the high price and scarcity. I asked for the price of the
          available laptops. They showed me all there had and I settled for HP
          Elitebook 840 G5, Core i5 VPro, 7th Gen, 16GB RAM, and 256GB SSD.
        </p>

        <div className="min-h-[500px]">
          <img
            src={newHP1}
            alt="HP Elitebook 850 G5"
            className="rounded-lg"
            title="HP Elitebook 850 G5"
          />
          <h4
            title="HP Elitebook 850 G5"
            className="text-neutral-500 text-xs text-center mt-2 mb-10 italic"
          >
            HP Elitebook 850 G5
          </h4>
        </div>

        <div className="min-h-[500px]">
          <img
            src={newHP2}
            alt="HP Elitebook 850 G5"
            className="rounded-lg"
            title="HP Elitebook 850 G5"
          />
          <h4
            title="HP Elitebook 850 G5"
            className="text-neutral-500 text-xs text-center mt-2 mb-10 italic"
          >
            HP Elitebook 850 G5
          </h4>
        </div>

        <p>That&apos;s all for the IC and the new laptop.</p>

        <b className="block">Rebuilding Paau Market.</b>

        <p>
          Three years ago, I found a common problem peculiar to the
          students&apos; trade, and I embarked on building a solution for it.
        </p>

        <p>
          There&apos;s a gap between a student who is selling and a student who
          is buying in the school campus, and we went ahead to create a school
          platform that is secure and safe for trading with other students.
        </p>

        <p>
          To put, we are building Paau Market as a student-only e-commerce
          platform where students can buy and sell to each other. We are
          building a platform that allows students to trade easily and without
          stress.
        </p>

        <p>
          The first version was a web application, and we had over 689 users
          until I got burned out and was unable to renew my hosting as of early
          June 2025.
        </p>

        <p>
          The next move for Paau Market is to build a dedicated native platform
          for the users. Instead of going through the browsers, they can install
          our app through the Play Store or Apple Store.
        </p>

        <p>
          Right now, I&apos;m looking at building the Android version, while iOS
          comes later.
        </p>

        <p>
          This weekend, the web app went Live again. This time, we are
          approaching the market in a different dimension and strategies.
        </p>

        <p>Watch HOW we&apos;re going to do it.</p>

        <p>
          Visit{" "}
          <Link
            to="https://www.paaumarket.com.ng"
            className="underline text-sky-500"
          >
            Paau Market
          </Link>{" "}
          for the web app.
        </p>

        <p>Watch OUT for my next updates.</p>
        <p>Thanks for reading to this point.</p>

        <b className="block">Please DON&apos;T forget.</b>

        <p>
          I&apos;m Abel Emmanuel, I love building beautiful and solutions
          products, saas.
        </p>

        <p>Write me a feedback and let&apos;s connect on:</p>
        <SocialMedias />
      </article>
    </section>
  );
}
