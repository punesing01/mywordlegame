import { useEffect, useState } from 'react';
import Row from '../Rows/Row';
import './AnswerGrid.css';

const AnswerGrid = props => {
   
    return(
        <div className='answers'>
            <Row count='0' answer={props.count === 0 ? props.char : props.answers[0]} color={props.count === 1 ?props.color:props.rowColor}/>
            <Row count='1' answer={props.count === 1 ? props.char : props.answers[1]} color={props.count === 2 ? props.color:props.rowColor}/>
            <Row count='2' answer={props.count === 2 ? props.char : props.answers[2]} color={props.count === 3 ? props.color:props.rowColor}/>
            <Row count='3' answer={props.count === 3 ? props.char : props.answers[3]} color={props.count === 4 ? props.color:props.rowColor}/>
            <Row count='4' answer={props.count === 4 ? props.char : props.answers[4]} color={props.count === 5 ? props.color:props.rowColor}/>
            <Row count='5' answer={props.count === 5 ? props.char : props.answers[5]} color={props.count === 6 ? props.color:props.rowColor}/>
        </div>
    );
}

export default AnswerGrid;