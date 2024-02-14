import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  flashcards: JSON.parse(localStorage.getItem("flashcards")) || [],
};

const flashcardsSlice = createSlice({
  name: "flashcards",
  initialState,
  reducers: {
    addFlashcard: (state, action) => {
      // const flashcard = {
      //   id: uuidv4(),
      //   title: action.payload,
      //   desc: action.payload,
      //   terms: [
      //     {
      //       id: uuidv4(),
      //       term: action.payload,
      //       defination: action.payload,
      //     },
      //   ],
      // };
      state.flashcards.push(action.payload);
      localStorage.setItem("flashcards", JSON.stringify(state.flashcards));
    },
    removeFlashcard: (state, action) => {
      state.flashcards = state.flashcards.filter(
        (flashcard) => flashcard.id !== action.payload
      );
      localStorage.setItem("flashcards", JSON.stringify(state.flashcards));
    },
  },
});

export const { addFlashcard, removeFlashcard } = flashcardsSlice.actions;
export default flashcardsSlice.reducer;
