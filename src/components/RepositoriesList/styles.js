import styled from "styled-components";
import metrics from "../../styles/metrics";
import color from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${metrics.baseMargin * 5 + metrics.base} 0px
    ${metrics.baseMargin * 4 + metrics.base} 0px;
  min-width: 500px;
  background: ${color.white};
  border-radius: ${metrics.baseRadius + metrics.base};

  header {
    padding: ${metrics.basePadding + 10 + metrics.base};
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 80px;
      border-radius: 100px;
      padding: 0;
    }

    small {
      font-size: ${metrics.fontSize + 4 + metrics.base};
      color: ${color.dark};
    }
  }
`;

export const Repositories = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: ${metrics.basePadding + metrics.base}
        ${metrics.basePadding / 2 + metrics.base};

      strong {
        font-size: ${metrics.fontSize * 2 + metrics.base};
        display: block;
        margin: 0px 0px ${metrics.baseMargin * 2 + metrics.base} 0px;
      }

      small {
        font-weight: normal;
        font-size: ${metrics.fontSize + 2 + metrics.base};
        color: ${color.regular};
        font-style: italic;
      }

      &:nth-child(2n-1) {
        background: ${color.light};
      }
    }
  }
`;
