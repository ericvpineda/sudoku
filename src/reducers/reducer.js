import gridCopy from '../utils/copy_grid'
import {createGrid} from '../utils/create_grid'
import removeNumbers from '../utils/remove_nums'
import compareGrids from '../utils/compare_grids'
import * as types from './types'

const initState = []

function reducer(state = initState, action) {
    switch(action.type) {
        case types.CREATE_GRID:
            const solvedGrid = createGrid()
            const copyGrid = gridCopy(solvedGrid)
            const challengeGrid = removeNumbers(copyGrid, 30)
            const workingGrid = gridCopy(challengeGrid)
            return {
                ...state,
                workingGrid,
                solvedGrid,
                challengeGrid
            }
        case types.ACTIVE_CELL:
            console.log(action.coords)
            return {
                ...state,
                selectedCell : action.coords,
            }
        case types.FILL_CELL:
            if (state.workingGrid && state.challengeGrid) {
                const row = action.coords[0]
                const col = action.coords[1]
                const attempt = action.value;
                
                if (state.solvedGrid[row][col] !== attempt) {
                    alert('Incorrect Option!')
                    return state
                }
                state.workingGrid[row][col] = attempt

                if (compareGrids(state.workingGrid, state.solvedGrid)) {
                    alert('Completed, good job!')
                }
                return {
                    ...state,
                    workingGrid : [...state.workingGrid]
                }
            }
            return state;
        default:
            return state
    }
}

export default reducer;