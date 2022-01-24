import '../KeyboardKeys/Keyboardkey.css';
import React, { useState,useEffect } from "react";

const Keyboardkey = (props) => {
    const [color, setColor] = useState('');

    useEffect(()=> {
        if(props.keyBoardKey){
            props.keyBoardKey.forEach(boardKey=> {    
                if(boardKey.name === props.name){
                    console.log('boardKey.color=',boardKey.color);
                    setColor(boardKey.color);
                } 
            })
        }
    },[props.count]);
    
    return(
        <div className="key" 
            id={props.name} 
            style={{backgroundColor:color}}
            onClick= {()=> {props.onKeyHit(props.name)}}>
            <span className="letter">{props.name}</span>
        </div>
    );
}

export default Keyboardkey;