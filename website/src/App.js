import CreditCardContainer from "./components/CreditCardContainer";
import FormContainer from "./components/FormContainer";
import Wrapper from "./components/Wrapper";
import { useFormData } from "./hooks/useFormData";

function App() {
  const { formData, getFormData, completeState, handleSubmit } = useFormData();

  return (
    <Wrapper>
      <CreditCardContainer formData={formData} />
      <FormContainer
        getFormData={getFormData}
        handleSubmit={handleSubmit}
        completeState={completeState}
      />
    </Wrapper>
  );
}

export default App;
