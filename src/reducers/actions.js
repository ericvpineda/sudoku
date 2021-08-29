import * as types from './types'

const createGrid = () => {
    return {
        type : types.CREATE_GRID
    }
}

const selectCell = (coords) => {
    return {
        type : types.ACTIVE_CELL,
        coords
    }
}

const fillCell = (value, coords) => {
    return {
        type : types.FILL_CELL,
        value,
        coords
    }
}

const deleteCell = (coords) => {
    return {
        type : types.DELETE_CELL,
        coords
    }
}

const decrementHint = (value) => {
    return {
        type : types.DECREMENT_HINT,
        value
    }
}

const solveGrid = (coords, value) => {
    return {
        type : types.SOLVE_GRID,
        value,
        coords
    }
}

const solved = () => {
    return {
        type : types.SOLVED
    }
}
 
export {createGrid, selectCell, fillCell, deleteCell, decrementHint, solveGrid, solved};