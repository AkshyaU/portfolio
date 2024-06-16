import { useState } from "react";
import Devicon from "../Images/devicon.png";
import Menu from "../Images/menu.png";
import Close from "../Images/cancel.png";
export default function HeaderBar() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="top-menu min-h-16 w-full flex items-center justify-between sticky top-0 absolute z-10 bg-black">
      <section className="flex items-center justify-center w-1/4">
        <a className="flex items-center justify-center" href="/" target="_self">
          <img className="w-10 h-2/4 mr-2" src={Devicon} alt="Icon"></img>
          <h3 className="w-10 h-2/4 text-center">Developer</h3>
        </a>
      </section>
      <section className="w-2/5 flex items-center justify-evenly md:flex hidden">
        <a
          className="pt-5 pb-5 border-transparent	border-b-2 border-solid hover:border-white font-semibold hover:text-gray-300"
          href="/"
          target="_self"
        >
          Home
        </a>
        <a
          className="pt-5 pb-5 border-transparent	border-b-2 border-solid hover:border-white font-semibold hover:text-gray-300"
          href="/"
          target="_self"
        >
          About
        </a>
        <a
          className="pt-5 pb-5 border-transparent	border-b-2 border-solid hover:border-white font-semibold hover:text-gray-300"
          href="#skill"
          target="_self"
        >
          Skills
        </a>
        <a
          className="pt-5 pb-5 border-transparent	border-b-2 border-solid hover:border-white font-semibold hover:text-gray-300"
          href="/"
          target="_self"
        >
          Project
        </a>
        <a
          className="pt-5 pb-5 border-transparent	border-b-2 border-solid hover:border-white font-semibold hover:text-gray-300"
          href="#contact"
          target="_self"
        >
          Contact
        </a>
      </section>
      <div className="relative block md:hidden pr-4">
        <button
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <img src={!menu ? Menu : Close} width={30} alt="icon"></img>
        </button>
        <section
          className={`${
            menu ? "flex" : "hidden"
          } items-center justify-evenly flex-col absolute top-8 right-10 bg-gray-950 pt-2 pb-2 rounded`}
        >
          <a
            className="font-semibold w-full h-full pt-2 pb-2 pl-8 pr-8"
            href="/"
            target="_self"
          >
            Home
          </a>
          <a
            className="font-semibold w-full h-full pt-2 pb-2 pl-8 pr-8"
            href="/"
            target="_self"
          >
            About
          </a>
          <a
            className="font-semibold w-full h-full pt-2 pb-2 pl-8 pr-8"
            href="#skill"
            target="_self"
          >
            Skills
          </a>
          <a
            className="font-semibold w-full  h-full pt-2 pb-2 pl-8 pr-8"
            href="/"
            target="_self"
          >
            Project
          </a>
          <a
            className=" font-semibold w-full  h-full pt-2 pb-2 pl-8 pr-8"
            href="#contact"
            target="_self"
          >
            Contact
          </a>
        </section>
      </div>
    </div>
  );
}