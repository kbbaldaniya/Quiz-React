import React, { useState } from "react";

const QueAns = [
  {
    que: "Everything in React is a ____",
    ansOptions: [
      { ans: "Module", isCorrect: false },
      { ans: "Package", isCorrect: false },
      { ans: "Component", isCorrect: true },
      { ans: "Class", isCorrect: false },
    ],
  },
  {
    que: "What is Babel?",
    ansOptions: [
      { ans: "transpiler", isCorrect: false },
      { ans: "interpreter", isCorrect: false },
      { ans: "Compiler", isCorrect: false },
      { ans: "Both Compiler and Transpilar", isCorrect: true },
    ],
  },
  {
    que: "Who Develop React.js?",
    ansOptions: [
      { ans: "Google", isCorrect: false },
      { ans: "Facebook", isCorrect: true },
      { ans: "Twitter", isCorrect: false },
      { ans: "Apple", isCorrect: false },
    ],
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QueAns.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {QueAns.length}
        </div>
      ) : (
        <div>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{QueAns.length}
            </div>
            <div className="question-text">
              <h2>{QueAns[currentQuestion].que}</h2>
            </div>
          </div>
          <div className="answer-section">
            {QueAns[currentQuestion].ansOptions.map((ansOptions) => (
              <button
                onClick={() => handleAnswerOptionClick(ansOptions.isCorrect)}
              >
                {ansOptions.ans}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
