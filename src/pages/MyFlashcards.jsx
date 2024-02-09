import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFlashcard, removeFlashcard } from '../features/flashcardsSlice'

function MyFlashcards() {
    const flashcards = useSelector(state => state.flashcards.flashcards);

    if (!flashcards || !flashcards.length) {
        return (
            <div className='text-center text-3xl mt-32 text-red-500 font-bold '>
                No cards available
            </div>
        );
    }

    return (
        <div className='w-full bg-slate-500'>
            <h2>Flashcards</h2>
            {/* Iterate over the flashcards array */}
            {flashcards.map(flashcard => (
                <div key={flashcard.id}>
                    <h3>{flashcard.title}</h3>
                    <p>Description: {flashcard.desc}</p>
                    <ul>
                        {/* Iterate over the terms array */}
                        {flashcard.terms.map(term => (
                            <li key={term.id}>
                                Term: {term.term}, Definition: {term.definition}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default MyFlashcards;

