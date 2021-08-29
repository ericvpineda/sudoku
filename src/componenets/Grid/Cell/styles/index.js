import styled, {css} from "styled-components";

const Container = styled.div`
    ${({active, theme, puzzle}) => css`
    
        height: auto;
    
        align-items: center;
        
        background-color: ${active ? theme.colors.red : theme.colors.white};
        caret-color: transparent;
        color : ${puzzle ? 'black' : active ? 'white' : 'red' };
        
        border: solid 0.7px ${theme.colors.lightgrey};
        
        display: flex;
        justify-content: center;
        flex-grow: 1;
        flex-shrink: 0;
        flex-basis: 0;
        font-size: 20px;
        
        font-weight: ${puzzle ? 'bold' : 'normal' };
        
        transition: ${theme.transition}
        user-select: none;
        cursor: pointer;
        

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