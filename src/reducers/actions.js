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
 
export {createGrid, selectCell, fillCell};