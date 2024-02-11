import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CreateFlashcard from "./pages/CreateFlashcard";
import MyFlashcards from "./pages/MyFlashcards";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FlashcardDetails from "./pages/FlashcardDetails";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="">
      {/* Heading/Logo  */}
      <h1 className="flex justify-center p-2 mt-4 mb-6">
        {/* <svg className='w-3 sm:w-4' viewBox="0 0 232 412" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_0_1)">
            <path fillRule="evenodd" clipRule="evenodd" d="M46.9887 101.468C34.8669 100.637 24.3663 109.79 23.5349 121.911L19.7031 177.78C18.8717 189.902 28.0244 200.402 40.1462 201.234L96.7327 205.115C108.854 205.946 119.355 196.794 120.186 184.672L124.018 128.803C124.849 116.681 135.35 107.529 147.472 108.36L202.623 112.143C214.745 112.974 225.245 103.821 226.077 91.6994L229.909 35.8307C230.74 23.7091 221.587 13.2082 209.466 12.3769L152.878 8.49583C140.757 7.66446 130.257 16.8174 129.425 28.939L125.593 84.8077C124.762 96.9292 114.261 106.082 102.14 105.251L46.9887 101.468Z" fill="#E40000" />
          </g>
          <g clipPath="url(#clip1_0_1)">
            <path fillRule="evenodd" clipRule="evenodd" d="M30.7081 296.547C18.6049 295.479 7.92717 304.424 6.85876 316.527L1.93452 372.31C0.866116 384.414 9.81157 395.091 21.9148 396.16L78.4145 401.147C90.5177 402.216 101.195 393.27 102.263 381.167L107.188 325.384C108.256 313.281 118.934 304.335 131.037 305.403L186.104 310.265C198.207 311.333 208.885 302.387 209.953 290.284L214.877 234.501C215.946 222.398 207 211.72 194.897 210.652L138.397 205.664C126.294 204.596 115.616 213.542 114.548 225.645L109.624 281.428C108.555 293.531 97.8777 302.476 85.7744 301.408L30.7081 296.547Z" fill="#E40000" />
          </g>
          <g clipPath="url(#clip2_0_1)">
            <path fillRule="evenodd" clipRule="evenodd" d="M116.824 126.91C116.968 114.76 107.235 104.795 95.0854 104.652L39.0893 103.991C26.9399 103.847 16.9746 113.58 16.8312 125.73L16.1619 182.445C16.0186 194.595 25.7514 204.559 37.9008 204.703L93.8969 205.364C106.046 205.507 115.779 215.473 115.636 227.622L114.983 282.899C114.84 295.048 124.573 305.014 136.722 305.157L192.718 305.818C204.868 305.961 214.833 296.228 214.976 284.079L215.646 227.363C215.789 215.214 206.056 205.249 193.907 205.105L137.911 204.444C125.762 204.301 116.029 194.336 116.172 182.186L116.824 126.91Z" fill="#E40000" />
          </g>
          <defs>
            <clipPath id="clip0_0_1">
              <rect width="200" height="200" fill="white" transform="translate(18.1978 199.729) rotate(-86.0765)" />
            </clipPath>
            <clipPath id="clip1_0_1">
              <rect width="200" height="200" fill="white" transform="translate(0 394.225) rotate(-84.9553)" />
            </clipPath>
            <clipPath id="clip2_0_1">
              <rect width="200" height="200" fill="white" transform="translate(17.0908 103.731) rotate(0.676109)" />
            </clipPath>
          </defs>
        </svg> */}

        <div className="self-center text-xl font-bold sm:text-4xl ml-1 head text-black">
          <span className="text-red-500 underline">F</span>lashcard Generator
        </div>
      </h1>

      {/* Main section */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<CreateFlashcard />} />
          <Route path="/my-flashcards" element={<MyFlashcards />} />
          <Route path="/my-flashcards/:id" element={<FlashcardDetails />} />
        </Routes>
      </BrowserRouter>

      <Analytics />
    </div>
  );
}

export default App;
