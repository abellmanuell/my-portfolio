import SocialMedias from "../../components/SocialMedias";
import Profile from "../../components/Profile";
import zaidIndividualRecordsFeat from "../../assets/zaid-individual-records-feat.png";
import isrealMessage from "../../assets/israel-message.png";
import figmaDesignFromMartins from "../../assets/figma-design-from-martins.jpeg.jpeg";
import iDesignMartinWork from "../../assets/i-design-martins-work.jpeg";
import messageAfterMartinWork from "../../assets/message-after-martin-work.png";

export default function HowBuildingInPublicHelpedMe() {
  return (
    <section className="sm:w-2/6 m-auto px-2 py-10 sm:py-20 leading-8">
      <Profile
        title="How Building In Public Helped Me."
        subtitle="Sept 15, 2025"
        hot_title="LinkedIn"
        hotlink="https://www.linkedin.com/in/abellmanuell/"
      />

      <article className="mt-6 space-y-6">
        <p>Hello,</p>

        <p>
          Let me reintroduce myself. My name is Abel Emmanuel, and I am a
          Software Developer from Nigeria.
        </p>

        <p>
          I create beautiful products using JavaScript, React.js, Express.js,
          Flutter, and Dart.
        </p>

        <p>Currently, I am working on the Paau Market Native App.</p>

        <p>
          Paau Market is an online marketplace exclusively for students, where
          they can buy and sell from each other.
        </p>

        <p>
          Today, however, I want to discuss how building in public has opened
          new opportunities for me.
        </p>

        <b className="block">Let me share a short story.</b>

        <p>
          Back in June, I was working on Zaid, a church management software.
        </p>

        <div className="min-h-[200px]">
          <img
            src={zaidIndividualRecordsFeat}
            alt="Zaid Individual Record Feature"
            className="rounded-lg"
            title="Zaid Individual Record Feature"
          />
          <h4
            title="Zaid Individual Record Feature"
            className="text-neutral-500 text-xs text-center mt-2 mb-10 italic"
          >
            Zaid Individual Record Feature
          </h4>
        </div>

        <p>
          Throughout this process, I shared my journey on social media
          platforms, including LinkedIn, X (formerly Twitter), and WhatsApp.
        </p>

        <p>
          One day, I received a message on LinkedIn from someone interested in a
          partnership. Unfortunately, the deal didn&apos;t go through.
        </p>

        <p>
          However, I was thrilled to see that my project had captured
          someone&apos;s interest, which indicated that I was creating something
          valuable.
        </p>

        <div className="min-h-[200px]">
          <img
            src={isrealMessage}
            alt="Message from Israel on LinkedIn"
            className="rounded-lg"
            title="Message from Israel on LinkedIn"
          />
          <h4
            title="Message from Israel on LinkedIn"
            className="text-neutral-500 text-xs text-center mt-2 mb-10 italic"
          >
            Message from Israel on LinkedIn
          </h4>
        </div>

        <p>
          After completing the Minimum Viable Product (MVP), I shared the link
          with a few friends, including Joseph, to gather feedback. The
          responses were overwhelmingly positive; they loved the clean and
          concise design.
        </p>

        <p>
          On Friday, September 12, Joseph messaged me about a contract frontend
          design job worth €350.
        </p>

        <p>I had a call with the client, Martins, who is a UK citizen.</p>

        <p>
          At first, I struggled to understand him because of his accent, and
          Joseph had to help interpret for me.
        </p>

        <p>
          Martins wanted to see my previous projects; however, he was not
          impressed with my past work.
        </p>

        <p>He gave me a Figma file to design a landing page.</p>

        <div className="min-h-[200px]">
          <img
            src={figmaDesignFromMartins}
            alt="Figma Design from Martins"
            className="rounded-lg"
            title="Figma Design from Martins"
          />
          <h4
            title="Figma Design from Martins"
            className="text-neutral-500 text-xs text-center mt-2 mb-10 italic"
          >
            Figma Design from Martins
          </h4>
        </div>

        <p>I design it.</p>

        <div className="min-h-[200px]">
          <img
            src={iDesignMartinWork}
            alt="The Frontend Design I did."
            className="rounded-lg"
            title="The Frontend Design I did."
          />
          <h4
            title="The Frontend Design I did."
            className="text-neutral-500 text-xs text-center mt-2 mb-10 italic"
          >
            The Frontend Design I did.
          </h4>
        </div>

        <p>
          To put it, while I was writing this post. I got a message from Joseph
          (my friend) about the feedback from Martin (client in the UK).
        </p>

        <p>
          He sent me a PDF document containing all the errors in line heights,
          spacing, padding, and image format.
        </p>

        <p>Here is the post I made after the chat.</p>

        <div>
          <img
            src={messageAfterMartinWork}
            alt="Message After Martins Work"
            className="rounded-lg"
            title="Message After Martins Work"
          />
          <h4
            title="Message After Martins Work"
            className="text-neutral-500 text-xs text-center mt-2 mb-10 italic"
          >
            Message After Martins Work
          </h4>
        </div>

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
