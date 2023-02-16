import styled from "styled-components";
import CreditCard from "./CreditCard";
import bgMainDesktop from "../images/bg-main-desktop.png";
import bgMainMobile from "../images/bg-main-mobile.png";

const CreditCardContainer = ({ formData }) => {
  return (
    <Container>
      <CreditCard formData={formData} />
    </Container>
  );
};

const Container = styled.section`
  background-image: url(${bgMainMobile});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media (min-width: 1190px) {
    background-image: url(${bgMainDesktop});
    height: 100%;
  }
`;

export default CreditCardContainer;
