import React from 'react';
import Container from './styles'
import { useSelector, useDispatch } from 'react-redux';
import { selectCell } from '../../../reducers';

const Cell = (props) => {

   
    
    const state = useSelector(({workingGrid, selectedCell, challengeGrid}) => ({
        isActive : selectedCell ? selectedCell[0] === props.row && 
            selectedCell[1] === props.col : false,
        value : workingGrid ? workingGrid[props.row][props.col] : 0,
        isPuzzle : challengeGrid && challengeGrid[props.row][props.col] !== "." ? true : false
    }))

    const dispatch = useDispatch()

    function selectHandler () {
        dispatch(selectCell([props.row, props.col]))
    }
    return (
        <Container puzzle={state.isPuzzle} active={state.isActive} data={`cell-${props.row}${props.col}`} onClick={selectHandler}>
            {state.value === "." ? '' : state.value}
        </Container>
    )
}

export default Cell;