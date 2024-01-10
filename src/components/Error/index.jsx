import { ContainerBlock } from "../../utils/ContainerBlock";
import styled from "styled-components";
import error from "../../assets/undraw_page_not_found_su7k 1.svg";

function Error() {
  return (
    <ContainerBlock>
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
`;

const ErrorLabel = styled.span`
  font-size: 2rem;
  text-align: center;
  margin: 2rem 0px;
`;

export default Error;
