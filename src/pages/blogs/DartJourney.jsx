import SocialMedias from "../../components/SocialMedias";
import Profile from "../../components/Profile";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function DartJourney() {
  const dartCode = `
// Variable Declaration
int someValue = 10;
double someValue1 = 2.5;
String someString = "hello world";

// Function Definition
void printSomething() {
  print("hello world");
}

// Dart List
List<int> listOfNumbers = [10, 20, 30, 40, 50];
print(listOfNumbers);

// Records (Dart 3+ feature)
(var first, var second, var third) = ("value 1", "value 2", "...");
print((first, second, third));

// Set
Set<String> setSomething = {"set 1", "set 2", "set 3"};
print(setSomething);

// Map
Map<String, String> valueSomething = {
  "key": "value",
  "key1": "value 1",
};
print(valueSomething);

// Class Example
class Cookie {
  String shape;

  Cookie(this.shape);

  void baking() {
    print("Baking a $shape cookie");
  }
}

// Usage
void main() {
  printSomething();

  Cookie cookie = Cookie("round");
  cookie.baking();
}
  `;
  return (
    <section className="sm:w-2/6 m-auto px-2 py-10 sm:py-20 leading-8">
      <Profile
        title="Dart Journey"
        subtitle="Aug 24, 2025"
        hot_title="LinkedIn"
        hotlink="https://www.linkedin.com/in/abellmanuell/"
      />

      <article className="mt-6 space-y-6">
        <p>
          Functional programming and object-oriented programming concepts can be
          best understood by typed languages, or the Dart programming language.
        </p>

        <p>
          Dart is a programming language created by Google, and it is a Typed
          programming language.
        </p>

        <p>
          Dart is simple and has helped me understand the concept of Functional
          and Object-Oriented Programming languages.
        </p>

        <p>
          JavaScript has been my primary language for decades. Both in frontend
          and backend. It isn&apos;t quite long. I started using Typescript
          (.ts) in JavaScript.
        </p>

        <p>
          Learning Dart has opened my eyes to how awesome typed languages are
          👌.
        </p>

        <p>
          Dart is a simple and easy language for me to grasp, especially coming
          from the JavaScript ecosystem. Its syntax is similar, but the native
          typing differentiates it.
        </p>

        <b className="block">Dart built-in data types are:</b>

        <div>
          <ul>
            <li>- num (int & double)</li>
            <li>- String</li>
            <li>- bool - Boolean</li>
            <li>- List (similar to Array)</li>
            <li>- Record</li>
            <li>- Map</li>
            <li>- Set</li>
            <li>- Function</li>
            <li>- Class</li>
          </ul>
        </div>

        <b className="block">Variable Declaration</b>
        <div>
          <SyntaxHighlighter language="dart" style={dracula}>
            {dartCode}
          </SyntaxHighlighter>
        </div>

        <b className="block">Dart and Flutter.</b>

        <p>Dart is a standard programming language for Flutter.</p>

        <b className="block">Why Am I Learning Dart.</b>

        <p>
          I&#39;m learning Dart to create a secure marketplace for students to
          buy and sell without the fear of scams.
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
