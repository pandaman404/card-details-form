import { useFormikContext } from "formik";
import { useEffect } from "react";
import styled from "styled-components";

const PrimaryButton = ({ title, type, getFormData }) => {
  const { values } = useFormikContext();

  useEffect(() => {
    getFormData(values);
  }, [values]);

  return <Button type={type}>{title}</Button>;
};

const Button = styled.button`
  border: 0px;
  height: 55px;
  width: 100%;
  background-color: var(--very-dark-violet);
  color: var(--white);
  font-size: 16px;
  text-transform: capitalize;
  letter-spacing: 1px;
  border-radius: 8px;
  cursor: pointer;

  @media (min-width: 1190px) {
    font-size: 17px;
  }
`;

export default PrimaryButton;
