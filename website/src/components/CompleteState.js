import styled from "styled-components";
import Button from "./Button";
import iconComplete from "../images/icon-complete.svg";

const CompleteState = () => {
  return (
    <Container>
      <img src={iconComplete} alt="Check" />
      <h2>Thank You!</h2>
      <p>We've added your card details</p>
      <Button onClick={() => console.log("Hi!")}>Continue</Button>
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
