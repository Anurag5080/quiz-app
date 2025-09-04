// Defines the specific difficulty levels allowed in the quiz.
// Using a union type ('easy' | 'medium' | 'hard') ensures type safety 
// and prevents bugs from typos or unexpected API values.
export type Difficulty = 'easy' | 'medium' | 'hard';

// Represents the structure of a single question object as fetched from the Open Trivia DB API.
export interface Question {
  category: string;
  correct_answer: string;
  difficulty: Difficulty; // Uses the strict Difficulty type for safety.
  incorrect_answers: string[];
  question: string;
  type: string;
}

// Extends the base Question type to include the shuffled list of all possible answers.
// This is the shape of a question as it's managed within our application's state.
export interface QuestionState extends Question {
  answers: string[];
}

// Represents a user's recorded answer for a single question, used for building the results page.
export interface UserAnswer {
  question: string;
  answer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

// Defines the complete shape of the context value provided by the QuizProvider.
// This includes all state and action functions that components can access via the useQuiz hook.
export interface QuizContextType {
  questions: QuestionState[];
  currentQuestionIndex: number;
  score: number;
  userAnswers: UserAnswer[];
  loading: boolean;
  error: string | null;
  startQuiz: (difficulty: Difficulty) => void;
  handleAnswer: (answer: string) => void;
  nextQuestion: () => void;
  restartQuiz: () => void;
}

