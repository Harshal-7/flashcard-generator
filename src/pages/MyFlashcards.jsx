import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addFlashcard, removeFlashcard } from '../features/flashcardsSlice'
import { NavLink } from 'react-router-dom';

function MyFlashcards() {
    const flashcards = useSelector(state => state.flashcards);
    const [openFlashcardId, setOpenFlashcardId] = useState(null);
    const dispatch = useDispatch()


    if (!flashcards || flashcards.length == 0) {
        return (
            <div className='text-center text-5xl mt-32 text-red-500 font-bold '>
                No card available!
                <p className='text-xl mt-5 text-white font-light'>go to <NavLink to='/' className='underline text-red-500'>create flashcards</NavLink> to create new flashcards</p>
            </div>
        );
    }

    return (
        <div className='flex justify-center w-full p-2 mb-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-5'>
                {flashcards.map(flashcard => (
                    <div className='relative flex flex-col gap-2 bg-[#fefcfb] p-5 rounded-lg max-w-96' key={flashcard.id}>
                        <h2 className='text-3xl mt-10 text-center'>{flashcard.title}</h2>
                        <p className='my-5 text-center'>{flashcard.desc}</p>
                        <button className='px-6 py-2 my-4 w-52 self-center border-2 border-red-500 rounded-lg'>
                            <NavLink to={`/my-flashcards/${flashcard.id}`} key={flashcard.id}>
                                View Details
                            </NavLink>
                        </button>

                        <button onClick={() => dispatch(removeFlashcard(flashcard.id))} className='absolute right-3 top-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" viewBox="0 0 100 100">
                                <path fill="#de333b" d="M73.771,20.2c-8.015-8.106-18.327-10.62-28.665-9.063C33.721,11.544,23.077,17.646,17.03,27.51	c-6.745,11.003-6.653,26.632-0.376,37.86c6.57,11.752,21.886,18.441,35.099,16.927c13.927-1.596,25.252-11.19,29.664-24.392	C85.537,45.575,83.104,29.638,73.771,20.2z"></path><path d="M31.363,18.026c0,0-0.626,0.392-1.811,1.132c-0.298,0.187-0.63,0.396-0.997,0.626c-0.367,0.231-0.72,0.549-1.13,0.859	c-0.793,0.65-1.786,1.322-2.709,2.294c-0.481,0.467-0.989,0.96-1.523,1.478c-0.506,0.544-0.991,1.157-1.524,1.778	c-0.264,0.313-0.533,0.633-0.808,0.959c-0.262,0.336-0.495,0.704-0.752,1.066c-0.491,0.739-1.058,1.474-1.541,2.299	c-2.003,3.261-3.741,7.34-4.764,12.087c-1.007,4.738-1.243,10.188-0.066,15.845c0.184,0.697,0.37,1.4,0.557,2.109	c0.204,0.704,0.337,1.439,0.635,2.126c0.266,0.698,0.533,1.402,0.803,2.111c0.143,0.351,0.256,0.718,0.425,1.061l0.52,1.027	c1.269,2.798,3.122,5.51,5.362,7.896c4.497,4.791,10.581,8.429,17.41,10.402c3.417,0.982,7.034,1.545,10.736,1.546	c3.719-0.001,7.433-0.601,11.058-1.681c7.26-2.148,13.69-6.464,18.192-12.044c2.256-2.784,4.03-5.874,5.278-9.079	c1.253-3.205,1.994-6.493,2.347-9.727C87.757,47.721,86.9,41.46,84.9,36.059c-1.001-2.699-2.226-5.217-3.724-7.436	c-1.494-2.214-3.179-4.18-4.935-5.846c-1.772-1.661-3.605-3.078-5.427-4.275c-1.825-1.198-3.672-2.115-5.424-2.887	c-3.545-1.473-6.795-2.171-9.459-2.435c-2.671-0.266-4.749-0.117-6.144-0.006c-1.385,0.187-2.117,0.285-2.117,0.285	s0.736-0.048,2.127-0.139c1.394-0.018,3.46-0.031,6.065,0.388c2.599,0.416,5.729,1.283,9.082,2.889	c1.656,0.839,3.39,1.812,5.088,3.05c1.696,1.237,3.387,2.678,5.01,4.341c1.617,1.681,3.104,3.581,4.427,5.719	c1.322,2.139,2.379,4.55,3.228,7.114c1.697,5.131,2.31,11.03,1.508,17.03c-0.785,5.995-3.095,12.09-7.292,17.08	c-4.149,4.999-10.007,8.883-16.656,10.851c-3.316,0.989-6.744,1.552-10.083,1.573c-3.357,0.023-6.683-0.455-9.842-1.316	c-6.319-1.729-12.004-4.984-16.214-9.25c-2.107-2.141-3.828-4.495-5.1-7.085l-0.516-0.94c-0.168-0.314-0.281-0.652-0.425-0.974	c-0.273-0.652-0.544-1.3-0.813-1.942c-0.303-0.631-0.444-1.313-0.659-1.965c-0.199-0.657-0.397-1.309-0.594-1.956	c-1.292-5.26-1.29-10.43-0.53-15.004c0.773-4.581,2.248-8.602,4.026-11.869c0.426-0.827,0.939-1.567,1.377-2.314	c0.231-0.366,0.438-0.74,0.675-1.082c0.25-0.333,0.495-0.659,0.735-0.978c0.486-0.634,0.926-1.264,1.391-1.827	c0.493-0.539,0.962-1.052,1.407-1.538c0.852-1.015,1.785-1.732,2.531-2.427c0.386-0.332,0.717-0.672,1.065-0.924	c0.348-0.252,0.664-0.48,0.947-0.685C30.766,18.459,31.363,18.026,31.363,18.026z"></path><path fill="#f2f2f2" d="M67.149,58.049c-2.323-3.995-5.326-7.24-8.645-10.306c3.043-3.328,5.659-7.007,6.782-11.296	c0.821-3.137-1.565-5.097-4.087-5.243c-1.323-1.034-3.163-1.378-5.007-0.242c-3.191,1.966-5.796,4.625-8.2,7.511	c-2.389-2.049-4.825-4.037-7.377-5.843c-1.875-1.327-3.969-1.042-5.5-0.01c-0.813,0.133-1.623,0.484-2.363,1.122	c-5.884,5.079,2.367,12.042,6.756,15.366c-0.476,0.536-0.959,1.064-1.457,1.573c-3.282,3.353-11.167,12.386-2.408,14.991	c3.156,0.939,5.916-0.483,8.071-2.713c1.889-1.954,3.605-3.966,5.436-5.925c4.028,3.377,8.235,6.476,13.289,7.869	C66.419,65.999,68.987,61.21,67.149,58.049z"></path>
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default MyFlashcards;

// old
// {flashcards.map(flashcard => (
//     <div key={flashcard.id}>
//         <h3>{flashcard.title}</h3>
//         <p>Description: {flashcard.desc}</p>
//         <ul>
//             {/* Iterate over the terms array */}
//             {flashcard.terms.map(term => (
//                 <li key={term.id}>
//                     Term: {term.term}, Definition: {term.definition}
//                 </li>
//             ))}
//         </ul>
//     </div>
// ))}


// new using grid cards
// <div className='flex  justify-center w-full bg-slate-500 p-2'>
//     <div className='flex flex-col gap-5 mt-5 bg-white px-10 py-5 rounded-lg'>
//         {flashcards.map(flashcard => (
//             <div className='flex flex-col justify-center items-center' key={flashcard.id}>
//                 <h2 className='text-3xl mt-2'>{flashcard.title}</h2>
//                 <p className='my-5'>{flashcard.desc}</p>
//                 <button className='px-6 py-2 border-2 border-red-500 rounded-lg'>
//                     <NavLink to={`/my-flashcards/${flashcard.id}`} key={flashcard.id}>
//                         View Details
//                     </NavLink>
//                 </button>
//             </div>
//         ))}
//     </div>
// </div>