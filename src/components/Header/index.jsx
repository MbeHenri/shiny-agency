import styled from "styled-components";
import { Link } from "react-router-dom";
import logo_light from "../../assets/shiny-logo_shiny-logo-light 1.png";
import logo_dark from "../../assets/shiny-logo_shiny-logo-dark 1.png";
import { useContext } from "react";
import { ThemeContext } from "../../utils/Context";

function Header() {
  const { theme, colors, toggleTheme } = useContext(ThemeContext);
  return (
    <Nav>
      <LogoNav src={theme === "light" ? logo_light : logo_dark} alt="logo" />
      <NavBlock>
        <StyledLink to="/" colors={colors}>
          Accueil
        </StyledLink>
        <StyledLink to="/survey/1" colors={colors}>
          Questionnaire
        </StyledLink>
        <StyledLink to="/freelances" $isFullLink colors={colors}>
          Freelances
        </StyledLink>
        <ButtonThemeStyle
          type="button"
          onClick={() => toggleTheme()}
          colors={colors}
        >
          {theme === "light" ? "☀️" : "🌙"}
        </ButtonThemeStyle>
      </NavBlock>
    </Nav>
  );
}

const ButtonThemeStyle = styled.button`
  background-color: transparent;
  border: 3px ${({ colors }) => colors.primary} solid;
  font-size: 1.5rem;
  cursor: pointer;
  margin: 0 1rem;
  padding: 8px 10px;
  border-radius: 50%;
`;

const StyledLink = styled(Link)`
  ${(props) => (props.$isFullLink ? `padding: 15px 2rem;` : `padding: 15px;`)}
  color: ${({ colors }) => colors.secondary};
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${props.colors.primary} ;`}
`;

const Nav = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

const NavBlock = styled.span`
  display: flex;
`;

const LogoNav = styled.img`
  height: 4rem;
`;

export default Header;
