import styled from "styled-components";

export const ContainerBlock = styled.header`
  display: flex;
  padding: 6rem 2rem;
  background-color: ${({ colors }) => colors.background};
  align-items: center;
  margin: 2rem 4rem;
  justify-content: space-around;
  flex-wrap: wrap;
`;
