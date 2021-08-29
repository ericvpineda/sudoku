import * as options from '../utils'
import * as types from './types'

const initState = []

function reducer(state = initState, action) {
    switch(action.type) {
        case types.CREATE_GRID:
            const solvedGrid = options.createGrid()
            const baseGrid = options.gridCopy(solvedGrid)
            const challengeGrid = options.removeNumbers(baseGrid, 30)
            const workingGrid = options.gridCopy(challengeGrid)
            const hints = 3;
            const solved = false;
            return {
                ...state,
                workingGrid,
                solvedGrid,
                challengeGrid,
                baseGrid,
                hints,
                solved
            }
        case types.ACTIVE_CELL:
            return {
                ...state,
                selectedCell : action.coords,
            }
        case types.FILL_CELL:
            if (state.workingGrid && state.challengeGrid) {
                const row = action.coords[0]
                const col = action.coords[1]
                const attempt = action.value;
                state.workingGrid[row][col] = attempt

                if (options.compareGrids(state.workingGrid, state.solvedGrid)) {
                    alert('Completed, good job!')
                }
                return {
                    ...state,
                    workingGrid : [...state.workingGrid]
                }
            }
            return state;
        case types.DELETE_CELL:
            if (!state.solved && state.workingGrid && state.challengeGrid && state.baseGrid) {
                const row = action.coords[0]
                const col = action.coords[1]
                const baseValue = state.baseGrid[row][col]

                if (baseValue === ".") {
                    state.workingGrid[row][col] = "."
                    return {
                        ...state,
                        workingGrid : [...state.workingGrid]
                    }
                }
                return state;
            }

        case types.DECREMENT_HINT:
            if (!state.solved && !options.compareGrids(state.workingGrid, state.solvedGrid)) {
                if (state.workingGrid && state.solvedGrid && state.hints > 0) {
                    var [row, col] = options.nextValid(state.workingGrid, state.solvedGrid) 
                    var value = state.solvedGrid[row][col]
    
                    state.workingGrid[row][col] = value;
                    state.hints -= 1;
                    return {
                        ...state,
                        hints : state.hints,
                        workingGrid : [...state.workingGrid]
                    }
                } else {
                    alert('Out of hints!')
                    return state;
                }
            }
            return state;
           
        case types.SOLVE_GRID:
            if (!state.solved && state.workingGrid && state.solvedGrid) {
                const row = action.coords[0]
                const col = action.coords[1]
                state.workingGrid[row][col] = action.value;
                return {
                    ...state,
                    workingGrid : [...state.workingGrid]
                }
            }
            return state; 
        
        case types.SOLVED:
            if (state.workingGrid && state.solvedGrid) {
                state.solved = true;
                return {
                    ... state,
                    solved : state.solved 
                }
            }
            return state;

        default:
            return state
    }
}

export default reducer;