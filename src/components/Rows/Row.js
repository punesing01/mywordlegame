import { useEffect, useState } from "react";
import Cell from "../GridCell/Cell";
import './Row.css';

const Row = props => {

    return(
        <div className='gridrow'>
            <Cell value={props.answer? props.answer[0]:null} color={props.color? props.color[0]:''}/>
            <Cell value={props.answer? props.answer[1]:null} color={props.color? props.color[1]:''}/>
            <Cell value={props.answer? props.answer[2]:null} color={props.color? props.color[2]:''}/>
            <Cell value={props.answer? props.answer[3]:null} color={props.color? props.color[3]:''}/>
            <Cell value={props.answer? props.answer[4]:null} color={props.color? props.color[4]:''}/>
        </div>
    );
}

export default Row;