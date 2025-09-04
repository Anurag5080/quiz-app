import React, { useState, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';
import { Difficulty } from '../types';

const Home: FC = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const navigate = useNavigate();
  const { fetchQuestions } = useQuiz();

  const startQuiz = async () => {
    await fetchQuestions(difficulty);
    navigate('/quiz');
  };

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Cast the string value from the event to the Difficulty type
    setDifficulty(e.target.value as Difficulty);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-2xl text-center max-w-md w-full">
        <h1 className="text-4xl font-bold mb-4 text-indigo-600">Welcome to the Quiz App!</h1>
        <p className="text-lg text-gray-700 mb-8">Test your knowledge with our fun and challenging quizzes.</p>
        <div className="mb-6">
          <label htmlFor="difficulty" className="block text-lg font-medium text-gray-800 mb-2">
            Select Difficulty
          </label>
          <select
            id="difficulty"
            value={difficulty}
            onChange={handleDifficultyChange}
            className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button
          onClick={startQuiz}
          className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;

