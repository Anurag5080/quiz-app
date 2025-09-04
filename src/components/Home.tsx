import React, { useState, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../hooks/useQuiz';
import { Difficulty } from '../types';
import Loader from './Loader';

const Home: FC = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>('easy');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { fetchQuestions } = useQuiz();

  const startQuiz = async () => {
    setLoading(true);
    await fetchQuestions(difficulty);
    setLoading(false);
    navigate('/quiz');
  };

  const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Cast the string value from the event to the Difficulty type
    setDifficulty(e.target.value as Difficulty);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Main content and image side by side */}
      <div className="flex flex-row w-full max-w-4xl items-center justify-center">
        {/* Image at right, hidden on small screens */}
        <div className="hidden md:block mx-auto">
          <img src="/banner.png" alt="Quiz App banner" className="w-32 h-32 md:w-60 md:h-60 lg:w-100 lg:h-100 mx-auto" />
        </div>
        {/* Main content */}
        <div className="p-8 bg-white/30 backdrop-blur-md rounded-xl shadow-lg text-center max-w-md w-full">
          {/* Show loader when loading */}
          {loading ? (
            <Loader />
          ) : (
            <>
              <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to the Quiz App!</h1>
              <p className="text-lg text-[#333533] mb-8">Test your knowledge with our fun and challenging quizzes.</p>
              <div className="mb-6">
                <label htmlFor="difficulty" className="block text-lg font-medium text-gray-800 mb-2">
                  Select Difficulty
                </label>
                <select
                  id="difficulty"
                  value={difficulty}
                  onChange={handleDifficultyChange}
                  className="cursor-pointer mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg shadow-md"
                >
                  <option value="easy" className='cursor-pointer text-sm'>Easy</option>
                  <option value="medium" className='cursor-pointer text-sm'>Medium</option>
                  <option value="hard" className='cursor-pointer text-sm'>Hard</option>
                </select>
              </div>
              <button
                onClick={startQuiz}
                className="w-full bg-gradient-to-r from-[#ff930f] to-[#fff95b] text-white font-bold py-3 px-4 rounded-md hover:bg-indigo-700 transition-transform duration-250 ease-in-out transform hover:scale-110 shadow-md cursor-pointer"
              >
                Start Quiz
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;

