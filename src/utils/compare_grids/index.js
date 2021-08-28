function compareGrids(grid1, grid2) {
    if (!Array.isArray(grid1) && !Array.isArray(grid2)) {
        return grid1 === grid2;
    }

    if (grid1.length !== grid2.length) {
        return false
    }

    for (let i = 0; i < grid1.length; i++) {
        if (!compareGrids(grid1[i],grid2[i])) {
            return false 
        }
    }

    return true;
}

export default compareGrids;