import { useState } from "react"
import './Game.css'

const Cell = (props) => {

    const [colValue, setColValue] = useState(props.col)
    
    function changeHandler(event) {
        if (props.standard === "false") {
            setColValue(event.target.value.slice(0,1))
        }

    }
    
    if (props.standard === "false") {
        return (
            <input type="number" onInput={changeHandler} value={colValue} 
                className={`column-${props.colIndex} col form-control input`}>
            </input>
        )
    }

    return (
        <input type="text" value={colValue} className={`column-${props.colIndex} col base`}></input>
    )
    
}

export default Cell;