import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

function Navbar() {
  const [first, useFirst] = useState(true);
  const [second, useSecond] = useState(false);

  const onClickk = () => {
    useFirst(!useFirst);
    useSecond(!useSecond);
  };

  return (
    <div className="px-4 text-sm sm:text-base sm:px-56">
      <ul className="flex gap-2 sm:gap-5">
        <li className="p-2 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-red-500 font-bold underline underline-offset-8"
                  : "text-black"
              } duration-75`
            }
          >
            Create Flashcard
          </NavLink>
        </li>
        <li className="p-2 ">
          <NavLink
            to="/my-flashcards"
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "text-red-500 font-bold underline underline-offset-8"
                  : "text-black"
              } duration-75`
            }
          >
            My Flashcards
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
