import styled from 'styled-components';

export const DropdownContainer = styled.div`
  display: inline-block;
  width: 200px;
`;

export const DropdownButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  background-color: ${props => props.theme.colors.background.primary};
  color: ${props => props.theme.colors.text.primary};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
  }

  &:focus {
    outline: none;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border-radius: 4px;
  margin-top: 4px;
  padding: 8px 0;
  background-color: ${props => props.theme.colors.background.primary};
  border: 1px solid ${props => props.theme.colors.border};
  list-style: none;
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
`;

export const DropdownItem = styled.li<{ active: boolean }>`
  display: flex;
  align-items: center;
  padding: 9px 16px;
  cursor: pointer;
  gap: 10px;
  transition: background-color 0.2s ease;
  color: ${props => props.theme.colors.text.primary};

  &:hover {
    background-color: ${props => props.theme.colors.background.hover};
  }

  ${props => props.active && `
    background-color: ${props.theme.colors.background.active};
    font-weight: 600;
  `}
`;

export const ArrowIcon = styled.span<{ $opened: boolean }>`
  transition: transform 0.2s ease;
  transform: ${props => props.$opened ? 'rotate(180deg)' : 'rotate(0deg)'};
`;
