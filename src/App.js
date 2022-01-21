import './App.css';
import Keyboard from './components/Keyboard/Keyboard';
import React, { useEffect, useState } from "react";
import AnswerGrid from './components/AnswerGrid/AnswerGrid';
import Banner from './components/ResultBanner/Banner';

function App() {
  const [answers, setAnswers] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [ansCount, setAnsCount]= useState(0);
  const [cellColor, setCellColor] = useState([]);;
  const [wordToPredict, setWordToPredict] = useState('');
  const guessLetters = "abcdefghijklmnopqrstuvwxyz";
  const [finalResult, setFinalResult] = useState('');
  const [gameOver, setGameOver] = useState(false);

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
    if(answer.length <5 && ans!== 'ENT' && !gameOver ){
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
      checkForGameOver();
      setAnswer([]);
    }
  };

  console.log('cell color=',cellColor);
  console.log('My guess word=',guessWord);

  useEffect(()=> {
    switch ((ansCount)) {
      case 1: setGuessWord({...guessWord, first : {rowColors: cellColor.slice(0,5),rowLetters: answers[0], done:true}}); break;
      case 2: setGuessWord({...guessWord, second : {rowColors: cellColor.slice(5,10),rowLetters: answers[1],done:true}}); break;
      case 3: setGuessWord({...guessWord, third : {rowColors: cellColor.slice(10,15),rowLetters: answers[2],done:true}}); break;
      case 4: setGuessWord({...guessWord, forth : {rowColors: cellColor.slice(15,20),rowLetters: answers[3],done:true}}); break;
      case 5: setGuessWord({...guessWord, fifth : {rowColors: cellColor.slice(20,25),rowLetters: answers[4],done:true}}); break;
      case 6: setGuessWord({...guessWord, sixth : {rowColors: cellColor.slice(25,30),rowLetters: answers[5],done:true}}); break;
      default: break;
    }
  },[cellColor]);

  const checkForGameOver = ()=>{
    if(answer.join('') === wordToPredict){
      setGameOver(true);
      console.log(`You have won the game in ${ansCount} guesses`);
      let finalTitle = '';
      switch(ansCount){
        case 0:
        case 1 : finalTitle = 'Excellent!!';break;
        case 2 : finalTitle = 'Super!!';break;
        case 3 : finalTitle = 'Great!!';break;
        case 4 : finalTitle = 'Nice!!';break;
        case 5 : finalTitle = 'Phew!!';break;
        default:break;
      }
      setFinalResult(finalTitle);
    }
  }

  return (
    <div className='app_style'>
      <h1>MY WORDLE</h1>
      <Banner title={finalResult}/>
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