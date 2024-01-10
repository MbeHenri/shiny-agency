import styled from "styled-components";
import logo from "../../assets/shiny-logo_shiny-logo-light 1.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Nav>
      <LogoNav src={logo} alt="logo" />
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/survey/42">Questionnaire</StyledLink>
        <StyledLink to="/freelances" $isFullLink>
          Freelances
        </StyledLink>
      </nav>
    </Nav>
  );
}

const StyledLink = styled(Link)`
  ${(props) => (props.$isFullLink ? `padding: 15px 2rem;` : `padding: 15px;`)}
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: #5843E4;`}
`;

const Nav = styled.div`
  display: flex;
  padding: 50px;
  justify-content: space-between;
  align-items: center;
`;

const LogoNav = styled.img`
  height: 4rem;
`;

export default Header;
