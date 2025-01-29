import { useEffect, useState } from 'react';
import './App.css';
// import { StoreProvider, useStoreActions, useStoreState } from 'easy-peasy';
// import store from './model/store';
import FlashCardComponent from './components/flashcard';
import data from "./utils/flashCardData.json"
import axios from 'axios';
import { Flashcard } from './utils/types';
import { FlashCardProps } from './types';


const App = () => {
const [flashCardData, setFlasCardData] = useState<FlashCardProps[]>([]);

 useEffect(() => {
  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000');
      const flashCardList = response.data.flashCards
      setFlasCardData(flashCardList);

    } catch (err) {
     console.log(err)
    }
  };

  fetchPosts();

 }, [])
 
  //const props = {topic: "this is a topic", question: "this is a question", additionalText:"additional text"}
  return(
    flashCardData.map((card)=> <FlashCardComponent {...card} />)
  
    )
}

export default App;
