import Sudoku from './Utils/Sudoku.js'
import * as options from './Utils/Board'
import React from 'react'
import Row from './Row'
import './Game.css'
import {useState, Children, useMemo} from 'react'


// BUTTONS 

const Game = (props) => {

    var board;
    const sudoku = useMemo(() => {
        return new Sudoku();
    }, [])

    buildSudoku()

    function buildSudoku() {
        var level = options.get_difficulty()
        board = sudoku.createBoard(level);
        options.highlight(board)
    }

    function checkHandler() {
        const result = sudoku.isValidSudoku(board)
        options.validation_msg(result)
    }

    function solveHandler() {
        const solution = sudoku.solveBoard(board)
        options.fill_board(solution, true)
        options.disable_buttons()
    }

    function newGame() {
        options.clear_board()
        buildSudoku()
        options.fill_board(board, false)
        options.enable_buttons()
    }

    function resetHandler() {
        options.reset()
    }

    const [numPadValue, setNumPadValue] = useState(10);

    function numHandler (event) {
        setNumPadValue(event.target.value)
        console.log(numPadValue)
    }

    return (
        <div>
           
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
                <div className="container-fluid">
                
                    <span className="navbar-brand m-auto">Sudoku</span>

                </div>

            </nav>


            <main>

                <div className="container container-css">

                    {board && Children.toArray(board.map((row, idx) => {
                        return <div className={`row row-${idx}`}>
                            <Row row={row} numPadValue={numPadValue}></Row>
                        </div>
                    }))}

                </div>

              <div className="config">

                <div id='success_msg' className="alert alert-success p-4 mb-3 off" role="alert">
                    <h4 className="alert-heading">Well done!</h4>
                    <hr></hr>
                    <p className="mb-0">You successfully completed this level!</p>
                </div>

                <div id='failure_msg' className="alert alert-danger p-4 mb-3 off" role="alert">
                  <h4 className="alert-heading">Sorry!</h4>
                  <hr></hr>
                  <p className="mb-0">You can do it, keep trying!</p>
                </div>


                {/* <NumPad getNumPadValue={numPadValueHandler}></NumPad> */}
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

                <div className="buttons">

                    <div className="game-func">

                        <button id='check' onClick={checkHandler} className="btn func">Check</button>
                        <button id='solve' onClick={solveHandler} className="btn func">Solve</button>
                        <button id='reset' onClick={resetHandler} className="btn func">Reset</button>

                    </div>

                    <div className="settings">

                        <button id='new_game' onClick={newGame} className='btn func'>New Game</button>

                        <select id='level' className="form-select func">
                            <option value="easy">Easy</option>
                            <option value="med">Med</option>
                            <option value="hard">Hard</option>
                        </select> 

                    </div>

                </div>


              </div>


            </main>

            {/* <footer className="bg-dark text-muted sticky">
            
                <div className="p-3 footer">
                © 2021 Copyright:
                </div>

            </footer> */}

        </div>
    )
}

export default Game;