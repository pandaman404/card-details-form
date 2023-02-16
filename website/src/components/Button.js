import styled from "styled-components";

const Button = styled.button`
  border: 0px;
  height: 55px;
  width: 100%;
  background: var(--very-dark-violet);
  color: var(--white);
  font-size: 16px;
  text-transform: capitalize;
  letter-spacing: 1px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.5 ease;

  &:hover {
    background: var(--violet-gradient);
  }

  @media (min-width: 1190px) {
    font-size: 17px;
  }
`;

export default Button;
