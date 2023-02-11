import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";

const CompleteState = () => {
  return (
    <Container>
      <img src="/images/icon-complete.svg" alt="" />
      <h2>Thank You!</h2>
      <p>We've added your card details</p>
      <PrimaryButton title="continue" type="button" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  img {
    width: 80px;
    margin-bottom: 20px;
  }

  h2 {
    color: var(--very-dark-violet);
    text-transform: uppercase;
    font-size: 28px;
    letter-spacing: 3px;
  }

  p {
    color: var(--dark-grayish-violet);
    font-size: 16px;
    margin: 0;
    text-align: center;
    letter-spacing: 0.5px;
    margin-bottom: 50px;
  }
`;

export default CompleteState;
