import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "./FormInput";
import PrimaryButton from "./PrimaryButton";
import CompleteState from "./CompleteState";

const validationSchema = Yup.object({
  cardholderName: Yup.string()
    .trim()
    .required("Can't be blank")
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Wrong format, letters only"
    )
    .max(50, "The cardholder name is too long"),
  cardNumber: Yup.number()
    .required("Can't be blank")
    .typeError("Wrong format, numbers only"),
  expDateMM: Yup.number()
    .required("Can't be blank")
    .typeError("Wrong format, numbers only"),
  expDateYY: Yup.number()
    .required("Can't be blank")
    .typeError("Wrong format, numbers only"),
  cvc: Yup.number()
    .required("Can't be blank")
    .typeError("Wrong format, numbers only"),
});

const FormContainer = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Container>
      <Formik
        initialValues={{
          cardholderName: "",
          cardNumber: "",
          expDateMM: "",
          expDateYY: "",
          cvc: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <FormInput
            name="cardholderName"
            label="Cardholder Name"
            placeholder="e.g. Jane Appleseed"
            type="text"
          />
          <FormInput
            name="cardNumber"
            label="Card Number"
            placeholder="e.g. 1234 5678 9123 0000"
            type="text"
          />
          <FormInput
            name="expDateMM"
            label="Exp. Date"
            placeholder="MM"
            type="text"
          />
          <FormInput
            name="expDateYY"
            label="(MM/YY)"
            placeholder="YY"
            type="text"
          />
          <FormInput
            name="cvc"
            label="cvc"
            placeholder="e.g. 123"
            type="text"
          />
          <PrimaryButton title="Confirm" type="submit" />
        </Form>
      </Formik>

      {/* <CompleteState /> */}
    </Container>
  );
};

const Container = styled.section`
  width: 90%;
  max-width: 380px;
  margin: 0 auto;
  position: relative;
  top: 90px;

  Form {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 25px;
    column-gap: 12px;

    div:nth-child(1),
    div:nth-child(2) {
      grid-column: 1 / 5;
    }

    div:nth-child(4) label {
      position: relative;
      right: 6px;

      @media (min-width: 700px) {
        right: 18px;
      }

      @media (min-width: 1400px) {
        right: 10px;
      }
    }

    div:nth-child(5) {
      grid-column: 3 / 5;
    }

    button {
      grid-column: 1 / 5;
    }
  }

  @media (min-width: 1190px) {
    top: 160px;
  }

  @media (min-width: 1400px) {
    top: 260px;
    left: 100px;
  }
`;

export default FormContainer;
