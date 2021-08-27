import RowElement from './RowElement'

const Row = (props) => {
    
    return (
        props.row.map((col, col_idx) => {
            return <RowElement col={col} colIndex={col_idx} numPadValue={props.numPadValue}
            standard={col === "" ? "false" : 'true'}></RowElement>
        })
    )
} 

export default Row;