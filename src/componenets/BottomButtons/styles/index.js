import styled, {css} from "styled-components"

const Container = styled.div`
    ${({theme}) => css`

        height: 40px;
        min-height: 40px;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;

    `}
`

export default Container;