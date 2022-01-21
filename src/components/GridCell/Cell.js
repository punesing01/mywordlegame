import './Cell.css';

const Cell = props => {    

    const beforeCellStyle = props.value ? 'cell cell_expand' : 'cell';
    const afterCellStyle = props.color ? `${beforeCellStyle} alphabhet_white` : beforeCellStyle;
    return(
        <div className={afterCellStyle} style={{backgroundColor:props.color}}>
            <span className='alphabhet'>{props.value}</span>
        </div>
    );
}

export default Cell;