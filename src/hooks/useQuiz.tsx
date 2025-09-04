import { createContext, useContext, useState, ReactNode, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { localQuestions } from '../lib/questions';
import { shuffleArray } from '../lib/utils';
import { Question, UserAnswer, Difficulty, QuestionState  } from '../types';

// Define the shape of the context value
interface QuizContextType {
  questions: QuestionState [];
  currentQuestionIndex: number;
  score: number;
  userAnswers: UserAnswer[];
  loading: boolean;
  error: string | null;
  fetchQuestions: (difficulty: Difficulty) => Promise<void>;
  handleAnswer: (answer: string) => void;
  nextQuestion: () => void;
  restartQuiz: () => void;
}

// Create the context with an undefined initial value
const QuizContext = createContext<QuizContextType | undefined>(undefined);

// Custom hook to use the quiz context
export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

// Define the props for the provider component
interface QuizProviderProps {
  children: ReactNode;
}

export const QuizProvider: FC<QuizProviderProps> = ({ children }) => {
  const [questions, setQuestions] = useState<QuestionState []>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchQuestions = async (difficulty: Difficulty) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`);
      if (!response.ok) {
        throw new Error('Failed to fetch questions. Using local questions.');
      }
      const data = await response.json();
      if (data.response_code !== 0) {
        throw new Error('API returned an error. Using local questions.');
      }
      // Explicitly type the incoming question data
      const formattedQuestions = data.results.map((question: Question): QuestionState  => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
      }));
      setQuestions(formattedQuestions);
    } catch (err: any) {
      console.error(err);
      setError('Could not fetch questions from the API. Using local questions as a fallback.');
      const formattedQuestions = localQuestions.results.map((question: Question): QuestionState  => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
      }));
      setQuestions(formattedQuestions);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (answer: string) => {
    const isCorrect = questions[currentQuestionIndex].correct_answer === answer;
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setUserAnswers((prevAnswers) => [
      ...prevAnswers,
      { question: questions[currentQuestionIndex].question, answer, isCorrect, correctAnswer: questions[currentQuestionIndex].correct_answer },
    ]);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      navigate('/results');
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setQuestions([]);
    navigate('/');
  };

  const value: QuizContextType = {
    questions,
    currentQuestionIndex,
    score,
    userAnswers,
    loading,
    error,
    fetchQuestions,
    handleAnswer,
    nextQuestion,
    restartQuiz,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

