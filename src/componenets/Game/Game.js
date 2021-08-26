import Sudoku from './Utils/Sudoku.js'
import * as options from './Utils/Board'
import React from 'react'
import $ from 'jquery'
import './Game.css'

// BUTTONS 

// note: remove stay focused effect 
$('button').on('click', function (e) {
    // $(this).blur()
})

const Game = (props) => {

    const sudoku = new Sudoku()
    var board;

    React.useEffect(() => {
        buildSudoku()
    })

    function buildSudoku() {
        const level = options.get_difficulty()
        board = sudoku.createBoard(level);
        options.generate(board);
        options.highlight(board)
    }

    function checkHandler() {
        const result = sudoku.isValidSudoku(board)
        options.validation_msg(result)
    }

    function solveHandler() {
        const solution = sudoku.solveBoard(board)
        options.fill_board(solution)
        options.disable_buttons()
    }

    function newGame() {
        options.clear_board()
        buildSudoku()
        options.enable_buttons()
    }

    function resetHandler() {
        options.reset()
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

                    <div className="row row-0"></div>
                    <div className="row row-1"></div>
                    <div className="row row-2"></div>
                    <div className="row row-3"></div>
                    <div className="row row-4"></div>
                    <div className="row row-5"></div>
                    <div className="row row-6"></div>
                    <div className="row row-7"></div>
                    <div className="row row-8"></div>

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

                <div className="grid">

                    <button className="num">1</button>
                    <button className="num">2</button>
                    <button className="num">3</button>
                    <button className="num">4</button>
                    <button className="num">5</button>
                    <button className="num">6</button>
                    <button className="num">7</button>
                    <button className="num">8</button>
                    <button className="num">9</button>

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

            <footer className="bg-dark text-muted sticky">
            
                <div className="p-3 footer">
                © 2021 Copyright:
                </div>

            </footer>

        </div>
    )
}

export default Game;