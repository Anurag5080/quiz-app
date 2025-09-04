QuizWhiz 🧠✨
A sleek, responsive, and feature-rich quiz application built with modern web technologies. This project was developed to showcase strong front-end fundamentals, including state management, API handling, and creating a clean, user-friendly interface.

[Live Demo Link Here] <!-- TODO: Add your live demo link from Netlify or Vercel -->

<!-- TODO: Replace the placeholder above with a real screenshot of your application -->

Features
QuizWhiz is packed with features designed to provide an engaging and seamless user experience.

Dynamic Content: Fetches questions directly from the Open Trivia DB API.

Selectable Difficulty: Users can choose between Easy, Medium, or Hard difficulty levels before starting.

Interactive Quiz Experience:

Displays one question at a time with shuffled answer choices.

30-Second Timer per question to keep the challenge exciting.

Instant feedback with color-coded answers (green for correct, red for incorrect).

A dynamic Progress Bar to track your advancement through the quiz.

Detailed Results Page:

Shows your final score and a summary of all your answers.

Highlights your selection vs. the correct answer for each question.

Persistent High Scores: Your top 5 scores are saved locally using localStorage.

Fully Responsive Design: A clean, mobile-first layout that looks great on any device, from phones to desktops.

Smooth Animations: Subtle transitions for a more polished user experience.

Accessibility: Keyboard navigation and proper focus states are implemented for better accessibility.

Tech Stack
This project leverages a modern, efficient, and type-safe technology stack.

Framework: React (v18+)

Language: TypeScript

Build Tool: Vite

Styling: Tailwind CSS

Routing: React Router DOM

Linting/Formatting: ESLint & Prettier

Getting Started
Follow these instructions to get a local copy of the project up and running on your machine.

Prerequisites
You need to have Node.js (version 16 or later) and npm installed on your computer.

Installation & Setup
Clone the repository:

git clone [https://github.com/your-username/quiz-app-ts.git](https://github.com/your-username/quiz-app-ts.git)

Navigate to the project directory:

cd quiz-app-ts

Install the dependencies:

npm install

Run the development server:

npm run dev

The application will be available at http://localhost:5173. The server supports Hot Module Replacement (HMR) for a fast development experience.

Building for Production
To create a production-ready build of the app, run:

npm run build

This command bundles the application into the dist/ directory, optimized for deployment.

Architectural Decisions
State Management
Instead of relying on a large state management library like Redux, this project uses React's built-in Context API and useReducer hook (managed via the custom useQuiz hook). This approach was chosen because:

It is lightweight and sufficient for the application's needs, avoiding unnecessary boilerplate.

It encapsulates all quiz-related logic (state transitions, actions) into a single, cohesive unit (useQuiz.tsx), making the state management predictable and easy to maintain.

It provides a clean way for components to access and manipulate the quiz state without prop-drilling.

API Handling
Questions are fetched asynchronously from the Open Trivia DB. The application gracefully handles loading and error states, ensuring a smooth user experience even if the API call is slow or fails. A local questions.ts file is included as a fallback.

Contact
[Your Name] - [your.email@example.com]

Project Link: https://github.com/your-username/quiz-app-ts
