import './App.css';
// import { StoreProvider, useStoreActions, useStoreState } from 'easy-peasy';
// import store from './model/store';
import FlashCardComponent from './components/flashcard';
import data from "./utils/flashCardData.json"


const App = () => {
 
  //const props = {topic: "this is a topic", question: "this is a question", additionalText:"additional text"}
  return(
    data.map((card)=> <FlashCardComponent {...card} />)
  
    )
}

export default App;
