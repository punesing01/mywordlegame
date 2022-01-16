import './Cell.css';

const Cell = props => {
    return(
        <div className='cell'>
            <span className='alphabhet'>{props.value}</span>
        </div>
    );
}

export default Cell;