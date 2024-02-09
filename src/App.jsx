import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateFlashcard from './pages/CreateFlashcard'
import MyFlashcards from './pages/MyFlashcards'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      {/* Heading/Logo  */}
      <h1 className='text-5xl text-center p-5 text-blue-600 font-bold'>
        Flashcard Generator
      </h1>

      {/* Main section */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<CreateFlashcard />} />
          <Route path="/my-flashcards" element={<MyFlashcards />} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
