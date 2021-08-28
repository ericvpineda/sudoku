import FillGrid from '../fill_grid'

const createGrid = () => {
    const grid = []
    for (let i = 0; i < 9; i++) {
        grid.push([".",".",".",".",".",".",".",".",".",])
    }
    FillGrid(grid, true)
    return grid;
}

export {createGrid};