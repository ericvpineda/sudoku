import styled, {css} from "styled-components";

const Button = styled.button`
    ${({theme, number}) => css`

        background-color: ${number ? '#fff' : theme.colors.black};
        color: ${number ? theme.colors.red : theme.colors.white};

        border: ${number ? "none" : "2px solid theme.colors.black"};
        border-radius: 4px;
        cursor: pointer;
        
        font-size: ${number ? "22px" : "16px"};
        font-weight: bold;
        
        height: 40px;
        min-height: 40px;
        
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;

        margin: 4px 2px;
        padding: 0;

        opacity: 0.9;
        transition: ${theme.transition};

        &:focus {
            border-color: ${theme.colors.blue};
            outline: none;
        }

        &:hover {
            opacity: 0.6;
        }
    `}
`

export default Button; 