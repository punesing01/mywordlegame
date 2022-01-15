import Keyboardkey from "../KeyboardKeys/Keyboardkey";
import '../Keyboard/Keyboard.css'
import { useState } from "react";
import React from "react";

const Keyboard = () => {

    const [keyPressed, setKeyPressed] = useState('');
    console.log(keyPressed);

    return (
        <div>
            <div className='row'>
                <Keyboardkey name='Q' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='W' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='E' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='R' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='T' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='Y' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='U' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='I' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='O' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='P' onKeyHit={setKeyPressed}/>
            </div>
            <div className='row row_space'>
                <Keyboardkey name='A' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='S' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='D' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='F' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='G' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='H' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='J' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='K' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='L' onKeyHit={setKeyPressed}/>
            </div>
            <div className='row row_space'>
                <Keyboardkey name='ENT' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='Z' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='X' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='C' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='V' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='B' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='N' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='M' onKeyHit={setKeyPressed}/>
                <Keyboardkey name='<=' onKeyHit={setKeyPressed}/>
            </div>
        </div>
    );
};


export default Keyboard;