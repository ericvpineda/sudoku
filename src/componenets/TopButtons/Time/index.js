import Container from "./styles";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementTime } from "../../../reducers";

const Time = () => {

    const dispatch = useDispatch()
    const state = useSelector(({ solvedGrid, time }) => ({ solvedGrid, time }))

    useEffect(() => {
        let interval = setInterval(() => {
                dispatch(incrementTime())
            }, 10)
        return () => clearInterval(interval)
    }, [state.solvedGrid])

    return (
        <Container>Time: 
            <span> {("0" + Math.floor(((state.time / 60000) % 600))).slice(-2)}:</span>
            <span>{("0" + Math.floor(((state.time / 1000) % 60))).slice(-2)}</span>
        </Container>
    )
}

export default Time;