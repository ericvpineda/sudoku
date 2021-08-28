import React, {useCallback} from 'react'
import Button from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { fillCell } from '../../../reducers'


const NumberButton = (props) => {

    const dispatch = useDispatch()
    const state = useSelector(({selectedCell, workingGrid}) => ({
        selectedCell,
        value : workingGrid && selectedCell ? workingGrid[selectedCell[0]][selectedCell[1]] : 0
    }))

    const fill = useCallback(() => {
        if (state.selectedCell && state.value === ".") {
            dispatch(fillCell(props.value, state.selectedCell))
        }
    }, [dispatch, state.selectedCell, state.value, props.value])

    return (
        <Button onClick={fill}>{props.value}</Button>
    )
}

export default NumberButton;