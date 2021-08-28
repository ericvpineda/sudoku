function gridCopy(grid) {
    var copy = []
    for (let i = 0; i < 9; i++) {
        copy.push([".",".",".",".",".",".",".",".",".",])
    }
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            copy[i][j] = grid[i][j]
        }
    }
    return copy;
}

export default gridCopy;