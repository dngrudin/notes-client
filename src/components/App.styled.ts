import styled from "styled-components"

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
    height: 100%;
    width: 100%;
`
export const AppContainer = styled.main`
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    flex-grow: 1;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.background.primary};
    border-top: 1px solid ${props => props.theme.colors.border};
`
export const LeftPanelContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    border-right: 1px solid ${props => props.theme.colors.border};
    background-color: ${props => props.theme.colors.background.primary};
`