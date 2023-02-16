import { useState } from "react";

const initialValues = {
  cardholderName: "",
  cardNumber: "",
  expDateMM: "",
  expDateYY: "",
  cvc: "",
};

export const useFormData = () => {
  const [formData, setFormData] = useState(initialValues);
  const [completeState, setCompleteState] = useState(false);

  const getFormData = (values) => {
    setFormData(values);
  };

  const handleSubmit = (values, resetForm) => {
    console.log(values);
    setCompleteState(true);
    // resetForm(initialValues);
  };

  return {
    formData,
    completeState,
    getFormData,
    handleSubmit,
  };
};
