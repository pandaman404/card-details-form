import styled from "styled-components";
import { useField } from "formik";

const FormInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Container>
      <label>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <span>{meta.error}</span> : null}
    </Container>
  );
};

const Container = styled.div`
  label {
    color: var(--very-dark-violet);
    text-transform: uppercase;
    letter-spacing: 2px;
    display: block;
    font-size: 12px;
    margin-bottom: 10px;

    @media (min-width: 1400px) {
      font-size: 13px;
    }
  }

  input {
    width: 100%;
    height: 45px;
    border-radius: 5px;
    border: 1px solid var(--light-grayish-violet);
    color: var(--very-dark-violet);
    padding: 0 15px;

    ::placeholder {
      color: var(--light-grayish-violet);
      font-size: 18px;
      font-weight: 500;
      opacity: 1;
    }

    &:focus {
      outline: none;
      border: 1px solid var(--very-dark-violet) !important;
    }
  }

  span {
    font-size: 11px;
    position: relative;
    color: var(--red);
    top: 5px;

    @media (min-width: 1400px) {
      font-size: 12px;
    }
  }
`;

export default FormInput;
