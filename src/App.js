import './App.css';
import Keyboard from './components/Keyboard/Keyboard';
import React, { useState } from "react";
import AnswerGrid from './components/AnswerGrid/AnswerGrid';

function App() {
  const [answers, setAnswers] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [ansCount, setAnsCount]= useState(0);
  
  console.log('answer=',answer);
  console.log('answers=',answers);

  const storeAnswer = (ans) => {
    if(answer.length <5 && ans!== 'ENT'){
      setAnswer([...answer,ans]);
    } else if(ans === 'ENT'){
      console.log('Enter is pressed');
      setAnswers([...answers,answer]);
      setAnswer([]);
      setAnsCount(prev=> prev+1);
    }
  };

  return (
    <div className='app_style'>
      <h1>MY WORDLE</h1>
      <AnswerGrid answers={answers} char={answer} count={ansCount}/>
      <Keyboard onKeyPressed={storeAnswer}/>
    </div>
  );
}
export default App;