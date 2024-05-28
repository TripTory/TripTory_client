import { StyledEngineProvider } from "@mui/styled-engine";
import { RecoilRoot } from "recoil";
import Router from "./routes/router";
import GlobalStyle from "./styles/globalStyle";
import "./App.css";
import React from "react";

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <GlobalStyle />
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </StyledEngineProvider>
  );
};

export default App;
