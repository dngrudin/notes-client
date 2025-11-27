import styled from "styled-components"

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    width: 100vw;
`

export const AppContainer = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-grow: 1;
    background-color: ${props => props.theme.colors.background.primary};
    border-top: 1px solid ${props => props.theme.colors.border};
`
export const LeftPanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 1px solid ${props => props.theme.colors.border};
    background-color: ${props => props.theme.colors.background.primary};
`