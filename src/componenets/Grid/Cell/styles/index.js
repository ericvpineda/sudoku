import styled, {css} from "styled-components";

const Container = styled.div`
    ${({active, theme, puzzle}) => css`
        align-items: center;
        background-color: ${active ? theme.colors.red : theme.colors.white};
        border: solid 0.7px ${theme.colors.lightgrey};
        cursor: pointer;
        display: flex;
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 0;
        font-size: 20px;
        font-weight: ${puzzle ? 'bold' : 'normal' };
        height: auto;
        justify-content: center;
        transition: ${theme.transition}
        user-select: none;
        caret-color: transparent;
        color : ${puzzle ? 'black' : '#62b6cb' };

        &:before {
            padding-top: 100%;
            content: '';
            float: left;
        }

        &:hover {
            background-color: ${theme.colors.lightred};
            transition : ${theme.transition}
        }

        
    `}
`

export default Container;