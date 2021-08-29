import React, {Children, useEffect, useCallback} from 'react';
import {Container, Row} from './styles'
import Cell from './Cell'
import {createGrid} from '../../reducers'
import { useDispatch, useSelector } from 'react-redux';
import useMouseTrap from 'react-hook-mousetrap'
import { selectCell, fillCell } from '../../reducers';


const Grid = () => {

    const dispatch = useDispatch()
    const state = useSelector(({selectedCell, workingGrid, solvedGrid}) => ({
        selectedCell,
        selectedValue : workingGrid && selectedCell ? workingGrid[selectedCell[0]][selectedCell[1]] : 0,
        solvedGrid
    }))
    const createGame = useCallback(() => dispatch(createGrid()), [dispatch])
    useEffect(() => {
        if (!state.solvedGrid) {
            createGame()            
        }
    }, [createGame, state.solvedGrid, dispatch])

    const fill = useCallback((n) => {
        if (state.selectedCell && state.selectedValue === ".") {
            dispatch(fillCell(n, state.selectedCell))
        }
    }, [dispatch, state.selectedCell, state.selectedValue])

    function move(select, xAxis, step) {
        if (state.selectedCell) {
            const xPos = state.selectedCell[0];
            const yPos = state.selectedCell[1];
            const xStep = select === 0 ? step : 0; 
            const yStep = select === 1 ? step : 0;

            if (xAxis && ((xPos > 0 && xPos < 8) ||
                (xPos === 0 && step > 0) || 
                (xPos === 8 && step < 0))
                ) {
                dispatch(
                    selectCell([
                        (xPos + xStep),
                        (yPos)
                    ])
                )
            } else if ((yPos > 0 && yPos < 8) ||
                (yPos === 0 && step > 0) || 
                (yPos === 8 && step < 0)
                ) {
                dispatch(
                    selectCell([
                        (xPos),
                        (yPos + yStep)
                    ])
                )
            }
        }
    }

    useMouseTrap('1',() => fill(1))
    useMouseTrap('2',() => fill(2))
    useMouseTrap('3',() => fill(3))
    useMouseTrap('4',() => fill(4))
    useMouseTrap('5',() => fill(5))
    useMouseTrap('6',() => fill(6))
    useMouseTrap('7',() => fill(7))
    useMouseTrap('8',() => fill(8))
    useMouseTrap('9',() => fill(9))

    useMouseTrap('down', () => move(0, true, 1))
    useMouseTrap('up', () => move(0, true, -1))
    useMouseTrap('left', () => move(1, false, -1))
    useMouseTrap('right', () => move(1, false, 1))

    return (
        <Container data="grid">

            {Children.toArray([...Array(9)].map((_, row) => (
             <Row data="grid-row">

                 {Children.toArray([...Array(9)].map((_, col) => (
                     <Cell row={row} col={col}></Cell>
                 )))}
             </Row>   
            )))}
        </Container>
    )
}

export default Grid;