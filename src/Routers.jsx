import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";
import Survey from "./pages/Survey";
import Header from "./components/Header";
import Error from "./components/Error/index";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
`;

function Routers() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/freelances" element={<Freelances />} />
        <Route path="/survey/:questionNumber" element={<Survey />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default Routers;
