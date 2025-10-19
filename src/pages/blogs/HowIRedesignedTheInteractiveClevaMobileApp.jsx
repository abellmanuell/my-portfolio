import SocialMedias from "../../components/SocialMedias";
import Profile from "../../components/Profile";

import JosephAndIChatRoom from "../../assets/joseph-and-i-chatroom.png";
import ClevaMobileAppRedesign from "../../assets/cleva-mobile-app-redesign.png";

export default function HowIRedesignedTheInteractiveClevaMobileApp() {
  return (
    <section className="sm:w-2/6 m-auto px-2 py-10 sm:py-20 leading-8">
      <Profile
        title="How I Redesigned the Interactive Cleva Banking Mobile App."
        subtitle="Oct 19, 2025"
        hot_title="LinkedIn"
        hotlink="https://www.linkedin.com/in/abellmanuell/"
      />

      <article className="mt-6 space-y-6">
        <p>
          I made a post on LinkedIn today, 2hours ago, on the
          #Clevaredesignchallenge.
        </p>

        <p>
          78 hours ago, when I was scrolling through my LinkedIn news timeline,
          I saw a post made by Joseph Onaolapo about his redesign, then I
          inboxed him to share the link to the Figma file.
        </p>

        <div className="min-h-[200px]">
          <img
            src={JosephAndIChatRoom}
            alt="Joseph and I Chatroom"
            className="rounded-lg"
            title="Joseph and I Chatroom"
          />
          <h4
            title="Joseph and I Chatroom"
            className="text-neutral-500 text-xs text-center mt-2 mb-10 italic"
          >
            Joseph and I Chatroom
          </h4>
        </div>

        <p>
          Even before he shared the link, I searched LinkedIn with the
          challenge&apos;s keyword, and I saw all the participants&apos;
          redesigns; however, Joseph Onaolapo stood out to me.
        </p>

        <p>
          He shared the Figma link, and I turned the redesign User Interface
          (UI) into an interactive mobile application.
        </p>

        <div className="min-h-[200px]">
          <img
            src={ClevaMobileAppRedesign}
            alt="Cleva Mobile App Redesign"
            className="rounded-lg"
            title="Cleva Mobile App Redesign"
          />
          <h4
            title="Cleva Mobile App Redesign"
            className="text-neutral-500 text-xs text-center mt-2 mb-10 italic"
          >
            Cleva Mobile App Redesign
          </h4>
        </div>

        <b className="block">This is how it goes:</b>

        <p>- I opened the Figma file</p>

        <p>
          - Exported the icons and converted them into font icons for high
          performance.
        </p>

        <p>- Download Geist font family (Light, Regular, Medium & Semibold).</p>

        <p>- Set up & configured my SDK environment.</p>

        <p>
          The challenge I faced while building it was converting the icons into
          font icons for high performance.
        </p>

        <p>
          I struggled converting some icons to font-icons. Not all the icons
          were able to convert with iconmoon or FlutterIcon; however, I got them
          all converted.
        </p>

        <p>Apart from icon conversion issues, nothing more.</p>

        <p>
          Kudos to Joseph Onaolapo; he redesigned it and shared the Figma file.
        </p>

        <b className="block">Drive link (Android only):</b>

        <p>
          <a
            href="https://lnkd.in/eJDWBhUx"
            target="_blank"
            className="text-sky-500"
          >
            https://lnkd.in/eJDWBhUx
          </a>
        </p>

        <p>What are your thoughts about it?</p>

        <p>Watch OUT for my new updates.</p>
        <p>Thanks for reading to this point.</p>

        <b className="block">Please DON&apos;T forget.</b>

        <p>
          I&apos;m Abel Emmanuel, a software developer based in Nigeria. I
          design and build beautiful conversion-focused product.
        </p>

        <p>Write me a feedback and let&apos;s connect on:</p>
        <SocialMedias />
      </article>
    </section>
  );
}
