import Sudoku from './Utils/Sudoku.js'
import * as options from './Utils/Board'
import React from 'react'
import $ from 'jquery'
import Row from './Row'
import './Game.css'
import {useState, useMemo} from 'react'
import Grid from './Grid'


// BUTTONS 

const Game = (props) => {

    const sudoku = new Sudoku();
    var board;
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

    const [numPadValue, setNumPadValue] = useState(null);

    function numPadValueHandler (num) {
        setNumPadValue(num)
    }

    return (
        <div className="body">
           
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
                <div className="container-fluid">
                
                    <span className="navbar-brand m-auto">Sudoku</span>

                </div>

            </nav>


            <main>

                <div className="container container-css">

                    {board.map((row, idx) => {
                        return <div className={`row row-${idx}`}>
                            <Row row={row} numPadValue={numPadValue}></Row>
                        </div>
                    })}

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


                <Grid getNumPadValue={numPadValueHandler}></Grid>

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

            <footer className="bg-dark text-muted sticky">
            
                <div className="p-3 footer">
                © 2021 Copyright:
                </div>

            </footer>

        </div>
    )
}

export default Game;