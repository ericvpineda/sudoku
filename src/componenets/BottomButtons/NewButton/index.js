import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Button from '../../Number/button/styles'
import { createGrid } from '../../../reducers'

const NewButton = () => {

    const dispatch = useDispatch()
    const newGameHandler = useCallback(() => {
        if (window.confirm('Are you ready to start new game?')) {
            dispatch(createGrid())
        }
    }, [dispatch])

    return (
        <Button onClick={newGameHandler}>New</Button>
    )
}

export default NewButton;