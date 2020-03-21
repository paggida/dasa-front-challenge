import styled from "styled-components";
import metrics from "../../styles/metrics";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${metrics.basePadding * 3 + metrics.base};
  img {
    width: 250px;
    margin-bottom: ${metrics.baseMargin * 3 + metrics.base};
  }
`;
