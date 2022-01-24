import Keyboardkey from "../KeyboardKeys/Keyboardkey";
import '../Keyboard/Keyboard.css'

const Keyboard = (props) => {
    const firstRow = 'QWERTYUIOP';
    const secondRow = 'ASDFGHJKL';
    const thirdRow = 'ZXCVBNM-';
    console.log('keyboard keys=',props.keyBoardKey);
    
    return (
        <div className='keyboard'>
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
            <div className='row last_row__margin'>
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