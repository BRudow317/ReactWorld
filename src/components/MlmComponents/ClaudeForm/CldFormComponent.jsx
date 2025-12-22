import { useCallback, useState } from "react";
import {
  CldFlexGrid,
  CldCard,
  CldForm,
  CldInput,
  CldSelect,
  CldCheckbox,
  CldButton,
  CldToast,
  CldToastContainer,
  useCldForm,
  useDebounce, useLocalStorage,
  useHttp,
} from "..";

const initialValues = {
  name: "",
  email: "",
  topic: "",
  agree: false,
};

export const CldFormComponent = () => {
  const [toasts, setToasts] = useState([]);
    const [storedPrefs, setStoredPrefs] = useLocalStorage("claude-v2-prefs", {
      visits: 1,
    });
    const { loading, data, error, execute } = useHttp();

  const validateForm = (values) => {
    const errors = {};
    if (!values.name) errors.name = "Name is required";
    if (!values.email) errors.email = "Email is required";
    if (!values.topic) errors.topic = "Topic is required";
    if (!values.agree) errors.agree = "You must agree to continue";
    return errors;
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, reset } =
      useCldForm(initialValues, validateForm);
    const debouncedTopic = useDebounce(values.topic, 500);

  const addToast = useCallback((message, type = "info") => {
    setToasts((prev) => [...prev, { id: Date.now(), message, type }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const onFormSubmit = handleSubmit(() => {
    addToast("Claude V2 form submitted", "success");
    setStoredPrefs((prev) => ({ visits: prev.visits + 1 }));
    reset();
  });

  return (
    <CldFlexGrid gap={24}>
      <CldCard title="Interactive Form" hoverable>
        <CldForm onSubmit={onFormSubmit}>
          <CldInput
            label="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.name}
            touched={touched.name}
          />
          <CldInput
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
          />
          <CldSelect
            label="Topic"
            name="topic"
            value={values.topic}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.topic}
            touched={touched.topic}
            options={[
              { value: "", label: "Select a topic" },
              { value: "infra", label: "Infrastructure" },
              { value: "ai", label: "AI" },
              { value: "design", label: "Design" },
            ]}
          />
          <CldCheckbox
            label="Agree to receive updates"
            checked={values.agree}
            name="agree"
            onChange={handleChange}
          />
          <div style={{ display: "flex", gap: 8 }}>
            <CldButton type="submit" fullWidth>
              Submit
            </CldButton>
            <CldButton variant="secondary" onClick={reset}>
              Reset
            </CldButton>
          </div>
          <p style={{ marginTop: 8, fontSize: "0.9rem", color: "#e5e7eb" }}>
            Debounced topic preview: {debouncedTopic || "—"}
          </p>
          <p style={{ marginTop: 4, fontSize: "0.85rem" }}>
            Form sessions: {storedPrefs.visits}
          </p>
        </CldForm>
      </CldCard>
    </CldFlexGrid>
  );
};
