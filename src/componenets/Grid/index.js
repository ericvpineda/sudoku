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
    const create = useCallback(() => dispatch(createGrid()), [dispatch])
    useEffect(() => {
        if (!state.solvedGrid) {
            create()            
        }
    }, [create])

    const fill = useCallback((n) => {
        if (state.selectedCell && state.selectedValue === ".") {
            dispatch(fillCell(n, state.selectedCell))
        }
    }, [dispatch, state.selectedCell, state.selectedValue])

    function movedown() {
        if (state.selectedCell && state.selectedCell[0] < 8) {
            dispatch(
                selectCell([
                    (state.selectedCell[0] + 1),
                    state.selectedCell[1]
                ])
            )
        }
    }
    function moveup() {
        if (state.selectedCell && state.selectedCell[0] > 0) {
            dispatch(
                selectCell([
                    (state.selectedCell[0] - 1),
                    state.selectedCell[1]
                ])
            )
        }
    }
    function moveright() {
        if (state.selectedCell && state.selectedCell[1] < 8) {
            dispatch(
                selectCell([
                    state.selectedCell[0],
                    state.selectedCell[1] + 1
                ])
            )
        }
    }
    function moveleft() {
        if (state.selectedCell && state.selectedCell[1] > 0) {
            dispatch(
                selectCell([
                    state.selectedCell[0],
                    state.selectedCell[1] - 1
                ])
            )
        }
    }

    useMouseTrap('down', movedown)
    useMouseTrap('up', moveup)
    useMouseTrap('left', moveleft)
    useMouseTrap('right', moveright)
    useMouseTrap('1',() => fill(1))
    useMouseTrap('2',() => fill(2))
    useMouseTrap('3',() => fill(3))
    useMouseTrap('4',() => fill(4))
    useMouseTrap('5',() => fill(5))
    useMouseTrap('6',() => fill(6))
    useMouseTrap('7',() => fill(7))
    useMouseTrap('8',() => fill(8))
    useMouseTrap('9',() => fill(9))

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