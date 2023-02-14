import { useFormikContext } from "formik";
import { useEffect } from "react";
import Button from "./Button";

const SubmitButton = ({ getFormData }) => {
  const { values } = useFormikContext();

  useEffect(() => {
    getFormData(values);
  }, [values]);

  return <Button type="submit">Confirm</Button>;
};

export default SubmitButton;
