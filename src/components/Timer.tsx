import { useState, useEffect, FC } from 'react';

// Define the type for the component's props
interface TimerProps {
  isAnswered: boolean;
  onTimeUp: () => void;
}

const Timer: FC<TimerProps> = ({ isAnswered, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState<number>(30);

  useEffect(() => {
    // If an answer has been selected, stop the timer.
    if (isAnswered) return;

    // When time runs out, call the onTimeUp callback.
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    // Set up the interval to decrement the timer every second.
    const timerId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    // Clean up the interval when the component unmounts or dependencies change.
    return () => clearInterval(timerId);
  }, [timeLeft, isAnswered, onTimeUp]);
  
  // This effect is likely intended to reset the timer for a new question.
  // The dependency `onTimeUp` might not be ideal if it's a stable function.
  // A better approach would be to use a `key` prop on the component instance in the parent,
  // as done in the Quiz component, to force a re-mount and reset state.
  useEffect(() => {
    setTimeLeft(30);
  }, [onTimeUp]); // Re-evaluating this based on the provided code structure.

  const getTimerColor = (): string => {
    if (timeLeft <= 10) return 'text-red-500';
    if (timeLeft <= 20) return 'text-yellow-500';
    return 'text-green-500';
  }

  return (
    <div className="text-center my-4">
      <p className={`text-xl font-bold transition-colors duration-500 ${getTimerColor()}`}>
        Time Left: {timeLeft}s
      </p>
    </div>
  );
};

export default Timer;

