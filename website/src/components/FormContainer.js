import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import CompleteState from "./CompleteState";

const initialValues = {
  cardholderName: "",
  cardNumber: "",
  expDateMM: "",
  expDateYY: "",
  cvc: "",
};

const validationSchema = Yup.object({
  cardholderName: Yup.string()
    .trim()
    .required("Can't be blank")
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Wrong format, letters only"
    )
    .max(30, "The cardholder name is too long"),
  cardNumber: Yup.string()
    .matches(/^[0-9]*$/, "Wrong format, numbers only")
    .min(16, "Enter a valid card number")
    .max(16, "Enter a valid card number")
    .required("Can't be blank"),
  expDateMM: Yup.string()
    .matches(/^[0-9]*$/, "Wrong format, numbers only")
    .min(2, "Enter a valid month")
    .max(2, "Enter a valid month")
    .required("Can't be blank"),
  expDateYY: Yup.string()
    .matches(/^[0-9]*$/, "Wrong format, numbers only")
    .min(2, "Enter a valid year")
    .max(2, "Enter a valid year")
    .required("Can't be blank"),
  cvc: Yup.string()
    .matches(/^[0-9]*$/, "Wrong format, numbers only")
    .min(3, "Enter a valid cvc")
    .max(3, "Enter a valid cvc")
    .required("Can't be blank"),
});

const FormContainer = ({ getFormData, completeState, handleSubmit }) => {
  return (
    <Container>
      {completeState ? (
        <CompleteState />
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) =>
            handleSubmit(values, actions.resetForm)
          }
          validationSchema={validationSchema}
        >
          <Form autoComplete="off">
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
            <SubmitButton getFormData={getFormData} />
          </Form>
        </Formik>
      )}
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
    top: 150px;
  }

  @media (min-width: 1400px) {
    top: 280px;
    left: 100px;
  }
`;

export default FormContainer;
