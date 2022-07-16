import Button from "../UI/Button";
import {
  Nav,
  NavbarContainer,
  Menu,
  MenuItem,
  MenuLink,
} from "./Navbar.styles";
const Navbar = () => {

	const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

	const toggleThemeHandler = () => {
		if (prefersDarkScheme.matches) {
			document.body.classList.toggle("light-theme");
		} else {
			document.body.classList.toggle("dark-theme");
		}
	};

  return (
    <Nav>
      <NavbarContainer>
        <Menu>
          <MenuItem>
            <MenuLink
              exact
              to="/inspect"
              activeStyle={{
                transform: "traslateY(3rem)",
                color: "#E38B06",
                zoom: "1.5",
              }}
            >
              Inspect
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              exact
              to="/"
              activeStyle={{
                transform: "traslateY(3rem)",
                color: "#E38B06",
                zoom: "1.5",
              }}
            >
              {"<--Dev-Duel-->"}
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              exact
              to="/duel"
              activeStyle={{
                transform: "traslateY(3rem)",
                color: "#E38B06",
                zoom: "1.5",
              }}
            >
              Duel
            </MenuLink>
          </MenuItem>
              <Button 
                onClick={toggleThemeHandler}
                style={{height: "fit-content", alignSelf: "center"}}>
                flip the lights
              </Button>
          <MenuItem>
          </MenuItem>
        </Menu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
