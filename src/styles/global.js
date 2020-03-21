import { createGlobalStyle } from "styled-components";
import "font-awesome/css/font-awesome.css";
import colors from "./colors";
import metrics from "./metrics";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline:0;
  }
  body{
    background: ${colors.secundary};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
    padding: 0px ${metrics.basePadding / 4 +
      metrics.base} ${metrics.basePadding +
  metrics.base} ${metrics.basePadding / 4 + metrics.base};
  }
`;

export default GlobalStyle;
