import './App.css';
import Keyboard from './components/Keyboard/Keyboard';
import React, { useEffect, useState } from "react";
import AnswerGrid from './components/AnswerGrid/AnswerGrid';
import Banner from './components/ResultBanner/Banner';

function App() {
  const [answers, setAnswers] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [ansCount, setAnsCount]= useState(0);
  const [rowColor, setRowColor] = useState([]);;
  const [wordToPredict, setWordToPredict] = useState('');
  const guessLetters = "abcdefghijklmnopqrstuvwxyz";
  const [finalResult, setFinalResult] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const [keyBoardKey, setKeyBoardKey] = useState([{color:'',name:''}]);
  const [keyCount, setKeyCount] = useState(0);

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
              //console.log('data=',data[0].word);
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
      setKeyCount(prev=> prev+1);
      setAnswer(oldAnswer=> [...oldAnswer,ans]);

      if(ans === '<='){
        removeLetters();
      } else {
      let keyPos = wordToPredict.indexOf(ans);
      console.log('Search for key=',ans);
      console.log('key pos=',keyPos);
      switch(true){
        case keyPos === -1: 
        keyBoardKey.forEach(
          k => {
            if(k.name !== ans && k.name!== null){
              console.log(`checking : ${k.name}: ans`);
              setKeyBoardKey([...keyBoardKey,
                {color:'#787c7e',
                name:ans}]);
            }
          }
        )
        break;
        case keyPos === keyCount: 
        keyBoardKey.forEach(
          k =>{
            if(k.name !== ans && k.name!== null){
              console.log(`checking : ${k.name}: ans`);

              setKeyBoardKey([...keyBoardKey,
                {color:'#6aaa64',
                name:ans}]);
            }
          })
        break;
        case keyPos < 5: 
        keyBoardKey.forEach(
          k =>{
            if(k.name !== ans && k.name!== null){
              console.log(`checking : ${k.name}: ans`);

              setKeyBoardKey([...keyBoardKey,
                {color:'#c9b458',
                name:ans}]);
            }
          })                                 
        break;
        default:break;
      }}
    } else if(ans === 'ENT' && answer.length >=5){
      console.log('Enter is pressed');
      setKeyCount(0);
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
          //green
            setRowColor(oldColors=> [...oldColors,'#6aaa64']);
        } else if(pos !== i && pos !== -1){
          //yellow
            setRowColor(oldColors=> [...oldColors,'#c9b458']);
        } else {
          //gray
            setRowColor(oldColors=> [...oldColors,'#787c7e']);
        }
      }
      checkForGameOver();
      setAnswer([]);
    } else if(ans === '<=' && answer.length >=5){
      removeLetters();
    }
  };

  const removeLetters = () => {
    let lastLetter = answer[answer.length-1];
    let updatedAns = answer.filter(element => element!== lastLetter);
    setAnswer(oldAnswer => [...updatedAns]);
  }

  console.log('key color=',keyBoardKey.keys);
  console.log('Object.keys(keyBoardKey)=',keyBoardKey);

  console.log('cell color=',rowColor);
  console.log('My guess word=',guessWord);

  useEffect(()=> {
    switch ((ansCount)) {
      case 1: setGuessWord({...guessWord, first : {rowColors: rowColor.slice(0,5),rowLetters: answers[0], done:true}}); break;
      case 2: setGuessWord({...guessWord, second : {rowColors: rowColor.slice(5,10),rowLetters: answers[1],done:true}}); break;
      case 3: setGuessWord({...guessWord, third : {rowColors: rowColor.slice(10,15),rowLetters: answers[2],done:true}}); break;
      case 4: setGuessWord({...guessWord, forth : {rowColors: rowColor.slice(15,20),rowLetters: answers[3],done:true}}); break;
      case 5: setGuessWord({...guessWord, fifth : {rowColors: rowColor.slice(20,25),rowLetters: answers[4],done:true}}); break;
      case 6: setGuessWord({...guessWord, sixth : {rowColors: rowColor.slice(25,30),rowLetters: answers[5],done:true}}); break;
      default: break;
    }
  },[rowColor]);

  const checkForGameOver = ()=>{
    let finalTitle = '';
    if(answer.join('') === wordToPredict){
      setGameOver(true);
      console.log(`You have won the game in ${ansCount} guesses`);
      switch(ansCount){
        case 0:
        case 1 : finalTitle = 'Excellent!!';break;
        case 2 : finalTitle = 'Super!!';break;
        case 3 : finalTitle = 'Great!!';break;
        case 4 : finalTitle = 'Nice!!';break;
        case 5 : finalTitle = 'Phew!!';break;
        default:break;
      }      
    } else if(ansCount === 5 && answer.join('') !== wordToPredict){
       setGameOver(true);
       finalTitle = wordToPredict
    }
      setFinalResult(finalTitle);
    }

  return (
    <div className='app_style'>
      <h1>MY WORDLE</h1>
      <Banner title={finalResult}/>
      <AnswerGrid 
        answers={answers} 
        char={answer} 
        count={ansCount} 
        color={rowColor} 
        guesses={guessWord}
      />
      <Keyboard 
          onKeyPressed={storeAnswer} 
          keyBoardKey={keyBoardKey} 
          count={ansCount}
      />
    </div>
  );
}
export default App;