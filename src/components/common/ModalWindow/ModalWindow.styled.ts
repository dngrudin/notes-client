import styled from "styled-components"

const ModalWindow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    position: absolute;
    left: 50%;
    top: 50%;
    height: auto;
    width: auto;
    border-radius: 4px;
    padding: 18px;
    z-index: 100;
    background-color: ${props => props.theme.colors.background.secondary};
    border: 1px solid ${props => props.theme.colors.border};
`;

export default ModalWindow;