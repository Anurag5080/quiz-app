import { useEffect, useState, FC } from 'react';
import { useQuiz } from '../hooks/useQuiz';
import { UserAnswer } from '../types'; // Assuming UserAnswer is defined in types.ts

const Results: FC = () => {
  const { score, userAnswers, restartQuiz, questions } = useQuiz();
  const [highScores, setHighScores] = useState<number[]>([]);

  useEffect(() => {
    // Safely parse high scores from localStorage
    try {
      const savedHighScoresRaw = localStorage.getItem('highScores');
      const savedHighScores: number[] = savedHighScoresRaw ? JSON.parse(savedHighScoresRaw) : [];
      
      // Ensure the parsed data is an array of numbers before proceeding
      if (Array.isArray(savedHighScores) && savedHighScores.every(item => typeof item === 'number')) {
        const newHighScores = [...savedHighScores, score].sort((a, b) => b - a).slice(0, 5);
        setHighScores(newHighScores);
        localStorage.setItem('highScores', JSON.stringify(newHighScores));
      } else {
         // Handle corrupted data by starting fresh
         const newHighScores = [score].sort((a, b) => b - a).slice(0, 5);
         setHighScores(newHighScores);
         localStorage.setItem('highScores', JSON.stringify(newHighScores));
      }
    } catch (error) {
      console.error("Failed to parse high scores from localStorage", error);
      // Initialize with the current score if parsing fails
      setHighScores([score]);
      localStorage.setItem('highScores', JSON.stringify([score]));
    }
  }, [score]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#ffd100]">Quiz Results</h2>
        <p className="text-xl md:text-2xl text-center mb-8 text-gray-700">You scored <span className="font-bold text-green-500">{score}</span> out of <span className="font-bold">{questions.length}</span>!</p>

        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-gray-800">High Scores:</h3>
          <ol className="list-decimal list-inside space-y-1">
            {highScores.map((highScore: number, index: number) => (
              <li key={index} className="text-lg text-gray-600 font-medium">
                {index + 1}. {highScore} points
              </li>
            ))}
          </ol>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold mb-3 text-gray-800">Your Answers:</h3>
          {userAnswers.map((answer: UserAnswer, index: number) => (
            <div key={index} className={`p-4 border-l-4 rounded-r-lg ${answer.isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
              <p className="font-semibold text-gray-800" dangerouslySetInnerHTML={{ __html: answer.question }} />
              <p className={`mt-2 ${answer.isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                Your answer: <span className="font-medium" dangerouslySetInnerHTML={{ __html: answer.answer }} />
              </p>
              {!answer.isCorrect && (
                <p className="mt-1 text-green-700">
                  Correct answer: <span className="font-medium" dangerouslySetInnerHTML={{ __html: answer.correctAnswer }} />
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={restartQuiz}
            className="bg-gradient-to-r from-[#ff930f] to-[#fff95b] text-black font-bold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-transform duration-150 ease-in-out cursor-pointer transform hover:scale-110"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;

