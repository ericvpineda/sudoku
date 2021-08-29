import styled, {css} from "styled-components";

const Container = styled.div`
    ${({theme}) => css `{
        color : ${theme.colors.red};
        margin-bottom: 0;
        margin-left: 0;
        padding-top: 1.2rem;
        font-weight: bold;
        }`
    }`

export default Container;