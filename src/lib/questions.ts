import { Question } from '../types';

// Defines the structure of the local questions data object.
interface LocalQuestionsData {
  response_code: number;
  results: Question[];
}

// A local dataset of quiz questions as a fallback for the API.
export const localQuestions: LocalQuestionsData = {
  "response_code": 0,
  "results": [
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Entertainment: Video Games",
      "question": "What is the name of the main character in the video game series &quot;The Legend of Zelda&quot;?",
      "correct_answer": "Link",
      "incorrect_answers": [
        "Zelda",
        "Ganon",
        "Impa"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "Science: Computers",
      "question": "What does CPU stand for?",
      "correct_answer": "Central Processing Unit",
      "incorrect_answers": [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "hard",
      "category": "History",
      "question": "Who was the first President of the United States?",
      "correct_answer": "George Washington",
      "incorrect_answers": [
        "Thomas Jefferson",
        "Abraham Lincoln",
        "John Adams"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Geography",
      "question": "What is the capital of France?",
      "correct_answer": "Paris",
      "incorrect_answers": [
        "London",
        "Berlin",
        "Rome"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "medium",
      "category": "Entertainment: Film",
      "question": "Which movie won the Academy Award for Best Picture in 2020?",
      "correct_answer": "Parasite",
      "incorrect_answers": [
        "1917",
        "Joker",
        "Once Upon a Time in Hollywood"
      ]
    }
  ]
}

