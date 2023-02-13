import { useState } from "react";
import CreditCardContainer from "./components/CreditCardContainer";
import FormContainer from "./components/FormContainer";
import Wrapper from "./components/Wrapper";
import { useFormData } from "./hooks/useFormData";

function App() {
  const { formData, getFormData } = useFormData();

  return (
    <Wrapper>
      <CreditCardContainer formData={formData} />
      <FormContainer getFormData={getFormData} />
    </Wrapper>
  );
}

export default App;
