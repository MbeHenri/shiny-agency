import { useContext } from "react";
import { ThemeContext } from "../Context/Theme";
import { createGlobalStyle } from "styled-components";

const StyledGlobalStyle = createGlobalStyle`
  div {
    font-family: "Trebuchet MS", Helvetica, sans-serif;
  }
  h1 {
    font-weight: 700;
    font-size: 3rem;
  }
  h2 {
    font-weight: 700;
    font-size: 2.5rem;
  }
  body {
    background-color: ${({ colors }) => colors.background_body};
    color : ${({ colors }) => colors.on_background_body};
    margin: 0;  
  }
  button{
    color : ${({ colors }) => colors.on_background_body};
  }
`;

export function GlobalStyle() {
  const { colors } = useContext(ThemeContext);
  return <StyledGlobalStyle colors={colors} />;
}
