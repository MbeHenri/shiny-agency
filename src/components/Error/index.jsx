import { ContainerBlock } from "../../utils/ContainerBlock";
import styled from "styled-components";
import error from "../../assets/undraw_page_not_found_su7k 1.svg";
import { useContext } from "react";
import { ThemeContext } from "../../utils/Context/Theme";

function Error() {

  const { colors } = useContext(ThemeContext);
  return (
    <ContainerBlock colors={colors}>
      <ErrorDiv>
        <ErrorLabel>Oups...</ErrorLabel>
        <ErrorImage src={error} alt="freelance" />
        <ErrorLabel>Il semblerait qu’il y ait un problème</ErrorLabel>
      </ErrorDiv>
    </ContainerBlock>
  );
}

const ErrorDiv = styled.div`
  display: flex;
  flex-direction: column;
  aligns-items: center;
  justify-content: space-around;
  max-width: 80rem;
`;

const ErrorImage = styled.img`
  width: 100%;
  margin: 2rem 0px;
`;

const ErrorLabel = styled.span`
  font-size: 2rem;
  text-align: center;
`;

export default Error;
