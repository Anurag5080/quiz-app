import React from 'react';

const Loader: React.FC = () => (
  <div className="flex items-center justify-center w-full h-full">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-yellow-400"></div>
    <h2 className="text-lg text-gray-800 ml-4">Wait while loading...</h2>
  </div>
);

export default Loader;
