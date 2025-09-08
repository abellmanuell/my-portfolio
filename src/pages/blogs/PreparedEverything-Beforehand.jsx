import SocialMedias from "../../components/SocialMedias";
import zaidDashboard from "../../assets/zaid_dashboard.png";
import Profile from "../../components/Profile";
import { Link } from "react-router";

export default function PreparedEverythingBeforehand() {
  return (
    <section className="sm:w-2/6 m-auto px-2 py-10 sm:py-20 leading-8">
      <Profile
        title="Prepared Everything Beforehand."
        subtitle="Sept 7, 2025"
        hot_title="LinkedIn"
        hotlink="https://www.linkedin.com/in/abellmanuell/"
      />

      <article className="mt-6 space-y-6">
        <p>
          The headline <b>&quot;Prepared Everything Beforehand&quot;</b>{" "}
          doesn&apos;t have a hidden meaning..
        </p>

        <p>It is what you thought, “Prepare Everything Beforehand“.</p>

        <p>
          Since last month, my desire to learn Dart and Flutter has increased
          tremendously. I want to build and ship my idea as quickly as possible.
        </p>

        <p>
          After completing the Dart course, I began learning Flutter Widgets and
          started building some small projects alongside.
        </p>

        <p>
          So far, I&apos;ve built a Currency Converter, a Weather App, cloned
          WhatsApp Settings page, and recently, the NIN Checker App.
        </p>

        <b className="block">The NIN Checker App</b>

        <p>The NIN acronym, National Identification Number.</p>

        <p>
          The NIN Checker is an app I built to help my friends and me check our
          details on the National Identity Management Commission (NIMC)
          database.
        </p>

        <p>
          On Saturday, I was on the Nigeria Immigration Service (NIS) portal to
          register for a Fresh International Passport for travel purposes and
          use as a means of identification since Google rejected my government
          ID card (National Identity Card), and since then, I have been in
          search of another alternative.
        </p>

        <p>
          I opened the NIS portal, and the first question was to input my NIN
          and date of birth. I&apos;d entered it, and my data got populated in a
          tabular form{" "}
          <i className="font-medium">
            (e.g., First, Last & Middle Names, Date & Place of Birth, Local
            Government Area (LGA), State of Origin, Country of Birth, etc).
          </i>
        </p>

        <p>
          The thought of I could use their APIs to build an App for checking
          basic NIN information pop-up.
        </p>

        <p>
          Also, I&apos;ve been searching for an easy and less costly way to
          verify students and sellers on the Paau Market App. (Paau Market is a
          student e-commerce marketplace for students to buy from students.)
        </p>

        <p>
          With the NIS APIs, I could verify users and keep the platform secure
          from bad actors.
        </p>

        <b className="block">Beforehand Preparation</b>

        <p>
          Paau Market&apos;s strongest value proposition is safety, strong
          security, no spamming, and a scam-free online platform.
        </p>

        <p>
          The first version of our e-marketplace was absolutely built on a{" "}
          <Link
            to="https://web.dev/explore/progressive-web-apps"
            target="_blank"
            className="underline text-sky-500"
          >
            Progressive Web App (PWA)
          </Link>{" "}
          . There are some limitations hindering students and us.
        </p>

        <p>
          First, some students spoke out and said they couldn&apos;t find our
          App on the Google Play Store.
        </p>

        <p>
          Secondly, from our own side, we lack vibrant customer retention tools,
          such as Push Notifications. Note, we&apos;re not using a native app.
          The limitation kept our customers off our app.
        </p>

        <p>
          Before we start building another app (native app this time).
          We&apos;ve put out a survey to understand the market.
        </p>

        <p>
          We put out a Poll and Questionnaire surveys, and discovered the
          students preferred trusted items and sellers rather than the cheapest
          items.
        </p>

        <p>
          Therefore, the means of how to get students and sellers to verify
          arose. I began to look for a way.
        </p>

        <p>
          Eventually, I find a way to verify students with their matriculation
          number. But then another question, what about the community people
          around the school environment who would like to sell, how can we
          verify them? because they don&apos;t have a matriculation number.
        </p>

        <p>
          The idea of the National Identification Number came, but we don’t have
          enough money to get the NIMC APIs.
        </p>

        <p>
          The NIS portal has less our costs with their APIs to help us verify
          users with NIN until we can afford the APIs directly from NIMC.
        </p>

        <p className="font-bold">
          We&apos;re ready and prepared beforehand. Thank you.
        </p>

        <SocialMedias />
      </article>
    </section>
  );
}
