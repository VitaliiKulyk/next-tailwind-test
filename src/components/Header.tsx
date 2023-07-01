"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const toogleMenu = () => {};

  useEffect(() => {
    //need to be refactored to a normal component. out of time for test.
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");

    if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
        burger[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    // close
    const close = document.querySelectorAll(".navbar-close");
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    if (close.length) {
      for (var i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    if (backdrop.length) {
      for (var i = 0; i < backdrop.length; i++) {
        backdrop[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }
  }, []);

  return (
    <div className="w-full flex py-2 items-center">
      <img className="tile-icon ml-8 mr-2" src="/icons/lorem.svg" />
      <p>Lorem</p>

      <button className="navbar-burger flex items-center text-blue-600 p-3 ml-auto">
        <img
          className="accordeon-minus-icon mx-4"
          src="/icons/menu-05.svg"
          onClick={toogleMenu}
        />
      </button>
      <div className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full py-6 px-6 bg-black overflow-y-auto">
          <div className="flex items-center mb-8">
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <Link
                  href="/"
                  className="block p-4 text-base uppercase font-semibold text-gray-400 hover:text-teal-600 rounded"
                >
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/contacts"
                  className="block p-4 text-base uppercase font-semibold text-gray-400 hover:text-teal-600 rounded"
                >
                  Contacts
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href="/services"
                  className="block p-4 text-base uppercase font-semibold text-gray-400 hover:text-teal-600 rounded"
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
