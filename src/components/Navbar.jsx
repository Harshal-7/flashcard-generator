import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

function Navbar() {

    const [first, useFirst] = useState(true);
    const [second, useSecond] = useState(false);

    const onClickk = () => {
        useFirst(!useFirst);
        useSecond(!useSecond);
    }

    return (
        <div className='px-4 sm:px-20'>
            <ul className='flex gap-5'>
                <li className='p-2 '>
                    <NavLink to="/"
                        className={({ isActive }) =>
                            `${isActive ? "text-red-500 font-bold" : "text-black"} duration-75`
                        }
                    >
                        Create Flashcard

                    </NavLink>
                </li>
                <li className='p-2 '>
                    <NavLink to="/my-flashcards"
                        className={({ isActive }) => ` ${isActive ? 'text-red-500 font-bold' : 'text-black'} duration-75`}
                    >
                        My Flashcards
                    </NavLink>
                </li>
            </ul>
            <hr className="h-px my-2 border-0 bg-gray-900" />

        </div>
    )
}

export default Navbar


