import './Keyboardkey.css';
import React from "react";

const Keyboardkey = (props) => {
    return(
        <div className="key" id={props.name} onClick= {()=> {
            props.onKeyHit(props.name)}
            }>
            <span className="letter">{props.name}</span>
        </div>
    );
};
export default Keyboardkey;