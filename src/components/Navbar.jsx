import React, { useState } from "react";
import profile from '../assets/profile.jpg'
import { Link } from "react-scroll";
import useTheme from "../context/themeContext";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import pdf from "../assets/skill/resume.pdf";

const Navbar = () => {
  const [open, isOpen] = useState(true);

  const { themeMode, lighttheme, darktheme } = useTheme();

  const handleTheme = () => {
    if (themeMode === "dark") {
      lighttheme();
    } else {
      darktheme();
    }
  };
  return (
    <div id="home">
      <nav
        id="nav"
        className="bg-white border-b dark:bg-gray-900 dark:border-gray-700  "
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={profile}
              className="h-12"
              alt="Logo"
              style={{ borderRadius: "50%", objectFit: "contain" }}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Yogesh.Me
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href={pdf} download={"resume.pdf"}>
              <button
                type="button"
                className="hidden sm:block text-[12px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-4 order-2 "
              >
                Download CV
              </button>
            </a>

            {themeMode === "light" ? (
              <CiLight size={30} className="mt-1 cursor-pointer order-1" onClick={handleTheme} />
            ) : (
              <CiDark
                size={30}
                className="mt-1 text-white cursor-pointer order-1"
                onClick={handleTheme}
              />
            )}

            {open ? (
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                  onClick={() => isOpen(!open)}
                >
                  <path
                    stroke="currentColor"
                    stroke-line-cap="round"
                  strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            ) : (
              <span
                onClick={() => isOpen(!open)}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                </svg>
              </span>
            )}
          </div>
          <div
            className={`${
              open ? " hidden" : ""
            } items-center justify-between   w-full md:flex md:w-auto md:order-1`}
            id="navbar-cta"
          >
            <ul className="   flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 cursor-pointer transition-all duration-300 ease-out">
              <li>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={20}
                  duration={600}
                  className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                  onClick={() => isOpen(!open)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={20}
                  duration={600}
                  onClick={() => isOpen(!open)}
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={20}
                  duration={800}
                  onClick={() => isOpen(!open)}
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="Portfolio"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={20}
                  duration={800}
                  onClick={() => isOpen(!open)}
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  activeclass="active"
                  to="contact"
                  smooth={true}
                  offset={20}
                  duration={800}
                  onClick={() => isOpen(!open)}
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;





