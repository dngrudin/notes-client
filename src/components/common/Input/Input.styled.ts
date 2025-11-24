import styled from "styled-components"

export const StyledInput = styled.input`
  height: 2.5rem;
  width: 100%;
  border-radius: 4px;
  color: ${props => props.theme.colors.text.primary};
  border: 1px solid ${props => props.theme.colors.border};
  background-color: ${props => props.theme.colors.background.primary};

  &:focus {
    border: 1px solid: ${props => props.theme.colors.accent.active};
  }
`

export const InputLabel = styled.label`
  font-weight: 600;
  line-height: 20px;
  color: ${props => props.theme.colors.text.primary};
`;