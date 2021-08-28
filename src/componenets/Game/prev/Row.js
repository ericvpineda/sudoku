import Cell from './Cell'
import { Children } from 'react'

const Row = (props) => {
    
    return (
        Children.toArray(props.row.map((col, col_idx) => {
            return <Cell col={col} colIndex={col_idx} numPadValue={props.numPadValue}
            standard={col === "" ? "false" : 'true'}></Cell>
        }))
    )
} 

export default Row;