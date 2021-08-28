import React from 'react'
import Container from '../Number/styles'
import NumberButton from './button'

const Number = () => {
    return (
    
    <Container> {([1,2,3,4,5,6,7,8,9]).map(val => {
        
        return <NumberButton key={val} value={val}></NumberButton>
        
        })}

    </Container>)
}

export default Number;