import Keyboardkey from "../KeyboardKeys/Keyboardkey";
import '../Keyboard/Keyboard.css'
import React from "react";

const Keyboard = (props) => {

    return (
        <div>
            <div className='row'>
                <Keyboardkey name='Q' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='W' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='E' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='R' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='T' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='Y' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='U' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='I' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='O' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='P' onKeyHit={props.onKeyPressed}/>
            </div>
            <div className='row row_space'>
                <Keyboardkey name='A' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='S' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='D' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='F' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='G' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='H' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='J' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='K' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='L' onKeyHit={props.onKeyPressed}/>
            </div>
            <div className='row row_space'>
                <Keyboardkey name='ENT' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='Z' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='X' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='C' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='V' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='B' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='N' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='M' onKeyHit={props.onKeyPressed}/>
                <Keyboardkey name='<=' onKeyHit={props.onKeyPressed}/>
            </div>
        </div>
    );
};

export default Keyboard;