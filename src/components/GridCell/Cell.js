import './Cell.css';

const Cell = props => {    

    const cellStyle = props.value ? 'cell cell_expand' : 'cell';
    return(
        <div className={cellStyle} style={{backgroundColor:props.color}}>
            <span className='alphabhet'>{props.value}</span>
        </div>
    );
}

export default Cell;