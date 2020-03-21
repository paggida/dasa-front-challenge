import styled from "styled-components";
import color from "../../styles/colors";
import metrics from "../../styles/metrics";

export const Form = styled.form`
  margin-top: ${metrics.baseMargin * 2 + metrics.base};
  width: 100%;
  max-width: 500px;
  display: flex;
  input {
    flex: 1;
    height: 55px;
    padding: 0 ${metrics.basePadding + metrics.base};
    background: ${color.white};
    font-size: ${metrics.fontSize * 2 + metrics.base};
    color: ${color.dark};
    border-radius: ${metrics.baseRadius + metrics.base};
    border: ${({ withError }) => (withError ? "2px solid " + color.error : 0)};
  }
  button {
    width: 155px;
    height: 55px;
    padding: 0 ${metrics.basePadding + metrics.base};
    margin-left: ${metrics.baseMargin * 2 + metrics.base};
    background: ${color.tertiary};
    color: ${color.white};
    border: 0;
    font-size: ${metrics.fontSize * 2 + metrics.base};
    font-weight: bold;
    border-radius: ${metrics.baseRadius + metrics.base};

    &:hover {
      background: ${color.quaternary};
      cursor: pointer;
    }
  }
`;
