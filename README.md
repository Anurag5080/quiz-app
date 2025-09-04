Quiz App (TypeScript Edition)
A modern and responsive quiz application built with React and TypeScript, designed to provide a seamless and engaging user experience. This project was developed as part of a front-end assessment to showcase skills in React, TypeScript, state management, API integration, and UI/UX design.

Features
Type-Safe Codebase: Built with TypeScript for enhanced reliability and maintainability.

Dynamic Question Loading: Fetches questions from the Open Trivia DB API, with a local JSON fallback.

Multiple Difficulty Levels: Users can choose between easy, medium, and hard difficulty levels.

Interactive Quiz Interface: Displays one question at a time with multiple-choice answers.

Timer per Question: Each question has a 30-second timer that auto-advances if time runs out.

Progress Indicator: A progress bar shows the user's progress through the quiz.

Score Tracking: Tracks the user's score and provides instant feedback on answers.

Detailed Results Page: Shows a summary of the quiz, including the final score and a review of each answer.

Persistent High Scores: Saves high scores to localStorage.

Responsive Design: Fully responsive layout that works on desktop and mobile devices.

Accessibility: Includes focus states and keyboard navigation considerations.

Tech Stack
React: A JavaScript library for building user interfaces.

TypeScript: A strongly typed superset of JavaScript.

Vite: A fast build tool and development server.

React Router: For declarative routing in React.

Tailwind CSS: A utility-first CSS framework for styling.

Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
You need to have Node.js and npm installed on your machine.

Node.js (v16 or later recommended)

npm

Installation & Setup
Create the project with Vite:

npm create vite@latest quiz-app-ts -- --template react-ts

Navigate into the directory:

cd quiz-app-ts

Install dependencies:

npm install

Install Tailwind CSS and React Router:

npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Populate the project:
Replace the generated placeholder files with the code provided for this project.

Running the Application
Start the development server:

npm run dev

This will run the app in development mode. Open http://localhost:5173 to view it in the browser.

Build for production:

npm run build

This will build the app for production to the dist folder.