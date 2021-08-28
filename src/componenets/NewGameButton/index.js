import React, { useCallback } from 'react'
import Button from '../Number/button/styles'
import { useDispatch } from 'react-redux'
import { createGrid } from '../../reducers'

const NewGameButton = () => {

    const dispatch = useDispatch()
    const newGameHandler = useCallback(() => {
        if (window.confirm('Are you sure you want to start new game?')) {
            dispatch(createGrid())
        }
    }, [dispatch])

    return (
        <Button onClick={newGameHandler}>New Game</Button>
    )
}

export default NewGameButton;