import './App.css';
import Keyboard from './components/Keyboard/Keyboard';
import React, { useEffect, useState } from "react";
import AnswerGrid from './components/AnswerGrid/AnswerGrid';

function App() {
  const [answers, setAnswers] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [ansCount, setAnsCount]= useState(0);
  const [cellColor, setCellColor] = useState([]);;
  const[wordToPredict, setWordToPredict] = useState('');
  const guessLetters = "abcdefghijklmnopqrstuvwxyz";

  const [guessWord,setGuessWord] = useState({
    first: {
      rowColors: [],
      rowLetters: []
    },
    second: {
      rowColors: [],
      rowLetters: []
    },
    third: {
      rowColors: [],
      rowLetters: []
    },
    forth: {
      rowColors: [],
      rowLetters: []
    },
    fifth: {
      rowColors: [],
      rowLetters: []
    },
    sixth: {
      rowColors: [],
      rowLetters: []
    }
  });

  console.log('answer=',answer);
  console.log('answers=',answers);
  console.log('ans count=',ansCount);

  const fetchANewWord= async()=>{
    const random = Math.floor(Math.random() * 26) + 1;
    const startingLetter = guessLetters.charAt(random-1);
    return fetch(`https://api.datamuse.com/words?sp=${startingLetter}????&max=1`)
      .then(res=> {
          res.json().then(data=>{
              console.log('data=',data[0].word);
              setWordToPredict(data[0].word.toUpperCase());
        })})
      .catch(err=> console.log(err));
  }

  useEffect(()=> {
    fetchANewWord();
  },[]);

  const storeAnswer = (ans) => {
    if(answer.length <5 && ans!== 'ENT'){
      console.log('ans=',ans);
      setAnswer(oldAnswer=> [...oldAnswer,ans]);
    } else if(ans === 'ENT' && answer.length >=5){
      console.log('Enter is pressed');
      setAnswers(oldAnswers=> [...oldAnswers,answer]);
      setAnsCount(prev=> prev+1);
      let pos=0;
      for(let i=0;i<answer.length;i++){
        pos = wordToPredict.indexOf(answer[i]);
        console.log('Search for=',answer[i]);
        console.log('pos=',pos);
        console.log('i=',i);

        if(pos !== -1 && pos!== i){
          console.log('Inside');
          pos= wordToPredict.indexOf(answer[i],i);
          if(pos === -1) {
            pos= wordToPredict.indexOf(answer[i],-i);
          }
        }

        if(pos === i){
            setCellColor(oldColors=> [...oldColors,'green']);
        } else if(pos !== i && pos !== -1){
            setCellColor(oldColors=> [...oldColors,'yellow']);
        } else {
            setCellColor(oldColors=> [...oldColors,'black']);
        }
      }
      setAnswer([]);
    }
  };

  console.log('cell color=',cellColor);
  console.log('My guess word=',guessWord);

  useEffect(()=> {
    switch ((ansCount)) {
      case 1: setGuessWord({...guessWord, first : {rowColors: cellColor.slice(0,5),rowLetters: answers[0]}}); break;
      case 2: setGuessWord({...guessWord, second : {rowColors: cellColor.slice(5,10),rowLetters: answers[1]}}); break;
      case 3: setGuessWord({...guessWord, third : {rowColors: cellColor.slice(10,15),rowLetters: answers[2]}}); break;
      case 4: setGuessWord({...guessWord, forth : {rowColors: cellColor.slice(15,20),rowLetters: answers[3]}}); break;
      case 5: setGuessWord({...guessWord, fifth : {rowColors: cellColor.slice(20,25),rowLetters: answers[4]}}); break;
      case 6: setGuessWord({...guessWord, sixth : {rowColors: cellColor.slice(25,30),rowLetters: answers[5]}}); break;
      default: break;
    }
  },[cellColor]);

  return (
    <div className='app_style'>
      <h1>MY WORDLE</h1>
      <AnswerGrid 
        answers={answers} 
        char={answer} 
        count={ansCount} 
        color={cellColor} 
        guesses={guessWord}
      />
      <Keyboard onKeyPressed={storeAnswer}/>
    </div>
  );
}
export default App;