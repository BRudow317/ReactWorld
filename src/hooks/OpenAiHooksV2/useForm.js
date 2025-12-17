import { useCallback, useState } from "react";

export function useForm({ initialValues = {}, validate, onSubmit } = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const runValidation = useCallback(
    (nextValues) => {
      if (typeof validate !== "function") return {};
      return validate(nextValues) || {};
    },
    [validate]
  );

  const handleChange = useCallback((event) => {
    const { name, type, value, checked } = event.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const handleBlur = useCallback(
    (event) => {
      const { name } = event.target;
      setTouched((prev) => ({ ...prev, [name]: true }));
      setErrors(runValidation(values));
    },
    [runValidation, values]
  );

  const handleSubmit = useCallback(
    async (event) => {
      event?.preventDefault?.();
      const validationErrors = runValidation(values);
      setErrors(validationErrors);
      setTouched(
        Object.keys(values).reduce((acc, key) => {
          acc[key] = true;
          return acc;
        }, {})
      );
      if (Object.keys(validationErrors).length === 0) {
        try {
          setSubmitting(true);
          await onSubmit?.(values);
        } finally {
          setSubmitting(false);
        }
      }
    },
    [runValidation, values, onSubmit]
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setSubmitting(false);
  }, [initialValues]);

  return {
    values,
    errors,
    touched,
    submitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
  };
}
