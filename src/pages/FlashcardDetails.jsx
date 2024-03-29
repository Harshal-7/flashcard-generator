import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function FlashcardDetails() {
  const { id } = useParams(); // Retrieve the flashcard ID from URL params
  const flashcard = useSelector((state) =>
    state.flashcards.find((card) => card.id === id)
  );
  const [selectedTerm, setSelectedTerm] = useState(null);

  if (!flashcard) {
    return (
      <div className="text-center text-2xl sm:text-3xl mt-10 sm:mt-72">
        <span className="text-red-500">Flashcards</span> not found!!
      </div>
    );
  }

  const handleTermClick = (termId) => {
    setSelectedTerm(termId);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Create a blob with flashcard content
    const flashcardContent = JSON.stringify(flashcard);
    const blob = new Blob([flashcardContent], { type: "application/json" });

    // Create a temporary anchor element
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "flashcard.json";

    // Trigger a click on the anchor element to initiate download
    document.body.appendChild(a);
    a.click();

    // Clean up
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const handleShare = () => {
    // Check if Web Share API is supported
    if (navigator.share) {
      navigator
        .share({
          title: "Flashcard Title",
          text: "Flashcard Description",
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Share failed:", error));
    } else {
      // Fallback for browsers that do not support Web Share API
      // Implement your custom share dialog here
      // console.log("Web Share API not supported");
      const shareText = `Check out this flashcard: ${window.location.href}`;
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(shareText)
          .then(() => alert("Link copied to clipboard"))
          .catch((error) => console.error("Copy failed:", error));
      } else {
        // If clipboard API is not supported, simply prompt the user to copy the link manually
        prompt("Copy this link:", window.location.href);
      }
    }
  };

  return (
    <div className="px-4 sm:px-56">
      <div className="flex flex-col gap-2 mt-10 text-black text-center">
        <h2 className="text-2xl sm:text-4xl font-bold">{flashcard.title}</h2>
        <p className=" text-sm sm:text-base mt-2 mb-10">{flashcard.desc}</p>
      </div>

      {/* Render terms and definitions */}
      <div className="flex flex-col sm:flex-row gap-5 items-center sm:justify-around text-black ">
        <div className="bg-white p-4 min-w-60 max-h-96 min-h-72 sm:min-h-96 overflow-auto rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
          <h3 className="text-xl mb-2 text-center">Flashcards</h3>
          <hr className="border-1 border-white mb-5" />
          {flashcard.terms.map((term) => (
            <div className="flex mt-4 px-2 text-xl" key={term.id}>
              <button onClick={() => handleTermClick(term.id)} className="">
                {term.term}
              </button>
            </div>
          ))}
        </div>

        {/* term defination here */}
        <div className="flex flex-col bg-white p-4 min-w-60 sm:w-3/6 min-h-96 rounded-xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
          {selectedTerm && (
            <div className="flex flex-col gap-4 py-2 min-h-80 justify-around items-center">
              <div className="text-xl sm:text-3xl overflow-auto p-2 w-52 sm:w-full text-center">
                {
                  flashcard.terms.find((term) => term.id === selectedTerm)
                    .definition
                }
              </div>
              <img
                src={
                  flashcard.terms.find((term) => term.id === selectedTerm).img
                }
                alt=""
                className=" w-40"
              />
            </div>
          )}
        </div>

        {/* share download print  */}
        <div className="flex flex-col gap-4 sm:gap-10 justify-center">
          <button
            onClick={handleShare}
            className=" sm:w-96 p-4 bg-red-500    text-white rounded-lg font-bold shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
          >
            {" "}
            Share{" "}
          </button>
          <button
            onClick={handleDownload}
            className=" sm:w-96 p-4 bg-red-500 text-white  rounded-lg font-bold shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
          >
            {" "}
            Download{" "}
          </button>
          <button
            onClick={handlePrint}
            className=" sm:*:w-96 p-4 bg-red-500  text-white rounded-lg font-bold shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
          >
            {" "}
            Print{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlashcardDetails;
