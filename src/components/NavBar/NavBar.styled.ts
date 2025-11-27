import styled from "styled-components"

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  min-height: 2rem;
  padding: 9px 18px;
  background-color: ${props => props.theme.colors.background.secondary};
`;

export const NavItem = styled.div`
  display: flex;
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  line-height: 1.5;
`;