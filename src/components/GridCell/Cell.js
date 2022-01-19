import { useState } from 'react';
import './Cell.css';

const Cell = props => {
    
    return(
        <div className='cell' style={{backgroundColor:props.color}}>
            <span className='alphabhet'>{props.value}</span>
        </div>
    );
}

export default Cell;