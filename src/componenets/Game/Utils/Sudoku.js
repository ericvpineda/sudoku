class Sudoku {

    constructor() {
        this.board = []
        this.new_board = []
    }

    solveBoard(board) {
        this._solver(board, false);
        return this.board;
    }

    _solver(board, rand) {
        let pos = this._findPosition(board)
        let row = pos[0]
        let col = pos[1]

        if (row === null) {
            this.board = board 
            return true;
        }

        let nums = [1,2,3,4,5,6,7,8,9]
        if (rand) {
            nums = this.shuffleArray(nums)
        }

        for (let i = 1; i < 10; i++) {
            let temp = null;

            if (rand === true) {
                temp = nums[i - 1]
            } else {
                temp = i
            }

            if (this._validPlacement(row, col, temp, board)) {
                
                board[row][col] = temp;

                if (this._solver(board, rand)) {
                    
                    return true;
                }

                board[row][col] = '.'
            
            }

        }

        return false;
    }

    _findPosition(board) {

        for (let x = 0; x < 9; x++) {
            
            for (let y = 0; y < 9; y++) {

                if (board[x][y] === "." || board[x][y] === "") {

                    return [x, y]

                }

            }
        }

        return [null, null]
    }

    _validPlacement(row, col, temp, board) {

        for (let i = 0; i < 9; i++) {
    
            let rowItem = board[row][i]
            let colItem = board[i][col]
            
            if (rowItem === temp || colItem === temp) {
                
                return false 
            }

        }

        let block_r = Math.floor(row / 3) * 3
        let block_c = Math.floor(col / 3) * 3

        for (let x = block_r; x < (block_r + 3); x++) {

            for (let y = block_c; y < (block_c + 3); y++) {

                if (board[x][y] === temp) {

                    return false;
                }
            }
        }

        return true;
    }

    isValidSudoku(board) {

        for (let i = 0; i < 9; i++) {
        
            let row = new Set()
            let col = new Set()
            let sqr = new Set()
    
            for (let j = 0; j < 9; j++) {
    
    
                let rowItem = board[i][j]
                let colItem = board[j][i]
                let sqrItem = board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + (j % 3)]
    
    
                if (row.has(rowItem) || col.has(colItem) || sqr.has(sqrItem)) {
    
                    return false 
                }
    
                if (rowItem !== ".") {
    
                    row.add(rowItem)
                }
    
                if (colItem !== ".") {
    
                    col.add(colItem)
                }
    
                if (sqrItem !== ".") {
    
                    sqr.add(sqrItem)
                }
    
            }
        }
    
        return true;

    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let random = Math.floor(Math.random() * (i + 1));
            [array[i], array[random]] = [array[random], array[i]]
        }
        return array;
    }

    createBoard(level) {
        for (let x = 0; x < 9; x++) {
            this.new_board.push([".", ".", ".", ".", ".", ".", ".", ".", "."])
        }
        this._solver(this.new_board, true)
        this._addDifficulty(this.new_board, level)
        return this.new_board
    }

    _addDifficulty(board, level) {

        let toRemove = 0;

        if (level === "easy") {
            toRemove = 2;
        } else if (level === "med") {
            toRemove = 4;
        } else {
            toRemove = 6;
        }
        
        for (let row of board) {

            for (let i = 0; i < toRemove; i++) {

                let selectCol = Math.floor(Math.random() * 9) 
                row[selectCol] = ""
            }
        }
    }
}

export default Sudoku;