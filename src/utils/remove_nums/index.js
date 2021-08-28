import globals from '../../global'
import FillGrid from '../fill_grid'
import gridCopy from '../copy_grid'

function removeNumbers(grid, attempts = 5) {

    while (attempts > 0) {
        let row = randomInt()
        let col = randomInt()

        while (grid[row][col] === ".") {
            row = randomInt()
            col = randomInt()
        }

        const prev = grid[row][col]
        grid[row][col] = "."

        const copyGrid = gridCopy(grid)
        globals.COUNTER = 0
        // grid = FillGrid(grid, false)


        if (global.counter !== 1) {
            // grid[row][col] = prev
            attempts -= 1;
        }
    }

    return grid 
}

function randomInt() {
    return Math.floor(Math.random() * 9) 
}



export default removeNumbers;