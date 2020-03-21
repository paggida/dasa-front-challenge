import React, { Fragment } from "react";
import GlobalStyle from "./styles/global";
import Main from "./pages/Main";
import "./config/reactotron";
import "./config/toastify";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Main />
    </Fragment>
  );
}

export default App;
