import styled, {css} from "styled-components";

const Title = styled.h1`
    ${({theme}) => css`
        color : ${theme.colors.red};
        margin-bottom: 0;
        margin-left: 0;
        padding-top: 1rem;
        font-weight: bold;
        font-size: 20px;
    `}
`

export default Title;