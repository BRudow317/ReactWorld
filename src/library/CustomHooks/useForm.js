import { useState, useCallback } from "react";

export function useForm({
  initialValues = {},
  validate, // (values) => errors object
  onSubmit, // (values) => void|Promise
} = {}) {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const setFieldValue = useCallback((name, value) => {
    setValues((v) => ({ ...v, [name]: value }));
  }, []);

  const setFieldTouched = useCallback((name, isTouched = true) => {
    setTouched((t) => ({ ...t, [name]: isTouched }));
  }, []);

  const runValidate = useCallback(
    (nextValues) => {
      const e = validate?.(nextValues) || {};
      setErrors(e);
      return e;
    },
    [validate]
  );

  const handleChange = useCallback(
    (e) => {
      const { name, type } = e.target;
      const value =
        type === "checkbox" ? e.target.checked : e.target.value;
      setValues((v) => {
        const next = { ...v, [name]: value };
        return next;
      });
    },
    []
  );

  const handleBlur = useCallback(
    (e) => {
      const { name } = e.target;
      setFieldTouched(name, true);
      runValidate({ ...values, [name]: values[name] });
    },
    [runValidate, setFieldTouched, values]
  );

  const handleSubmit = useCallback(
    async (e) => {
      e?.preventDefault?.();
      const e2 = runValidate(values);
      const hasErrors = Object.keys(e2 || {}).length > 0;
      setTouched(
        Object.keys(values).reduce((acc, k) => ({ ...acc, [k]: true }), {})
      );
      if (hasErrors) return;

      setSubmitting(true);
      try {
        await onSubmit?.(values);
      } finally {
        setSubmitting(false);
      }
    },
    [onSubmit, runValidate, values]
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setTouched({});
    setErrors({});
    setSubmitting(false);
  }, [initialValues]);

  return {
    values,
    setValues,
    touched,
    errors,
    submitting,
    setFieldValue,
    setFieldTouched,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    validate: () => runValidate(values),
  };
}
