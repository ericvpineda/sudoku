import Container from "../../Number/button/styles";
import Superscript from "./Superscript";
import { useDispatch, useSelector } from "react-redux";
import { decrementHint } from "../../../reducers";
import Button from "../../Number/button/styles";

const HintButton = () => {

    const dispatch = useDispatch()
    const state = useSelector(({hints, solved}) => ({hints, solved}))
    const hintHandler = () => {
        dispatch(decrementHint())
    }

    return (
        <Button disabled={state.solved} onClick={hintHandler} style={{position: "relative"}}>
            Hint
            <Superscript> 
                <span className="badge badge-secondary">{state.hints}</span>
            </Superscript>
        </Button>
    )
}

export default HintButton;