import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function FlashcardDetails() {
    const { id } = useParams(); // Retrieve the flashcard ID from URL params
    const flashcard = useSelector(state => state.flashcards.find(card => card.id === id));
    const [selectedTerm, setSelectedTerm] = useState(null);

    if (!flashcard) {
        return <div>Flashcard not found</div>; // Handle case where flashcard is not found
    }

    const handleTermClick = (termId) => {
        setSelectedTerm(termId);
    }

    const handlePrint = () => {
        window.print();
    }

    const handleDownload = () => {
        // Create a blob with flashcard content
        const flashcardContent = JSON.stringify(flashcard);
        const blob = new Blob([flashcardContent], { type: 'application/json' });

        // Create a temporary anchor element
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'flashcard.json';

        // Trigger a click on the anchor element to initiate download
        document.body.appendChild(a);
        a.click();

        // Clean up
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }

    const handleShare = () => {
        // Check if Web Share API is supported
        if (navigator.share) {
            navigator.share({
                title: 'Flashcard Title',
                text: 'Flashcard Description',
                url: window.location.href
            })
                .then(() => console.log('Shared successfully'))
                .catch((error) => console.error('Share failed:', error));
        } else {
            // Fallback for browsers that do not support Web Share API
            // Implement your custom share dialog here
            console.log('Web Share API not supported');
        }
    }

    return (
        <div className='px-4 sm:px-56'>
            <div className='flex flex-col gap-2 mt-10 text-white text-center'>
                <h2 className='text-2xl sm:text-4xl font-bold'>{flashcard.title}</h2>
                <p className=' text-sm sm:text-base mt-2 mb-10'>{flashcard.desc}</p>
            </div>

            {/* Render terms and definitions */}
            <div className='flex flex-col sm:flex-row gap-5 items-center sm:justify-around text-white'>
                <div className='bg-[#303030] p-4 min-w-60 max-h-96 min-h-72 sm:min-h-96 overflow-auto rounded-xl'>
                    <h3 className='text-xl mb-2 text-center'>Flashcards</h3>
                    <hr className='border-1 border-white mb-5' />
                    {flashcard.terms.map(term => (
                        <div className='flex mt-4 px-2 text-xl' key={term.id}>
                            <button onClick={() => handleTermClick(term.id)} className=''>{term.term}</button>
                        </div>
                    ))}
                </div>

                {/* term defination here */}
                <div className='flex flex-col bg-[#303030] p-4 min-w-60 sm:w-3/6 min-h-72 rounded-xl'>
                    {selectedTerm && (
                        <div className='flex mt-4 justify-center items-center pt-20'>
                            <button className='text-3xl sm:text-5xl'>
                                {flashcard.terms.find(term => term.id === selectedTerm).definition}
                            </button>
                        </div>
                    )}
                </div>

                <div className='flex flex-col gap-4 sm:gap-10 justify-center'>
                    <button onClick={handleShare} className=' sm:w-96 p-4 bg-red-500    text-white rounded-lg font-bold'> Share </button>
                    <button onClick={handleDownload} className=' sm:w-96 p-4 bg-red-500 text-white  rounded-lg font-bold'> Download </button>
                    <button onClick={handlePrint} className=' sm:*:w-96 p-4 bg-red-500  text-white rounded-lg font-bold'> Print </button>

                </div>
            </div>

        </div>
    );
}

export default FlashcardDetails
