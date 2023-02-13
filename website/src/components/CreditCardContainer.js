import styled from "styled-components";
import CreditCard from "./CreditCard";

const CreditCardContainer = ({ formData }) => {
  return (
    <Container>
      <CreditCard />
      <p style={{ color: "white" }}>{formData.cardholderName}</p>
      <p style={{ color: "white" }}>{formData.cardNumber}</p>
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
