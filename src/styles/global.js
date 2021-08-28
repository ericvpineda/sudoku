import {createGlobalStyle, css} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    ${props => css` 
        html {
            height: 100%;
        }

        body {
            height: 100%;
            display: flex;
            flex-direction: column;
            margin: 0;
        }

        #root {
            background: ${props.theme.colors.background};
            color: ${props.theme.colors.black};
            display: flex;
            flex: 1;
            height: 100%;
            justify-content: center;
            padding: 15px;

        }
`}
`

export default GlobalStyles;