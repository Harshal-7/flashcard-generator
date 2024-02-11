import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFlashcard } from "../features/flashcardsSlice";
import { v4 as uuidv4 } from "uuid";
import done from "../assets/done.png";

function CreateFlashcardForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const [popup, setPopup] = useState(false);
  const [formFields, setFormFields] = useState([
    { id: 1, term: "", definition: "" },
  ]);
  const dispatch = useDispatch();

  const handleUpdateFlashcard = () => {
    const formData = {
      id: uuidv4(),
      title: title,
      desc: desc,
      img: img,
      terms: formFields,
    };
    dispatch(addFlashcard(formData));
    setPopup(true);

    setTimeout(() => {
      setPopup(false);
    }, 1400);
  };

  const addMoreForm = () => {
    setFormFields([
      ...formFields,
      { id: formFields.length + 1, term: "", definition: "", img: "" },
    ]);
  };

  const handleTermChange = (index, value) => {
    const newFormFields = [...formFields];
    newFormFields[index].term = value;
    setFormFields(newFormFields);
  };

  const handleDefinitionChange = (index, value) => {
    const newFormFields = [...formFields];
    newFormFields[index].definition = value;
    setFormFields(newFormFields);
  };

  const handleImgChange = (index, value) => {
    const { files } = value;
    const localImageUrl = window.URL.createObjectURL(files[0]);
    const newFormFields = [...formFields];
    newFormFields[index].img = localImageUrl;
    setFormFields(newFormFields);
  };
  const handleMainImgChange = (e) => {
    const { files } = e.target;
    const localImageUrl = window.URL.createObjectURL(files[0]);
    setImg(localImageUrl);
  };

  return (
    <div className="px-4 text-sm sm:text-base sm:px-52">
      <form className="flex flex-col max-w-full px-2 sm:px-12 py-4 sm:py-4 mx-auto rounded-lg bg-white">
        {/* Input for Group Name */}
        <div className="mb-5 flex items-end justify-between">
          <div className=" w-7/12 sm:w-6/12">
            <label
              htmlFor="text"
              className="block mb-2 font-medium text-black "
            >
              Group Name
            </label>
            <input
              type="text"
              id="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-white border border-gray-500 text-black rounded-lg block w-full p-2.5 !outline-none"
              placeholder="write group name"
              required
            />
          </div>
          {/* Upload Image Button */}
          <div className="self-end mb-3">
            <label
              onChange={handleMainImgChange}
              className="px-3 py-2 w-32 text-white rounded-xl bg-red-500 leading-tight shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] !outline-none"
            >
              Add Image
              <input
                type="file"
                name="mainImg"
                id="mainImg"
                onChange={handleMainImgChange}
                className="hidden"
              />
            </label>
          </div>
        </div>
        {/* Textarea for Group Description */}
        <div className="mb-2">
          <label
            htmlFor="description"
            className="block mb-2 font-medium text-black"
          >
            Group Description
          </label>
          <textarea
            id="description"
            rows="2"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="block p-2.5 w-full text-black bg-white rounded-lg border border-gray-500 !outline-none"
            placeholder="write group description "
          ></textarea>
        </div>
      </form>

      {/* Flashcard Forms */}
      {formFields.map((field, index) => (
        <div className="mt-2" key={field.id}>
          <form className="max-w-full relative px-4 sm:px-12 flex flex-col sm:flex-row gap-4 sm:gap-8 py-4 sm:py-8 mx-auto bg-white rounded-lg">
            <div className="sm:mb-5 w-9 text-center text-xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-red-500 text-white md:w-fit px-3 py-1 sm:px-5 sm:py-2.5 rounded-full h-fit self-center">
              {field.id}
            </div>
            {/* Input for Term */}
            <div className="sm:mb-5 sm:w-2/6">
              <label
                htmlFor="text"
                className="block mb-2 font-medium text-black "
              >
                Enter Term
              </label>
              <input
                type="text"
                value={field.term}
                onChange={(e) => handleTermChange(index, e.target.value)}
                className="bg-white border border-gray-500 text-black rounded-lg block w-full p-2.5 !outline-none"
                placeholder="write term"
                required
              />
            </div>
            {/* Textarea for Definition */}
            <div className="sm:mb-5 sm:w-3/6">
              <label
                htmlFor="description"
                className="block mb-2 font-medium text-black"
              >
                Enter Definition
              </label>
              <textarea
                rows="2"
                value={field.definition}
                onChange={(e) => handleDefinitionChange(index, e.target.value)}
                className="block p-2.5 w-11/12 text-black bg-white rounded-lg border border-gray-500 !outline-none"
                placeholder="write definition"
              ></textarea>
            </div>

            {/* Add Image for each card detail  */}
            <div className="self-center">
              <label className=" inline-block px-3 py-2 w-28 text-white rounded-xl transform transition-all duration-500 hover:scale-105 bg-red-500 text-center shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                Add Image
                <input
                  type="file"
                  name="img"
                  id="img"
                  onChange={(e) => handleImgChange(index, e.target)}
                  className="hidden"
                />
              </label>
            </div>
          </form>
        </div>
      ))}

      {/* Button to Add More Forms */}
      <div className="w-full flex justify-center mt-5">
        <button
          onClick={addMoreForm}
          className="px-5 py-2 border border-red-500 text-red-500 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]
                  hover:text-black hover:bg-red-500 rounded-lg transform transition-all duration-500 hover:scale-105"
        >
          Add More
        </button>
      </div>

      {/* Button to Save */}
      <div className="w-full flex justify-center mt-5">
        <button
          onClick={handleUpdateFlashcard}
          className="px-5 py-2 hover:bg-red-500 border border-red-500 hover:text-black rounded-lg bg-white
           text-red-500 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]
           transform transition-all duration-500 hover:scale-105"
        >
          SAVE
        </button>
      </div>

      {popup && (
        <div
          className=" fixed top-3 left-10 sm:top-[80px] sm:left-[800px] w-60 sm:w-80 border border-green-600 flex justify-around
             gap-2 sm:gap-5 bg-white px-5 py-1 rounded-md shadow-[5px_5px_0px_0px_rgba(22,163,74)]
        "
        >
          <p className="text-black text-xs sm:text-base">
            Flashcard created successfully
          </p>
          <img src={done} alt="" className=" w-4 sm:w-6" />
        </div>
      )}
    </div>
  );
}

export default CreateFlashcardForm;
