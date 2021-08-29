import {createGlobalStyle, css} from 'styled-components'

const GlobalStyles = createGlobalStyle`
    ${props => css` 
        html {
            height: 100%;
        }

        body {
            height: 100%;
            
            margin: 0;

            display: flex;
            flex-direction: column;
        }

        #root {
            height: 100%;
            
            padding: 15px;

            background: ${props.theme.colors.background};
            color: ${props.theme.colors.black};
            
            display: flex;
            justify-content: center;
            flex: 1;
        }
`}
`

export default GlobalStyles;