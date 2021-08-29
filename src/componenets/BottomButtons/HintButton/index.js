import Container from "../../Number/button/styles";
import Superscript from "./Superscript";
import { useDispatch, useSelector } from "react-redux";
import { decrementHint } from "../../../reducers";

const HintButton = () => {

    const dispatch = useDispatch()
    const state = useSelector(({hints}) => ({hints}))
    const hintHandler = () => {
        dispatch(decrementHint())
    }

    return (
        <Container onClick={hintHandler} style={{position: "relative"}}>
            Hint
            <Superscript> 
                <span className="badge badge-secondary">{state.hints}</span>
            </Superscript>
        </Container>
    )
}

export default HintButton;