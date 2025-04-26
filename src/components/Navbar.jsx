import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-48 object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
  {navLinks.map((nav) => (
    <li key={nav.id} className="relative group">
      {nav.submenu ? (
        <>
          <span
            className={`${
              active === nav.title ? "text-white" : "text-secondary"
            } hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={() => setActive(nav.title)}
          >
            {nav.title}
          </span>
          <ul className="absolute top-8 left-0 bg-primary rounded-md shadow-lg p-2 hidden group-hover:block z-10">
            {nav.submenu.map((sub) => (
              <li key={sub.id}>
                <a
                  href={`#${sub.id}`}
                  className="block px-4 py-2 text-secondary hover:text-white hover:bg-[#2c2c3e] rounded-md text-sm"
                >
                  {sub.title}
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <a
          href={`#${nav.id}`}
          className={`${
            active === nav.title ? "text-white" : "text-secondary"
          } hover:text-white text-[18px] font-medium cursor-pointer`}
          onClick={() => setActive(nav.title)}
        >
          {nav.title}
        </a>
      )}
    </li>
  ))}

  {/* Resume + Icons */}
  <li className="flex items-center gap-4 ml-6">
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-primary px-4 py-1.5 rounded-lg font-semibold text-sm hover:bg-gray-200 transition"
    >
      View Resume
    </a>
    <a
      href="https://www.linkedin.com/in/areej-irshad-1044492b4/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-secondary hover:text-white text-xl"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a
      href="https://github.com/areejirshad"
      target="_blank"
      rel="noopener noreferrer"
      className="text-secondary hover:text-white text-xl"
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
  </li>
</ul>


        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
