import React, { useEffect } from 'react';
import { createStore, action, thunk, persist, StateMapper, FilterActionTypes } from 'easy-peasy';
import { StoreProvider, useStoreActions, useStoreState } from 'easy-peasy';
import axios from 'axios'; 
import { Flashcard, StoreModel } from '../utils/types';

// const store = createStore(
//     persist<StoreModel>(
//       {
//         flashcards: [],
//         // Action to set flashcards
//         setFlashcards: action((state, payload: Flashcard[]) => {
//           state.flashcards = payload;
//         }),
//         // Thunk to fetch flashcards from the API using Axios
//         fetchFlashcards: thunk(async (actions) => {
//           try {
//             const response = await axios.get('https://localhost:3000'); // Replace with your actual API URL
//             actions.setFlashcards(response.data); // Store the data in the state
//           } catch (error) {
//             console.error('Error fetching flashcards:', error); // Handle any errors
//           }
//         }),
//       },
//       {
//         storage: localStorage, // Persist data in localStorage across sessions
//       }
//     )
//   );

//   export default store;