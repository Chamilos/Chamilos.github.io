import { useState } from "react";
import { EXAMPLES } from "../data.jsx";
import Header from "../components/Header/Header.jsx";
import TabButton from "../components/TabButton.jsx";
import LogoIcons from "../components/LogoIcons.jsx";

export default function Projects() {
  const [selectedTopic, setSelectedTopic] = useState("landingPages");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  function soloGridItem() {
    return EXAMPLES[selectedTopic].projects.length === 1 ? "!grid-cols-1" : "";
  }

  return (
    <>
      <Header
        name={"Chamilakis"}
        title={"Projects"}
        description={`Take a look at some of my favorite projects! From small experiments to
          full applications, each project shows how I solve problems, experiment
          with ideas, and bring code to life.`}
      />
      <section id="examples">
        <div className="flex justify-center mb-10">
          <LogoIcons used={true}></LogoIcons>
        </div>

        <menu className="flex flex-wrap justify-around">
          <TabButton
            isSelected={selectedTopic === "landingPages"}
            onSelect={() => {
              handleSelect("landingPages");
              soloGridItem();
            }}
          >
            Landing Page
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "liveProject"}
            onSelect={() => handleSelect("liveProject")}
          >
            Live Project
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "shopProducts"}
            onSelect={() => handleSelect("shopProducts")}
          >
            Shops & Products
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "miniProjects"}
            onSelect={() => handleSelect("miniProjects")}
          >
            Mini-Projects
          </TabButton>
        </menu>
        <div id="tab-content" className="w-fit mx-auto p-4 lg:p-6 mb-20">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 justify-items-center ${soloGridItem()}`}
          >
            {EXAMPLES[selectedTopic].projects.map((project, index) => (
              <div
                key={index}
                className="tab-content max-w-[370px] relative flex flex-col"
              >
                <a
                  className="absolute inset-0"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
                <h4 className="mb-4 text-2xl font-bold">{project.title}</h4>
                <div className="h-48 mx-auto my-auto">
                  <img
                    className="rounded-lg h-full object-cover"
                    src={project.img}
                    alt={project.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <h3>
            Languages that did not used on these projects but belongs to my
            skillset:
          </h3>
          <LogoIcons
            className="flex mt-4 justify-center"
            used={false}
          ></LogoIcons>
        </div>
      </section>
    </>
  );
}
