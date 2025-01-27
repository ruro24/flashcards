export interface Flashcard {
    question: string;
    answer: string;
    topic:string;
    id: string;
    isFront:boolean;
  }
  
export interface StoreModel {
    flashcards: Flashcard[];
    setFlashcards: (flashcards: Flashcard[]) => void;
    fetchFlashcards: () => Promise<void>;
  }