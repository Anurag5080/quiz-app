import { useState, useEffect, FC } from 'react';
import { useQuiz } from '../hooks/useQuiz';
import ProgressBar from './ProgressBar';
import Timer from './Timer';

const Quiz: FC = () => {
  const { questions, currentQuestionIndex, handleAnswer, nextQuestion, loading, error } = useQuiz();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);

  // Safely access the current question
  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    // Reset selection state when the question changes
    setSelectedAnswer(null);
    setIsAnswered(false);
  }, [currentQuestionIndex]);

  const onSelectAnswer = (answer: string) => {
    if (!isAnswered) {
      setSelectedAnswer(answer);
      setIsAnswered(true);
      handleAnswer(answer);
    }
  };

  const getButtonClass = (answer: string): string => {
    if (!isAnswered) {
      return 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-300';
    }
    if (answer === currentQuestion.correct_answer) {
      return 'bg-green-500 text-white border-green-500 animate-pulse';
    }
    if (answer === selectedAnswer) {
      return 'bg-red-500 text-white border-red-500';
    }
    return 'bg-white text-gray-500 border border-gray-200 cursor-not-allowed';
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen"><div className="text-2xl font-semibold">Loading questions...</div></div>;
  }

  if (error) {
    return <div className="flex items-center justify-center h-screen"><div className="text-2xl font-semibold text-red-500">{error}</div></div>;
  }
  
  // Handle case where questions might not be loaded
  if (!currentQuestion) {
     return <div className="flex items-center justify-center h-screen"><div className="text-2xl font-semibold">No questions found. Please try again.</div></div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-3xl">
        <div className="mb-6">
          <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
          <Timer isAnswered={isAnswered} onTimeUp={nextQuestion} key={currentQuestionIndex} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800" dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQuestion.answers.map((answer: string, index: number) => (
            <button
              key={index}
              onClick={() => onSelectAnswer(answer)}
              className={`p-4 rounded-lg shadow-md font-semibold text-left transition-all duration-300 transform cursor-pointer hover:scale-105 ${getButtonClass(answer)}`}
              disabled={isAnswered}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          ))}
        </div>
        {isAnswered && (
          <div className="mt-8 text-right">
            <button
              onClick={nextQuestion}
              className="bg-gradient-to-r from-[#ff930f] to-[#fff95b] text-black font-bold py-3 px-6 rounded-lg transition-transform duration-150 ease-in-out cursor-pointer transform hover:scale-110"
            >
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;

