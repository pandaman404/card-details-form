import styled from "styled-components";
import CreditCard from "./CreditCard";

const CreditCardContainer = () => {
  return (
    <Container>
      <CreditCard />
    </Container>
  );
};

const Container = styled.section`
  background-image: url("/images/bg-main-mobile.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media (min-width: 1190px) {
    background-image: url("/images/bg-main-desktop.png");
    height: 100%;
  }
`;

export default CreditCardContainer;
