import styled, {css} from "styled-components";

const Container = styled.div`
    ${({theme}) => css `{
        color : red;
        margin-bottom: 0;
        margin-left: 0;
        padding-top: 1rem;
        }`
    }`

export default Container;