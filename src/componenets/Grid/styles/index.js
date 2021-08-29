import styled, {css} from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
`

const Row = styled.div`
    ${({theme}) => css`
        display: flex;
        flex-flow: row;

        &:nth-child(3n + 1) {
            div {
                border-top: solid 2px ${theme.colors.black};
            }
        }

        &:nth-child(9) {
            div {
                border-bottom: solid 2px ${theme.colors.black};
            }
        }

        div {
            &:nth-child(3n) {
                border-right: solid 2px ${theme.colors.black};
            }
            &:nth-child(1) {
                border-left: solid 2px ${theme.colors.black};
            }
        }
    `}
`

export {Container, Row};