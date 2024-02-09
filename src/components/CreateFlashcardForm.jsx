import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFlashcard } from '../features/flashcardsSlice'

function CreateFlashcardForm() {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [formFields, setFormFields] = useState([{ id: 1, term: "", definition: "" }]);
    const dispatch = useDispatch();

    const handleUpdateFlashcard = () => {
        const formData = {
            title: title,
            desc: desc,
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

    return (
        <div className='px-4 sm:px-16'>
            <form className="flex flex-col max-w-full px-4 sm:px-12 py-4 sm:py-8 mx-auto bg-white rounded-lg">
                {/* Input for Group Name */}
                <div className="mb-5 flex flex-col sm:flex-row sm:items-center">
                    <div className=' w-9/12 sm:w-6/12'>
                        <label htmlFor="text" className="block mb-2 font-medium text-gray-900 ">Enter Group Name</label>
                        <input
                            type="text"
                            id="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="write group name" required />
                    </div>
                    {/* Upload Image Button */}
                    <div>
                        <button className=' bg-red-500 text-white px-4 py-3 rounded-lg sm:ml-8 mt-8'> Upload Image </button>
                    </div>
                </div>
                {/* Textarea for Group Description */}
                <div className="mb-5">
                    <label htmlFor="description" className="block mb-2 font-medium text-gray-900">Enter Group Description</label>
                    <textarea
                        id="description"
                        rows="2"
                        value={desc}
                        onChange={e => setDesc(e.target.value)}
                        className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="write group description "></textarea>
                </div>
            </form>

            {/* Flashcard Forms */}
            {formFields.map((field, index) => (
                <div className='mt-2' key={field.id}>
                    <form className="max-w-full relative px-4 sm:px-12 flex flex-col sm:flex-row gap-4 sm:gap-8 py-4 sm:py-8 mb- mx-auto bg-white rounded-lg">
                        <div className='sm:mb-12 w-9 text-center text-xl bg-red-500 text-white md:w-fit px-3 py-1 sm:px-5 sm:py-2.5 rounded-full h-fit self-center'>
                            {field.id}
                        </div>
                        {/* Input for Term */}
                        <div className="sm:mb-12 sm:w-2/6">
                            <label htmlFor="text" className="block mb-2 font-medium text-gray-900 ">
                                Enter Term
                            </label>
                            <input
                                type="text"
                                value={field.term}
                                onChange={e => handleTermChange(index, e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="write term" required />
                        </div>
                        {/* Textarea for Definition */}
                        <div className="sm:mb-12 sm:w-3/6">
                            <label htmlFor="description" className="block mb-2 font-medium text-gray-900">
                                Enter Definition
                            </label>
                            <textarea
                                rows="2"
                                value={field.definition}
                                onChange={e => handleDefinitionChange(index, e.target.value)}
                                className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="write definition"></textarea>
                        </div>
                    </form>
                </div>
            ))}

            {/* Button to Add More Forms */}
            <div className='w-full flex justify-center mt-5'>
                <button onClick={addMoreForm} className='px-5 py-2 bg-red-500 text-white rounded-lg'>
                    Add More
                </button>
            </div>

            {/* Button to Save */}
            <div className='w-full flex justify-center mt-5'>
                <button onClick={handleUpdateFlashcard} className='px-5 py-2 bg-red-500 text-white rounded-lg'>
                    Save
                </button>
            </div>
        </div>
    )
}

export default CreateFlashcardForm;
