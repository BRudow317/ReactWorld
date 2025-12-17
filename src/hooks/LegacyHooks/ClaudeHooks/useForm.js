import { useState } from 'react';

export const useForm = (initialValues = {}, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const runValidation = (currentValues) => {
    if (!validate) return {};
    return validate(currentValues);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const validationErrors = runValidation(values);
    setErrors(validationErrors);
  };

  const handleSubmit = (callback) => (event) => {
    event.preventDefault();
    const allTouched = Object.keys(values).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {}
    );
    setTouched(allTouched);

    const validationErrors = runValidation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      callback(values);
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setValues
  };
};

export default useForm;
