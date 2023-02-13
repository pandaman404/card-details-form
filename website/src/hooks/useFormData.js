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

  const getFormData = (values) => {
    setFormData(values);
  };

  return {
    formData,
    getFormData,
  };
};
