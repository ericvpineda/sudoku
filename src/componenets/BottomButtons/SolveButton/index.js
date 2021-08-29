import Container from "../../Number/button/styles";
import { useDispatch, useSelector } from "react-redux";
import { solveGrid, solved } from "../../../reducers";

const SolveButton = () => {

    const dispatch = useDispatch();
    const state = useSelector(({workingGrid, solvedGrid, solved}) => ({workingGrid, solvedGrid, solved}))
    
    const solveHandler = () => {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (state.workingGrid[i][j] !== state.solvedGrid[i][j]) {
                    dispatch(
                        solveGrid([i, j], state.solvedGrid[i][j])
                    )
                   
                }
            }
        }
        dispatch(solved())
    }

    return (
        <Container disabled={state.solved} onClick={solveHandler}>Solve</Container>
    )
}

export default SolveButton;