var resultBoard = null;

const FillGrid = (board, rand) => {
    
    solver(board, rand)
    return resultBoard;
}


var nums = [1,2,3,4,5,6,7,8,9]

function solver(board, rand) {
    let pos = findPosition(board)
    let row = pos[0]
    let col = pos[1]

    if (row === null) {
        resultBoard = board 
        return true;
    }

    if (rand) {
        nums = shuffleArray(nums)
    }

    for (let i = 1; i < 10; i++) {
        let temp = null;

        if (rand === true) {
            temp = nums[i - 1]
        } else {
            temp = i
        }

        if (validPlacement(row, col, temp, board)) {
            
            board[row][col] = temp;

            if (solver(board, rand)) {
                return true;
            }
            board[row][col] = '.'
        }
    }
    return false;
}

function findPosition(board) {
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            if (board[x][y] === "." || board[x][y] === "") {
                return [x, y]
            }
        }
    }
    return [null, null]
}

function validPlacement(row, col, temp, board) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === temp || board[i][col] === temp) {
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

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]]
    }
    return array;
}

export default FillGrid;