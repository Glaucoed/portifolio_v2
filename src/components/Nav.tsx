"use client";
import React, { useState } from "react";
import { FaDev } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-gray-100 border-gray-200 dark:dark:bg-escuro fixed w-full z-50"
      style={{boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"}}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          target="_blank"
          href="https://github.com/Glaucoed"
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <FaDev className="dark:text-dourado text-escuro" size={30} />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-escuro dark:text-dourado">
            Glaucoed
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <IoSearch size={20} />
          </button>
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <IoSearch className="text-gray-500" size={20} />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-dourado focus:border-dourado dark:border-gray-600 dark:placeholder-gray-400 dark:text-escuro dark:focus:ring-dourado dark:focus:border-dourado"
              placeholder="Pesquisar..."
            />
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <RxHamburgerMenu size={30} />
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            !isMenuOpen && "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-search"
        >
          <div className="relative mt-3 md:hidden">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <IoSearch className="text-gray-500" size={20} />
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-dourado focus:border-dourado dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-dourado dark:focus:border-dourado"
              placeholder="Pesquisar..."
            />
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-200 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-100 dark:bg-zinc-800 md:dark:dark:bg-escuro dark:border-zinc-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 hover:text-white rounded hover:bg-dourado  md:hover:bg-transparent md:hover:text-dourado md:p-0 md:dark:hover:text-dourado dark:text-white dark:hover:bg-dourado dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 hover:text-white rounded hover:bg-dourado  md:hover:bg-transparent md:hover:text-dourado md:p-0 md:dark:hover:text-dourado dark:text-white dark:hover:bg-dourado dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Sobre mim
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 hover:text-white rounded hover:bg-dourado  md:hover:bg-transparent md:hover:text-dourado md:p-0 md:dark:hover:text-dourado dark:text-white dark:hover:bg-dourado dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 hover:text-white rounded hover:bg-dourado  md:hover:bg-transparent md:hover:text-dourado md:p-0 md:dark:hover:text-dourado dark:text-white dark:hover:bg-dourado dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
