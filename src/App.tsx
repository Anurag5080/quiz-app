import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';
import { QuizProvider } from './hooks/useQuiz';

function App() {
  return (
    <QuizProvider>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </div>
      </div>
    </QuizProvider>
  );
}

export default App;

