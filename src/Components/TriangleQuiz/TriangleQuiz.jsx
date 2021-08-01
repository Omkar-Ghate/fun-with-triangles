import React, { useState } from "react";
import "./quiz.css";
function TriangleQuiz() {
  const questions = [
    {
      questionText:
        "The perimeter of an equilateral triangle is 15cm. What is the length of one side?",
      answerOptions: [
        { answerText: "45 cm", isCorrect: false },
        { answerText: "15 cm", isCorrect: false },
        { answerText: "5 cm", isCorrect: true },
        { answerText: "None of the above", isCorrect: false }
      ]
    },

    {
      questionText:
        "If a triangle has 2 sides with equal lengths and 60° angle between them. What is the type of triangle?",
      answerOptions: [
        { answerText: "Equilateral", isCorrect: true },
        { answerText: "Isosceles", isCorrect: false },
        { answerText: "Both", isCorrect: false }
      ]
    },

    {
      questionText:
        "If a triangle has angles 25°, 75°, 80°. Is it an acute triangle?",
      answerOptions: [
        { answerText: "Yes", isCorrect: false },
        { answerText: "No", isCorrect: true }
      ]
    },
    {
      questionText:
        "If a triangle has angles 115°, 25°, 40°. Is it an obtuse triangle?",
      answerOptions: [
        { answerText: "No", isCorrect: true },
        { answerText: "Yes", isCorrect: false }
      ]
    },
    {
      questionText:
        "A triangle has angles 60°, 60°, 60°. Is it an equilateral triangle?",
      answerOptions: [
        { answerText: "No", isCorrect: false },
        { answerText: "Yes", isCorrect: true }
      ]
    },
    {
      questionText:
        "If a triangle has 2 sides with equal lengths and 75° angle between them. What is the type of triangle?",
      answerOptions: [
        { answerText: "Equilateral", isCorrect: false },
        { answerText: "Isosceles", isCorrect: true },
        { answerText: "Right Angle Triangle", isCorrect: false },
        { answerText: "None of the above", isCorrect: false }
      ]
    },
    {
      questionText:
        "If a triangle has angles 90°, 60°, 30°. Is it a right angle triangle?",
      answerOptions: [
        { answerText: "Equilateral", isCorrect: false },
        { answerText: "Isosceles", isCorrect: false },
        { answerText: "Right Angle Triangle", isCorrect: true }
      ]
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className="answerBtn"
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default TriangleQuiz;
