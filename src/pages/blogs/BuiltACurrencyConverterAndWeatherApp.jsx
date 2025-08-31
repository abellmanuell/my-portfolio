import SocialMedias from "../../components/SocialMedias";
import Profile from "../../components/Profile";
import currencyConverter from "../../assets/currency_converter.png";
import weatherApp from "../../assets/weather_app.png";
import playstoreConsole from "../../assets/playstore_console.png";

export default function BuiltACurrencyConverterAndWeatherApp() {
  return (
    <section className="sm:w-2/6 m-auto px-2 py-10 sm:py-20 leading-8">
      <Profile
        title="Built a Currency Converter and Weather App."
        subtitle="Aug 31, 2025"
        hot_title="LinkedIn"
        hotlink="https://www.linkedin.com/in/abellmanuell/"
      />

      <article className="mt-6 space-y-6">
        <b className="block">Currency Converter App</b>

        <div className="min-h-[250px]">
          <img
            src={currencyConverter}
            alt="Currency Converter App"
            className="rounded-lg"
            title="Currency Converter App"
          />
          <h4
            title=" Currency Converter App"
            className="text-neutral-500 text-xs text-center mt-2 mb-10 italic"
          >
            Currency Converter App
          </h4>
        </div>

        <p>My very first Flutter app is a Currency Converter.</p>

        <p>I dedicated three weeks to learn Dart programming language.</p>

        <p>It was fast since I already have basic programming knowledge.</p>

        <p>
          Flutter Widgets are like ReactJS components, and understanding Dart
          will make Flutter Widgets easy-peasy.
        </p>

        <b className="block">Weather App</b>

        <div className="min-h-[250px]">
          <img
            src={weatherApp}
            alt="Weather App"
            className="rounded-lg"
            title="Weather App"
          />
          <h4
            title=" Weather App"
            className="text-neutral-500 text-xs text-center mt-2 mb-10 italic"
          >
            Weather App
          </h4>
        </div>

        <p>I&apos;m gradually becoming a Flutter engineer.</p>
        <p>
          After dirtied my hands on building the Currency Converter, the Weather
          App was next.
        </p>

        <p>
          Building the Weather App, I learnt how to query data from an external
          remote server.
        </p>

        <p>The challenge I faced while fetching data.</p>

        <p>
          I&apos;ve to switch to Starlink to access the Open Weather Map API.
        </p>

        <p>
          My Weather App won&apos;t work if I&apos;m using the Airtel Network.
        </p>

        <p>
          I&apos;ll be rolling out more sample Apps before officially kicking
          off Paau Market App.
        </p>

        <p>
          Dart is great, but I&apos;ve some little challenges with how Flutter
          defines widget properties.
        </p>

        <p>Seems like no consistency.</p>

        <p>
          A container has a shape property to define styles. Text will have a
          style property to define styles.
        </p>

        <p>
          Though I&apos;m still trying to figure out why the engineer wrote it
          that way.
        </p>

        <div className="min-h-[250px]">
          <img
            src={playstoreConsole}
            alt="Google Play Store Console"
            className="rounded-lg"
            title="Google Play Store Console"
          />
          <h4
            title=" Google Play Store Console"
            className="text-neutral-500 text-xs text-center mt-2 mb-10 italic"
          >
            Google Play Store Console
          </h4>
        </div>
        <b className="block">Get Google Play Console.</b>

        <p>Excited to share that I&apos;ve bought my Play Console.</p>

        <p>
          That is to say, you&apos;ll be able to download Paau Market App on the
          Play Store.
        </p>

        <p>Watch OUT for my next updates.</p>
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
