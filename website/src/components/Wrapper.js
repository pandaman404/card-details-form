import styled from "styled-components";

const Wrapper = styled.main`
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 240px 1fr;

  @media (min-width: 1190px) {
    grid-template-columns: 34% 66%;
    grid-template-rows: 1fr;
  }
`;

export default Wrapper;
