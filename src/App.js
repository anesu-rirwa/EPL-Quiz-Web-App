import React, {useState} from 'react';
import './App.css';
import background from './images/playeraward.png';
import uefa from './images/uefa.jpg';
import boot from './images/boot.jpg';
import league from './images/league.jpg';


function App() {
  const questions = [
    {
      questionText: "Who was the player of the season?",
      answerOptions: [
        {answerText: 'Mohammed Salah', isCorrect: false},
        {answerText: 'Christiano Ronaldo', isCorrect: false},
        {answerText: 'Kevin De-Bryne', isCorrect: true},
        {answerText: 'Son Heung-min', isCorrect: false}
      ]
    },
    {
      questionText: "Which team finished 4th?",
      answerOptions: [
        {answerText: 'Tottenham Hotspurs', isCorrect: true},
        {answerText: 'Manchester United', isCorrect: false},
        {answerText: 'Arsenal', isCorrect: false},
        {answerText: 'Chelsea', isCorrect: false}
      ] 
    },
    {
      questionText: "Which two players won the golden boot together?",
      answerOptions: [
        {answerText: 'Son & Salah', isCorrect: true},
        {answerText: 'Ronaldo & Salah', isCorrect: false},
        {answerText: 'Ronaldo & Kane', isCorrect: false},
        {answerText: 'Son & Kane', isCorrect: false}
      ] 
    },
    {
      questionText: "Which team won the league?",
      answerOptions: [
        {answerText: 'Liverpool', isCorrect: false},
        {answerText: 'Manchester United', isCorrect: false},
        {answerText: 'Manchester City', isCorrect: true},
        {answerText: 'Chelsea', isCorrect: false}
      ] 
    }
  ]

  const [currentQue, setCurrentQue] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  
  const handleButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQue = currentQue + 1;
    if (nextQue < questions.length) {
      setCurrentQue(nextQue);
    }

    else {
      setShowScore(true);
    }
  }

  const handleRefresh = () => {
    setCurrentQue(0);
    setShowScore(false);
    setScore(0);
  }


  const images = [background, uefa, boot, league]
  
  return (
    <div className='app' style={
      {backgroundImage: `url(${images[currentQue]})`,
      backgroundSize: `cover`
      }
    }>
      {showScore ? (
        <div className='score-section'>
          <h1>You scored {score} out of {questions.length}</h1>

          <button className='btn' onClick={handleRefresh}>Try Again</button>

        </div>
      ) : (
        <div className='container'>
          <div className='question-section'>
            
            <div className='question-count'>
              <h3>Question {currentQue + 1}/{questions.length}</h3>
            </div>

            <div className='question-text'>
              <h1>
              {questions[currentQue].questionText}</h1>
            </div>
          
          </div>
          
          <div className='answer-section'>
            {questions[currentQue].answerOptions.map((answerOption, index) => (
              <button className='btn' key={index} onClick={() => handleButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
        </div>
    )}
    </div>
  );
}

export default App;
