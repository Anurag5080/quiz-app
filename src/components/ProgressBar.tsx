import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

/**
 * A component to visually display the user's progress through the quiz.
 */
const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progressPercentage = total > 0 ? (current / total) * 100 : 0;

  return (
    <div className="w-full mb-4">
      <p className="text-center text-sm font-semibold text-gray-600 mb-2">
        Question {current} of {total}
      </p>
      <div className="bg-[#333533] rounded-full h-4 shadow-inner">
        <div
          className="bg-gradient-to-r from-[#ff930f] to-[#fff95b] h-4 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

