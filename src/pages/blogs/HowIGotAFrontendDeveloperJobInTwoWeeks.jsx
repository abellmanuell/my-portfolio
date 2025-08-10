import SocialMedias from "../../components/SocialMedias";
import Profile from "../../components/Profile";
import gotFrontendJob from "../../assets/got-a-frontend-job.png";
import abellAtFounderFridays from "../../assets/abell-at-founder-fridays.jpeg";
import zaidIndividualRecordsFeat from "../../assets/zaid-individual-records-feat.png";

export default function HowIGotAFrontendDeveloperJobInTwoWeeks() {
  return (
    <section className="sm:w-2/6 m-auto px-2 py-10 sm:py-20 leading-8">
      <Profile
        title="How I Got a Frontend Developer Job in Two Weeks."
        subtitle="Aug 10, 2025"
        hot_title="LinkedIn"
        hotlink="https://www.linkedin.com/in/abellmanuell/"
      />

      <article className="mt-6 space-y-6">
        <p>Wheep!!</p>
        <div className="min-h-[200px]">
          <img
            src={gotFrontendJob}
            alt="Got Frontend Develoer Job banner"
            className="rounded-lg"
            title="Got Frontend Develoer Job"
          />
          <h4
            title="Got Frontend Develoer Job"
            className="text-neutral-500 text-xs text-center mt-2 mb-10 italic"
          >
            Got Frontend Develoer Job
          </h4>
        </div>

        <p>I got a Frontend Developer job in two weeks of job hunting.</p>
        <p>How did I do it?</p>
        <p>
          It wasn&apos;t up to three days before I got to my Primary Place of
          Assignment (PPA), where the National Youth Service Corps (NYSC) posted
          me.
        </p>
        <p>
          I was posted to a well-known, recognized tech company and innovation
          hub, Labspace by JD Labs in Minna, Niger State at large.
        </p>
        <p>
          On the second day all the corps members were onboarded on the affairs,
          operations and principles of Labspace.
        </p>
        <p>
          Labspace is basically a tech hub, therefore tech people walk in and
          out everyday. And I got to meet some intelligents and brillants
          software developers who are passionate about their crafts.
        </p>
        <b className="block">
          Each day a developer walk-in I introduce myself like:
        </b>
        <p>
          <em>
            Hi, I’m Abel Emmanuel, a software developer. I build beautiful
            products that solve real world problems. Here are what I have built.
            I’m looking for an offer or opportunity if there’s any. Thanks.
          </em>
        </p>
        <p>I repeatedly introduced myself to them as they walk in and out.</p>
        <p>
          Fortunately, all told me they’ll get back if any opportunity is
          available but only 1 person got back to me the second week. So, I got
          interviewed and the job.
        </p>
        <b className="block">Founders Friday</b>
        <p>
          To put differently, this weekend I attended Founders Friday, the Fifth
          Editions hosted at Ministry of Communications Technology and Digital
          Economy Niger State.
        </p>
        <p>
          Founders Friday is an event where founders meet on a Friday of every
          months to share ideas, connects, showcases and pitch products.
          Founders Friday was an experienced and an impactful program you won’t
          want to miss.
        </p>

        <div className="min-h-[500px]">
          <img
            src={abellAtFounderFridays}
            alt="Abel Emmanuel at Founders Friday"
            className="rounded-lg"
            title="Abel Emmanuel at Founders Friday"
          />
          <h4
            title="Abel Emmanuel at Founders Friday"
            className="text-neutral-500 text-xs text-center mt-2 mb-10 italic"
          >
            Abel Emmanuel at Founders Friday
          </h4>
        </div>

        <p>
          I met a lot of Founders, Software Developer, UI/UX Designers, Creative
          Designers, Photographers and Media persons….. and most notably, the
          Minister. Yes, I met the Minister, he’s very tall, brillants and funny
          at the same time. So far, I think he know a lot about business,
          investment, startup and tech.
        </p>
        <p>
          Not to forget, I got a chance to speak and pitch my products. I
          connect with like-minds, make new friends, and exchanged contacts. I
          also got a mentee.
        </p>
        <p>Yeah, that’s all for Founders Friday.</p>

        <b className="block">Thanks to Mrs. Abu-Aguye Nafisat</b>

        <p>
          This article would not be complete without mentioning my mentor, and
          my manager at Labspace, Mrs. Abu-Aguye Nafisat. She created the
          enabling environment for me to strived.
        </p>
        <p>
          All the events I have attended in less than a month are from her.{" "}
          <b>THANK YOU MA.</b>
        </p>

        <b className="block">Building Zaid in public.</b>
        <p>
          As much as I want churches to start using my software immediately and
          get feedback instantly. I never stop improving the software, adding
          new features that are necessary.
        </p>
        <p>
          Yesterday night, I added individual member records feature. These
          features enable the churches to be able to see past and current
          records of the member.
        </p>

        <div className="min-h-[200px]">
          <img
            src={zaidIndividualRecordsFeat}
            alt="Zaid Individual Record feature"
            className="rounded-lg"
            title="Zaid Individual Record feature"
          />
          <h4
            title="Zaid Individual Record feature"
            className="text-neutral-500 text-xs text-center mt-2 mb-10 italic"
          >
            Zaid Individual Record feature
          </h4>
        </div>

        <p>
          Next, I’m working on integrating Societies/Groups features. So the
          church can add member base on category, societies or groups.
        </p>
        <p>Watch OUT for my new updates.</p>
        <p>Thanks for reading to this point.</p>

        <b className="block">Please DON’T forget.</b>

        <p>
          I’m Abel Emmanuel, I love building beautiful and solutions products,
          saas.
        </p>

        <p>Write me a feedback and let&apos;s connect on:</p>
        <SocialMedias />
      </article>
    </section>
  );
}
