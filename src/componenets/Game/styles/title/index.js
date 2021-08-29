import styled, {css} from "styled-components";

const Title = styled.h1`
    ${({theme}) => css`
        color: ${theme.colors.white};
        text-align: center;
    `}
`

export default Title;