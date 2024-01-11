import styled from "styled-components";
import img_home from "../../assets/undraw_Resume_re_hkth 1.svg";
import { Link } from "react-router-dom";
import { ContainerBlock } from "../../utils/ContainerBlock";
import { useContext } from "react";
import { ThemeContext } from "../../utils/Context";

function Home() {
  const { colors } = useContext(ThemeContext);
  return (
    <div className="App">
      <ContainerBlock colors={colors}>
        <HeaderTitle>
          <h1>
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </h1>

          <HearderStyledLink to="/" $isFullLink colors={colors}>
            Accueil
          </HearderStyledLink>
        </HeaderTitle>
        <HeaderImg src={img_home} alt="image de la page d'acceuil" />
      </ContainerBlock>
    </div>
  );
}

const HeaderTitle = styled.div`
  text-align: left;
  max-width: 40rem;
`;

const HeaderImg = styled.img`
  width: 541px;
  height: 506px;
`;

const HearderStyledLink = styled(Link)`
  ${(props) => (props.$isFullLink ? `padding: 15px 6rem;` : `padding: 15px;`)}
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${props.colors.primary};`}
`;
export default Home;
