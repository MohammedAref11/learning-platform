import { useState, useRef } from 'react'
import { gsap } from 'gsap'

function Quiz({ onPass }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const cardRef = useRef(null)

  const questions = [
    {
      question: "What is the Call Stack primarily used for?",
      options: [
        "Storing large objects",
        "Tracking function execution order",
        "Managing CSS styles",
        "Rendering HTML elements"
      ],
      correct: 1
    },
    {
      question: "Where are primitive values stored in JavaScript?",
      options: [
        "Heap",
        "DOM",
        "Stack",
        "Cache"
      ],
      correct: 2
    },
    {
      question: "What is a Closure?",
      options: [
        "A way to close files",
        "A function that accesses variables from its outer scope even after the outer function returns",
        "A JavaScript loop",
        "A type of error handler"
      ],
      correct: 1
    },
    {
      question: "Which of the following is NOT a primitive type?",
      options: [
        "string",
        "number",
        "object",
        "boolean"
      ],
      correct: 2
    },
    {
      question: "What does lexical scope mean?",
      options: [
        "Scope determined by runtime execution",
        "Scope determined by where the function is called",
        "Scope determined by where the function is defined in the code",
        "Scope that changes dynamically"
      ],
      correct: 2
    }
  ];

  const handleAnswer = (index) => {
    if (answered) return;
    
    setSelectedAnswer(index);
    setAnswered(true);
    
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
      gsap.to(cardRef.current, {
        duration: 0.3,
        boxShadow: '0 0 20px rgba(22, 163, 74, 0.5)',
      })
    } else {
      gsap.to(cardRef.current, {
        duration: 0.3,
        boxShadow: '0 0 20px rgba(220, 38, 38, 0.5)',
      })
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setSelectedAnswer(null);
      gsap.to(cardRef.current, {
        duration: 0.3,
        boxShadow: '0 0px 0px rgba(0, 119, 188, 0)',
      })
    } else {
      if (score >= 4) {
        onPass();
      }
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="space-y-3xl">
      {/* Progress */}
      <div className="card p-xl">
        <div className="flex justify-between items-center mb-md">
          <h3 className="text-lg font-bold">Quiz Progress</h3>
          <span className="text-primary font-bold">{currentQuestion + 1}/{questions.length}</span>
        </div>
        <div className="w-full bg-white bg-opacity-10 rounded-full h-3 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div ref={cardRef} className="card p-3xl">
        <h2 className="text-2xl font-bold mb-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          {questions[currentQuestion].question}
        </h2>

        <div className="space-y-md mb-3xl">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={answered}
              className={`w-full p-xl text-left rounded-md transition-all duration-200 font-bold ${
                !answered
                  ? 'bg-white bg-opacity-10 hover:bg-opacity-20 border border-white border-opacity-10'
                  : index === questions[currentQuestion].correct
                  ? 'bg-success bg-opacity-20 border border-success text-success'
                  : index === selectedAnswer
                  ? 'bg-danger bg-opacity-20 border border-danger text-danger'
                  : 'bg-white bg-opacity-10 border border-white border-opacity-10'
              } ${answered && index !== selectedAnswer && index !== questions[currentQuestion].correct ? 'opacity-50' : ''}`}
            >
              <span className="text-lg">{
                index === questions[currentQuestion].correct ? '✓' :
                index === selectedAnswer && index !== questions[currentQuestion].correct ? '✗' :
                `${String.fromCharCode(65 + index)}.`
              }</span> {option}
            </button>
          ))}
        </div>

        {answered && (
          <div className={`p-xl rounded-md mb-xl ${
            selectedAnswer === questions[currentQuestion].correct
              ? 'bg-success bg-opacity-10 border border-success text-success'
              : 'bg-danger bg-opacity-10 border border-danger text-danger'
          }`}>
            {selectedAnswer === questions[currentQuestion].correct
              ? '✓ Correct! Great job!'
              : '✗ Incorrect. Try again next time.'}
          </div>
        )}

        <button
          onClick={handleNext}
          disabled={!answered}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentQuestion + 1 === questions.length
            ? score >= 4 ? '✓ Complete Quiz' : 'View Results'
            : 'Next Question'}
        </button>

        {answered && currentQuestion + 1 === questions.length && (
          <div className="mt-xl p-xl bg-white bg-opacity-10 rounded-md text-center">
            <h3 className="text-2xl font-bold mb-md">Quiz Results</h3>
            <p className="text-3xl font-bold text-primary mb-md">{score}/{questions.length}</p>
            {score >= 4 ? (
              <p className="text-success font-bold">🎉 You passed! Ready for Week 2!</p>
            ) : (
              <p className="text-warning font-bold">You need 4/5 to pass. Review the material and try again!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz
