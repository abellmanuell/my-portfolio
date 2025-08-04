import SocialMedias from "../../components/SocialMedias";
import zaidDashboard from "../../assets/zaid_dashboard.png";
import Profile from "../../components/Profile";

export default function BuildingARobustSystemTakesTime() {
  return (
    <section className="sm:w-2/6 m-auto px-2 py-10 sm:py-20 leading-8">
      <Profile
        title="Building a robust system takes time."
        subtitle="Aug 4, 2025"
        hot_title="LinkedIn"
        hotlink="https://www.linkedin.com/in/abellmanuell/"
      />

      <article className="mt-6 space-y-6">
        <p>Building a robust system takes time.</p>

        <p>Ideas are built on ideas.</p>
        <p>
          There must be a first idea to build on other ideas. I’ve learned it by
          building Zaid.
        </p>
        <p>
          Most importantly, my first change of mindset is to build it and make
          it work. Make it Work.
        </p>
        <p>Fancy comes later.</p>

        <div className="h-[250px]">
          <img
            src={zaidDashboard}
            alt="Zaid Dashboard"
            className="rounded-lg"
          />
          <h4
            title="Zaid Admin Dashboard"
            className="text-neutral-500 text-xs text-center mt-2 mb-10 italic"
          >
            Zaid Admin Dashboard
          </h4>
        </div>
        <p>
          Sometime around early June 2025, I started building my fourth Software
          as a Service (SaaS) in public. It all began as a mere idea I
          discovered from the problem my dad was facing at the time.
        </p>
        <p>
          The approach I took to build the solution was different. The former
          approach was I build the fancy design before building the actual
          functionalities.
        </p>
        <p>
          The design-first approach was my first approach until I began building
          Zaid. I took Zaid in a functional approach, I neglected the fancy look
          of the application, because I needed to ship the product faster, so I
          concentrated on how the software should work, and then fancy designs
          would come later.
        </p>
        <p>
          Initially, when I started building Zaid, I didn’t have all the
          features you’re seeing in the product written down. The goal was to
          build a simple software that registers a member, but however idea is
          building on top of the first idea..
        </p>
        <p>Ideas were flowing in. I began to build and build and build…</p>
        <p>
          Zaid is a digitalized record keeper. It is a tool to help churches
          manage members, events, and finances.
        </p>
        <p>Here&apos;s a short story about my dad:</p>
        <p>
          He was a Deacon (now elder) and a Men&apos;s Fellowship Treasurer of
          the church.
        </p>
        <p>
          He was given the responsibility to register new members, and renewal
          of members&apos; membership in a biggggg book.
        </p>
        <p>He also kept Men&apos;s Fellowships, treasuring records.</p>
        <p>
          Keeping all the records became a challenge. Not in the aspect of
          registering new members, but renewing membership.
        </p>
        <p>
          If it&apos;s renewing only 1 member out of 10, it could&apos;ve been
          easier.
        </p>
        <p>100s could still be easy.</p>
        <p>
          But searching for a single member in a list of thousands of members is
          hectic and stressful 😫.
        </p>
        <p>What if it is billions 😫 ..…?</p>
        <p>He repeats these processes every Sunday, every year.</p>
        <p>
          He was also given the responsibility of checking past and current
          records of a member in case of marriage or death.
        </p>
        <p>This is how he records members:</p>
        <p>Write the member&apos;s name in a big book.</p>
        <p>
          Search the big book to renew a member, and repeat the process for all
          the members that need to be renewed.
        </p>
        <p>
          And also check books 1, 2, 3, 4, or 5... for a member&apos;s records.
        </p>
        <p>Noticing all these common pains birthed Zaid.</p>
        <p>
          A software that helps keep members&apos; past and current records, and
          the renewal of members&apos; membership.
        </p>
        <p>
          Zaid is a church management software for managing church members,
          events, and finances.
        </p>
        <p>
          I&apos;m happy building, shipping, and sharing my project in this
          community.
        </p>
        <p>For churches that want to keep great records, Zaid is here…</p>

        <p>Write me a feedback and let&apos;s connect on:</p>

        <SocialMedias />
      </article>
    </section>
  );
}
