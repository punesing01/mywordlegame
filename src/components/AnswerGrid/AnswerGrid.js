import { useEffect, useState } from 'react';
import Row from '../Rows/Row';
import './AnswerGrid.css';

const AnswerGrid = props => {
    return(
        <div className='answers'>
            <Row answer={props.count === 0 ? props.char : props.answers[0]}/>
            <Row answer={props.count === 1 ? props.char : props.answers[1]}/>
            <Row answer={props.count === 2 ? props.char : props.answers[2]}/>
            <Row answer={props.count === 3 ? props.char : props.answers[3]}/>
            <Row answer={props.count === 4 ? props.char : props.answers[4]}/>
            <Row answer={props.count === 5 ? props.char : props.answers[5]}/>
        </div>
    );
}

export default AnswerGrid;