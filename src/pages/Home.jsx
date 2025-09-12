import { CORE_CONCEPTS, EXAMPLES, EXTERNALLINKS } from "../data.jsx";
import Header from "../components/Header/Header.jsx";
import CoreConcept from "../components/CoreConcept.jsx";
import ExternalLinks from "../components/ExternalLinks.jsx";

export default function Home() {
  return (
    <>
      <Header
        name={"Chamilakis"}
        title={"Portofolio Page"}
        description={`Here you will find: My Personal Projects, my Education and
        Experience and how to Contact me.`}
      />
      <div className="flex justify-center mx-auto gap-10 mb-4">
        {EXTERNALLINKS.map((linkItems) => (
          <ExternalLinks key={linkItems.title} {...linkItems} />
        ))}
      </div>
      <section
        id="core-concepts"
        className="flex flex-col w-full mx-auto md:max-w-[80%] gap-6"
      >
        <div id="summary">
          <h2>Get to know me</h2>
          <p className="text-lg text-center font-semibold">
            Hi! I’m a web developer and problem solver who loves building
            projects that are both useful and fun. I enjoy exploring new ideas,
            creating smooth user experiences, and turning data into insights—all
            while learning something new every day.
          </p>
        </div>
        <div>
          <h2>My Core Strengths</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
