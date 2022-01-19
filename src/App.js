import './App.css';
import Keyboard from './components/Keyboard/Keyboard';
import React, { useEffect, useState } from "react";
import AnswerGrid from './components/AnswerGrid/AnswerGrid';

function App() {
  const [answers, setAnswers] = useState([]);
  const [answer, setAnswer] = useState([]);
  const [ansCount, setAnsCount]= useState(0);
  const wordToPredict = "PEACE";
  const [cellColor, setCellColor] = useState([]);
  //const [rowColors, setRowColors] = useState([]);
  const [allRowsColors, setAllRowColors] = useState({
    first:[],
    second:[],
    third:[],
    forth:[],
    fifth:[],
    sixth:[]
  });

  //const [allRowColors, setAllRowColors] = useState([]);

  console.log('answer=',answer);
  console.log('answers=',answers);
  console.log('ans count=',ansCount);

  const storeAnswer = (ans) => {
    if(answer.length <5 && ans!== 'ENT'){
      //setCellColor([]);
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
      //setAllRowColors(prevState=> [...prevState,...rowColors]);
      setAnswer([]);
    }
  };

  console.log('cell color=',cellColor);
  console.log('Row colors=',allRowsColors);


  /*useEffect(()=> {
    //let colors = [...cellColor];
    //setRowColors(prevColors=> [...prevColors,...colors]);
    setRowColors(prevColors=>[...prevColors,cellColor]);
  },[cellColor]);*/

  /*useEffect(()=> {
    let colors = [...rowColors];
    setAllRowColors(prevColors=> [...prevColors,[...colors]]);
  },[rowColors]);*/

  useEffect(()=> {
    console.log('before switch=',allRowsColors);
    switch(ansCount){
      case 1:  console.log('Answer1');
              /*setAllRowColors(prevState => {
                console.log('here prev state=',prevState);
                return {...rowColors,
                  first:cellColor};
              });*/
              setAllRowColors({
                ...allRowsColors,
                first:cellColor
              });
              break;
      case 2:  console.log('Answer2');
        
      /*setAllRowColors(prevState => {
        console.log('here prev state=',prevState);
        return {...rowColors,
          second:cellColor};
      });*/
      setAllRowColors({
        ...allRowsColors,
        second:cellColor
      });
              break;
      case 3: console.log('Answer3');
             /* setAllRowColors(prevState => {
                return {...rowColors,
                        third:cellColor};
                      });*/
                      setAllRowColors({
                        ...allRowsColors,
                        third:cellColor
                      });
              break;
      case 4:  console.log('Answer4');
      setAllRowColors({
        ...allRowsColors,
        forth:cellColor
      });
              break;
      case 5:  console.log('Answer5');
      setAllRowColors({
        ...allRowsColors,
        fifth:cellColor
      });
              break;
      case 6:  console.log('Answer6');
      setAllRowColors({
        ...allRowsColors,
        sixth:cellColor
      });
              break;
      default:break;
    }
  },[cellColor]);

  console.log('all Row colors=',allRowsColors);

  return (
    <div className='app_style'>
      <h1>MY WORDLE</h1>
      <AnswerGrid 
        answers={answers} 
        char={answer} 
        count={ansCount} 
        color={cellColor} 
        rowColor={allRowsColors}
      />
      <Keyboard onKeyPressed={storeAnswer}/>
    </div>
  );
}
export default App;