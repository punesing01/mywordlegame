import Keyboardkey from "../KeyboardKeys/Keyboardkey";
import '../Keyboard/Keyboard.css'
import React, {useEffect, useState} from "react";

const Keyboard = (props) => {
    const firstRow = 'QWERTYUIOP';
    const secondRow = 'ASDFGHJKL';
    const thirdRow = 'ZXCVBNM';
    console.log('keyboard keys=',props.keyBoardKey);
    
    return (
        <div>
            <div className='row'>
                {
                    [...firstRow].map(key => {
                        return ( <Keyboardkey 
                                    key={key} 
                                    name={key} 
                                    keyBoardKey={props.keyBoardKey}
                                    onKeyHit={props.onKeyPressed}
                                    count={props.count}
                                />)
                    })
                }
            </div>
            <div className='row row_space'>
            {
                    [...secondRow].map(key => {
                        return ( <Keyboardkey 
                                    key={key} 
                                    name={key} 
                                    keyBoardKey={props.keyBoardKey}
                                    onKeyHit={props.onKeyPressed}
                                    count={props.count}
                                />)
                    })
                }
            </div>
            <div className='row row_space'>
                <Keyboardkey 
                key='ENT'
                name='ENT' 
                keyBoardKey={props.keyBoardKey}
                onKeyHit={props.onKeyPressed}
                count={props.count}
                />
                {
                    [...thirdRow].map(key => {
                        return ( <Keyboardkey 
                                    key={key} 
                                    name={key} 
                                    keyBoardKey={props.keyBoardKey}
                                    onKeyHit={props.onKeyPressed}
                                    count={props.count}
                                />)
                    })
                }
                <Keyboardkey 
                    key='<='
                    name='<=' 
                    keyBoardKey={props.keyBoardKey}
                    onKeyHit={props.onKeyPressed}
                    count={props.count}
                />
            </div>
        </div>
    );
}

export default Keyboard;