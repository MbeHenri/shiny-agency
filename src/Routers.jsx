import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";
import Survey from "./pages/Survey";
import Header from "./components/Header";
import Error from "./components/Error/index";
import { ThemeProvider } from "./utils/Context";
import { GlobalStyle } from "./utils/style/GlobalStyle";

function Routers() {
  return (
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/freelances" element={<Freelances />} />
          <Route path="/survey/:questionNumber" element={<Survey />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default Routers;
