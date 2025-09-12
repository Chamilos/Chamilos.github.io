import NavButton from "../NavButton";
import "./Navigation.css";
import { useState } from "react";

export default function Nav() {
  const currentPath = window.location.pathname;
  const [openState, setOpenState] = useState(false);
  const openOnClick = () => {
    setOpenState(!openState);
  };

  return (
    <menu
      id="nav"
      className="w-full h-20 fixed flex justify-center items-center top-0 p-4 bg-[#140524] z-50"
    >
      <h1 className="md:hidden mr-auto text-2xl font-bold bg-linear-30 from-[#ea00ff] to-[#03d5ff] bg-clip-text text-transparent">
        <a href="/">Portofolio</a>
      </h1>
      <button
        onClick={openOnClick}
        type="button"
        className="fixed right-16 p-4 md:hidden"
      >
        <span
          className={`navbar-toggler-icon origin-right mb-1 duration-300 ${
            openState ? "-rotate-45 duration-300" : "duration-500"
          }`}
        ></span>
        <span
          className={`navbar-toggler-icon my-2 opacity-0 duration-300 ${
            openState ? "opacity-0 duration-300" : "opacity-100 duration-500"
          }`}
        ></span>
        <span
          className={`navbar-toggler-icon origin-right mt-1 duration-300 ${
            openState ? "rotate-45 duration-300" : "duration-500"
          }`}
        ></span>
      </button>
      <div
        className={`absolute top-20 right-2 w-2/3 max-w-50 px-2 pb-4 md:hidden flex-col gap-3 rounded-lg rounded-t-none bg-[#140524] ${
          openState ? "flex" : "hidden"
        }`}
      >
        <NavButton isSelected={currentPath === "/"} to="/">
          Home
        </NavButton>
        <NavButton isSelected={currentPath === "/projects"} to="/projects">
          Projects
        </NavButton>
        <NavButton isSelected={currentPath === "/about"} to="/about">
          About
        </NavButton>
      </div>
      <div className="hidden md:flex flex-wrap my-auto md:justify-center gap-6 md:gap-20 lg:flex-nowrap">
        <NavButton isSelected={currentPath === "/"} to="/">
          Home
        </NavButton>
        <NavButton isSelected={currentPath === "/projects"} to="/projects">
          Projects
        </NavButton>
        <NavButton isSelected={currentPath === "/about"} to="/about">
          About
        </NavButton>
      </div>
    </menu>
  );
}
