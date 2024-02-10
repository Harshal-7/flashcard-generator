import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFlashcard } from '../features/flashcardsSlice'
import { v4 as uuidv4 } from "uuid";

function CreateFlashcardForm() {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState(null);
    const [formFields, setFormFields] = useState([{ id: 1, term: "", definition: "" }]);
    const dispatch = useDispatch();

    const handleUpdateFlashcard = () => {
        const formData = {
            id: uuidv4(),
            title: title,
            desc: desc,
            img: img,
            terms: formFields
        };
        dispatch(addFlashcard(formData));
    }

    const addMoreForm = () => {
        setFormFields([...formFields, { id: formFields.length + 1, term: "", definition: "" }]);
    };

    const handleTermChange = (index, value) => {
        const newFormFields = [...formFields];
        newFormFields[index].term = value;
        setFormFields(newFormFields);
    }

    const handleDefinitionChange = (index, value) => {
        const newFormFields = [...formFields];
        newFormFields[index].definition = value;
        setFormFields(newFormFields);
    }

    const handleImgChange = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => setImg(reader.result); // Store Base64-encoded image data
        reader.readAsDataURL(file);
    }

    return (
        <div className='px-4 text-sm sm:text-base sm:px-52'>
            <form className="flex flex-col max-w-full px-4 sm:px-12 py-4 sm:py-4 mx-auto rounded-lg bg-[#303030]">
                {/* Input for Group Name */}
                <div className="mb-5 flex items-end">
                    <div className=' w-6/12 sm:w-6/12'>
                        <label htmlFor="text" className="block mb-2 font-medium text-white ">Group Name</label>
                        <input
                            type="text"
                            id="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            className="bg-[#303030] border border-gray-500 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="write group name" required />
                    </div>
                    {/* Upload Image Button */}
                    {/* <div>
                            <input
                                type="file"
                                name="addimg"
                                id="addimg"
                                className=' bg-red-500 text-white py-3 px-2 text-xs sm:text-sm sm:px-4 sm:py-3 rounded-lg ml-8 ' />
                        </div> */}
                </div>
                {/* Textarea for Group Description */}
                <div className="mb-2">
                    <label htmlFor="description" className="block mb-2 font-medium text-white">Group Description</label>
                    <textarea
                        id="description"
                        rows="2"
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                        className="block p-2.5 w-full text-white bg-[#303030] rounded-lg border border-gray-500 focus:ring-blue-500 focus:border-blue-500" placeholder="write group description "></textarea>
                </div>
            </form>

            {/* Flashcard Forms */}
            {formFields.map((field, index) => (
                <div className='mt-2' key={field.id}>
                    <form className="max-w-full relative px-4 sm:px-12 flex flex-col sm:flex-row gap-4 sm:gap-8 py-4 sm:py-8 mx-auto bg-[#303030] rounded-lg">
                        <div className='sm:mb-5 w-9 text-center text-xl bg-red-500 text-white md:w-fit px-3 py-1 sm:px-5 sm:py-2.5 rounded-full h-fit self-center'>
                            {field.id}
                        </div>
                        {/* Input for Term */}
                        <div className="sm:mb-5 sm:w-2/6">
                            <label htmlFor="text" className="block mb-2 font-medium text-white ">
                                Enter Term
                            </label>
                            <input
                                type="text"
                                value={field.term}
                                onChange={e => handleTermChange(index, e.target.value)}
                                className="bg-[#303030] border border-gray-500 text-white rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="write term" required />
                        </div>
                        {/* Textarea for Definition */}
                        <div className="sm:mb-5 sm:w-3/6">
                            <label htmlFor="description" className="block mb-2 font-medium text-white">
                                Enter Definition
                            </label>
                            <textarea
                                rows="2"
                                value={field.definition}
                                onChange={e => handleDefinitionChange(index, e.target.value)}
                                className="block p-2.5 w-full text-white bg-[#303030] rounded-lg border border-gray-500 focus:ring-blue-500 focus:border-blue-500" placeholder="write definition"></textarea>
                        </div>

                        <div className='self-center'>
                            <input
                                type="file"
                                name="addimg"
                                id="addimg"
                                onChange={handleImgChange}
                                className='w-60 bg-red-500 text-white' />
                        </div>

                    </form>

                </div>
            ))}

            {/* Button to Add More Forms */}
            <div className='w-full flex justify-center mt-5'>
                <button onClick={addMoreForm} className='px-5 py-2 border border-red-500 text-red-500 rounded-lg hover:text-white hover:bg-red-500'>
                    Add More
                </button>
            </div>

            {/* Button to Save */}
            <div className='w-full flex justify-center mt-5'>
                <button onClick={handleUpdateFlashcard} className='px-5 py-2 hover:bg-red-500 border border-red-500 hover:text-white rounded-lg font-bold bg-[#1f1f1f] text-red-500'>
                    SAVE
                </button>
            </div>
        </div>
    )
}

export default CreateFlashcardForm;
