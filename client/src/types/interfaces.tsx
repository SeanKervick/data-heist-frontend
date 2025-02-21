export interface DialogBoxProps {
    open: boolean;
    title: string;
    message: React.ReactNode; // to accept JSX and strings for formatting 
    buttonText: string;
    onClose: () => void;
  }

  export interface QuizQuestion {
    question: string;
    answers: string[]; // array of strings 
    correctAnswer: number; // index of the correct answer
  }
