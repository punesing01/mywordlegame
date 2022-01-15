import './App.css';
import Keyboard from './components/Keyboard/Keyboard';
import React from "react";
import AnswerGrid from './components/AnswerGrid/AnswerGrid';

function App() {
  return (
    <div className='app_style'>
      <h1>MY WORDLE</h1>
      <AnswerGrid/>
      <Keyboard />
    </div>
  );
}

export default App;