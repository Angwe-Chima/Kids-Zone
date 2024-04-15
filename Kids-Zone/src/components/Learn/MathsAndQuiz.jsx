import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { AiFillCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const sounds = {
  correct: new Audio("https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/success-sound.mp3?alt=media&token=92537102-5500-455d-8e0a-fef600e32a43"),
  wrong: new Audio("https://firebasestorage.googleapis.com/v0/b/kids-zone-78260.appspot.com/o/failed-sound.mp4?alt=media&token=144f6594-6c78-4f00-b036-023ffa811eee"),
};

function MathsAndQuiz() {
  const [num1, setNum1] = useState(Math.floor(Math.random() * 10));
  const [num2, setNum2] = useState(Math.floor(Math.random() * 10));
  const [operator, setOperator] = useState("+"); 
  const [userAnswer, setUserAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  useEffect(() => {
    const calculate = () => {
      if (operator === "+") {
        setCorrectAnswer(num1 + num2);
      } else if (operator === "-") {
        setCorrectAnswer(num1 - num2);
      }
    };
    calculate();
  }, [num1, num2, operator]);

  const handleAnswerClick = (answer) => {
    setUserAnswer(answer);
    if (answer === correctAnswer) {
      sounds.correct.play();
    } else {
      sounds.wrong.play();
    }
  };

  const generateNewQuestion = () => {
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
    setOperator(Math.random() < 0.5 ? "+" : "-");
    setUserAnswer(null);
    setCorrectAnswer(null);
  };

  return (
    <div className="basic-math activity">
      <div className="top">
        <Link to="/learn">
          <IoMdArrowRoundBack />
        </Link>
        <h1>Maths</h1>
      </div>

      <div className="mathQuiz">
        <p>
          What is {num1} {operator} {num2} ?
        </p>
        <div className="answer-options">
          <button onClick={() => handleAnswerClick(num1 + num2)}>
            {num1} {operator} {num2} = {num1 + num2}
          </button>
          <button onClick={() => handleAnswerClick(num1 - num2)}>
            {num1} {operator} {num2} = {num1 - num2}
          </button>
        </div>
        {userAnswer !== null && (
          <div className="feedback">
            {userAnswer === correctAnswer ? (
              <AiFillCheckCircle className="correct" />
            ) : (
              <AiOutlineCloseCircle className="wrong" />
            )}
          </div>
        )}
        <button className="next-question  " onClick={generateNewQuestion}>Next Question</button>
      </div>
    </div>
  );
}

export default MathsAndQuiz;
