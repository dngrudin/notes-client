import ThemeSelector from "components/Theme/ThemeSelector";
import { Nav, NavItem } from "./NavBar.styled"

export const Navbar = () => {
    return (
        <Nav>
            <NavItem />
            <NavItem>
                <ThemeSelector />
            </NavItem>
        </Nav>
    );
};
