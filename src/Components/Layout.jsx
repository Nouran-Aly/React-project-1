import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      {/* navbar */}
      <nav className=" border-gray-200 dark:bg-gray-900 bg-[#2C3E50] text-white py-3 transition-all ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to=""
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="text-3xl font-bold uppercase">
              Start Framework
            </span>
          </Link>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-bold text-white uppercase flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <li>
                <NavLink
                  to="about"
                  className="block rounded py-3 px-2 "
                  aria-current="page"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="portfolio"
                  className="block rounded md:border-0 py-3 px-2  "
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contact"
                  className="block  rounded md:border-0 py-3 px-2  "
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />

      {/* footer */}
      <footer className="bottom-0 left-0 z-20 w-full">
        <div className="flex flex-wrap justify-between items-start px-10 py-10 md:py-24 gap-10 md:gap-0 bg-[#2C3E50]  ">
          <div className="w-full md:w-1/3">
            <div className="flex flex-col text-center gap-4 text-white">
              <p className=" uppercase text-xl font-bold">Location</p>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243 </p>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="flex flex-col text-center gap-4">
              <p className="text-white uppercase text-xl font-bold">
                AROUND THE WEB
              </p>
              <div className="social-media-icons flex justify-center gap-2">
                <div className="icon grid hover:bg-white transition-all duration-75">
                  <i className="fa-brands fa-facebook-f m-auto "></i>
                </div>
                <div className="icon grid hover:bg-white transition-all duration-75">
                  <i className="fa-brands fa-twitter m-auto"></i>
                </div>
                <div className="icon grid hover:bg-white transition-all duration-75">
                  <i className="fa-brands fa-linkedin-in m-auto"></i>
                </div>
                <div className="icon grid hover:bg-white transition-all duration-75">
                  <i className="fa-solid fa-globe m-auto"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="flex flex-col text-center gap-4 text-white">
              <p className=" uppercase text-xl font-bold">ABOUT FREELANCER</p>
              <p className="text-center">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>

        <div className="copy-rights w-full bg-[#1A252F] text-center text-white py-6">
          Copyright &copy; Your Website 2021
        </div>
      </footer>
    </>
  );
}
