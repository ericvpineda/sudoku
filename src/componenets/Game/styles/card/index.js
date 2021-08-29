import styled, {css} from 'styled-components'

const Card = styled.div`
    ${({theme}) => css`
        background-color: ${theme.colors.white};
        
        max-height: fit-content;
        padding: 15px;
        border-radius: 12px;

        display: flex;
        flex-direction: column;
    `}
`

export default Card