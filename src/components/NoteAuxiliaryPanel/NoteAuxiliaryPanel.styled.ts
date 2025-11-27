import styled from "styled-components"

export const AuxiliaryPanelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    min-height: 2rem;
    padding: 18px;
`
export const PanelLabel = styled.label`
  font-weight: 600;
  line-height: 20px;
  color: ${props => props.theme.colors.text.primary};
`;