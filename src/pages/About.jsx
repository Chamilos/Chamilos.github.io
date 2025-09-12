import Header from "../components/Header/Header";
import cvLeft from "../assets/cvLeft.png";
import cvRight from "../assets/cvRight.png";
import ExternalLinks from "../components/ExternalLinks";
import { EXTERNALLINKS } from "../data";

export default function About() {
  return (
    <>
      <Header
        name={"Resume"}
        title={"Chamilakis Emmanouil"}
        description={`My Goals and my Achievments, my Education and
            Experience and Contact info.`}
      />
      <div className="flex justify-center mx-auto gap-10 mb-4">
        {EXTERNALLINKS.map((linkItems) => (
          <ExternalLinks key={linkItems.title} {...linkItems} />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
        <div id="left">
          <img className="rounded-xl" src={cvLeft} alt="CV first page" />
        </div>
        <div id="right">
          <img className="rounded-xl" src={cvRight} alt="CV second page" />
        </div>
      </div>
    </>
  );
}
