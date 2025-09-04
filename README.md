# QuizWhiz 🧠✨

[![React](https://img.shields.io/badge/React-18%2B-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Build-Vite-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Styles-TailwindCSS-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/Routing-React%20Router-CA4245?logo=reactrouter)](https://reactrouter.com/)
[![ESLint](https://img.shields.io/badge/Lint-ESLint-4B32C3?logo=eslint)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Format-Prettier-F7B93E?logo=prettier)](https://prettier.io/)
[![API](https://img.shields.io/badge/API-Open%20Trivia%20DB-0A0A0A)](https://opentdb.com/)

A sleek, responsive, and feature-rich quiz application built with modern web technologies.  
This project showcases strong **front-end fundamentals**, including state management, API handling, and crafting a clean, user-friendly interface.

**Live Demo:** [Link Here](https://quizwhiz-anurag.vercel.app/) 

<!-- TODO: Replace the placeholder below with a real screenshot of your application -->
![App Screenshot Placeholder](/screenshot.png)

---

## Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#-prerequisites)
  - [Installation--setup](#-installation--setup)
- [Building for Production](#-building-for-production)
- [Architectural Decisions](#-architectural-decisions)
  - [State Management](#️-state-management)
  - [API Handling](#-api-handling)
- [Contact](#-contact)

---

## ✨ Features

**QuizWhiz** is packed with features designed for an engaging and seamless experience.

- **Dynamic Content** — Fetches questions directly from the **Open Trivia DB** API.
- **Selectable Difficulty** — Choose **Easy**, **Medium**, or **Hard** before starting.
- **Interactive Quiz Experience**
  - Presents **one question at a time** with **shuffled** answer choices.
  - **30-second timer** per question keeps the challenge exciting.
  - **Instant feedback** with color-coded answers (✅ green for correct, ❌ red for incorrect).
  - A dynamic **progress bar** to track your advancement through the quiz.
- **Detailed Results Page**
  - Shows your **final score** and a **summary** of all answers.
  - Highlights **your selection** vs. the **correct answer** for each question.
- **Persistent High Scores** — Top **5** scores saved locally via **`localStorage`**.
- **Fully Responsive** — Mobile-first layout looks great on phones, tablets, and desktops.
- **Smooth Animations** — Subtle transitions for a polished, modern feel.
- **Accessibility** — Keyboard navigation and proper focus states are implemented.

---

## 🛠 Tech Stack

Modern, efficient, and type-safe:

- **Framework:** React (v18+)
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Linting/Formatting:** ESLint & Prettier

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### ✅ Prerequisites

- **Node.js** v16 or later  
- **npm** (bundled with Node.js)

### ⚡ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/quiz-app-ts.git
2. **Navigate to the project directory**
   ```bash
   cd quiz-app
3. **Install dependencies**
   ```bash
   npm install
4. **Start the development server**
   ```bash
   npm run dev
   
The application will be available at http://localhost:5173 with HMR (Hot Module Replacement) for a fast dev experience.

## 📦 Building for Production
Create an optimized, production-ready build:
   ```bash
   npm run build
   ```
   This bundles the app into the ``` dist/ ``` directory, optimized and ready for deployment.

## 🏗 Architectural Decisions
   **⚙️ State Management**
   
   Rather than using a large state library like Redux, this project uses React’s Context API with ``` useReducer ```, managed via a custom ``` useQuiz ``` hook. This approach was chosen because it:
   - Is **lightweight** and avoids unnecessary boilerplate.
   - Encapsulates all quiz logic (state transitions, actions) in a single, cohesive unit ```(useQuiz.tsx)```, making state predictable and easy to maintain.
   - Provides a clean way for components to **access and manipulate state** without prop-drilling
     
   **🌐 API Handling**
   - Questions are fetched asynchronously from **Open Trivia DB**.
   - The app gracefully handles loading and error states for a smooth experience even on slow or failed requests.
   - A local ``` questions.ts ``` file is included as a **fallback**, ensuring the quiz still runs if the API fails.

## 📬 Contact
   **Mail** -  ```anurag26official@gmail.com```
   
   **Project Link** -  [Link Here](https://quizwhiz-anurag.vercel.app/) 
