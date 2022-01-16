import Cell from "../GridCell/Cell";
import './Row.css';

const Row = props => {
    return(
        <div className='gridrow'>
            <Cell value={props.answer? props.answer[0]:null}/>
            <Cell value={props.answer? props.answer[1]:null}/>
            <Cell value={props.answer? props.answer[2]:null}/>
            <Cell value={props.answer? props.answer[3]:null}/>
            <Cell value={props.answer? props.answer[4]:null}/>
        </div>
    );
}

export default Row;