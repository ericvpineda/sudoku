import './Game.css'
import { useState } from 'react';

const Grid = (props) => {


    const numHandler = (event) => {
        props.getNumPadValue(event.target.value)
    }
    
    return (
        <div className="grid">
            <button className="num" onClick={numHandler} value="1">1</button>
            <button className="num" onClick={numHandler} value="2">2</button>
            <button className="num" onClick={numHandler} value="3">3</button>
            <button className="num" onClick={numHandler} value="4">4</button>
            <button className="num" onClick={numHandler} value="5">5</button>
            <button className="num" onClick={numHandler} value="6">6</button>
            <button className="num" onClick={numHandler} value="7">7</button>
            <button className="num" onClick={numHandler} value="8">8</button>
            <button className="num" onClick={numHandler} value="9">9</button>
        </div>
    )
}

export default Grid;

