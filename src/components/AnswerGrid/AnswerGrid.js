import Row from '../Rows/Row';
import './AnswerGrid.css';

const AnswerGrid = props => {
    return(
        <div className='answers'>
            <Row answer={props.count === 0 ? props.char : props.guesses.first.rowLetters} color={props.guesses.first ? props.guesses.first.rowColors:''}/>
            <Row answer={props.count === 1 ? props.char : props.guesses.second.rowLetters} color={props.guesses.second ? props.guesses.second.rowColors:''}/>
            <Row answer={props.count === 2 ? props.char : props.guesses.third.rowLetters} color={props.guesses.third ? props.guesses.third.rowColors:''}/>       
            <Row answer={props.count === 3 ? props.char : props.guesses.forth.rowLetters} color={props.guesses.forth ? props.guesses.forth.rowColors:''}/>
            <Row answer={props.count === 4 ? props.char : props.guesses.fifth.rowLetters} color={props.guesses.fifth ? props.guesses.fifth.rowColors:''}/>
            <Row answer={props.count === 5 ? props.char : props.guesses.sixth.rowLetters} color={props.guesses.sixth ? props.guesses.sixth.rowColors:''}/>
        </div>
    );
}

export default AnswerGrid;