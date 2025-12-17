import { useCallback, useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  FlexGrid,
  Form,
  Input,
  Modal,
  NavBar,
  PageLayout,
  Select,
  Table,
  ToastContainer,
} from "../components/ClaudeV2";
import {
  useDebounce,
  useForm,
  useHttp,
  useLocalStorage,
  useMediaQuery,
} from "../hooks/ClaudeHooksV2";

const initialValues = {
  name: "",
  email: "",
  topic: "",
  agree: false,
};

const validateForm = (values) => {
  const errors = {};
  if (!values.name) errors.name = "Name is required";
  if (!values.email) errors.email = "Email is required";
  if (!values.topic) errors.topic = "Topic is required";
  if (!values.agree) errors.agree = "You must agree to continue";
  return errors;
};

const tableData = [
  { id: 1, name: "Ada Lovelace", status: "Active" },
  { id: 2, name: "Grace Hopper", status: "Paused" },
  { id: 3, name: "Tim Berners-Lee", status: "Active" },
];

const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  {
    key: "status",
    label: "Status",
    render: ({ value }) => (
      <span
        style={{
          padding: "0.15rem 0.5rem",
          borderRadius: 999,
          background: value === "Active" ? "#dcfce7" : "#fef3c7",
          color: value === "Active" ? "#15803d" : "#b45309",
        }}
      >
        {value}
      </span>
    ),
  },
];

export default function ClaudeV2() {
  const [toasts, setToasts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [storedPrefs, setStoredPrefs] = useLocalStorage("claude-v2-prefs", {
    visits: 1,
  });
  const { loading, data, error, execute } = useHttp();
  const darkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const debouncedTopic = useDebounce(values.topic, 500);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit, reset } =
    useForm(initialValues, validateForm);

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

  const fetchSample = async () => {
    try {
      const result = await execute("https://jsonplaceholder.typicode.com/todos/1");
      addToast(`Fetched task: ${result.title}`, "info");
    } catch {
      addToast("Unable to fetch sample data", "error");
    }
  };

  const variants = ["primary", "secondary", "outline", "danger", "success"];

  return (
    <PageLayout
      background="gradient"
      header={
        <NavBar
          logo="Claude V2 Lab"
          links={[
            { label: "Overview", href: "#overview" },
            { label: "Grid", href: "#grid" },
            { label: "Table", href: "#table" },
          ]}
          actions={<Button size="sm">Sign In</Button>}
        />
      }
      footer={
        <div style={{ fontSize: "0.9rem", color: "#e0e7ff" }}>
          Claude V2 · {darkMode ? "Dark mode detected" : "Light mode"}
        </div>
      }
    >
      <ToastContainer toasts={toasts} removeToast={removeToast} />

      <section id="overview" style={{ marginBottom: 32 }}>
        <h1>Claude V2 Catalog</h1>
        <p style={{ color: "#cbd5f5" }}>
          This demo uses the newly isolated Claude components/hooks from the catalog definition.
        </p>

        <FlexGrid gap={24}>
          <Card title="Interactive Form" hoverable>
            <Form onSubmit={onFormSubmit}>
              <Input
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
                touched={touched.name}
              />
              <Input
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
              />
              <Select
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
              <Checkbox
                label="Agree to receive updates"
                checked={values.agree}
                name="agree"
                onChange={handleChange}
              />
              <div style={{ display: "flex", gap: 8 }}>
                <Button type="submit" fullWidth>
                  Submit
                </Button>
                <Button variant="secondary" onClick={reset}>
                  Reset
                </Button>
              </div>
              <p style={{ marginTop: 8, fontSize: "0.9rem", color: "#e5e7eb" }}>
                Debounced topic preview: {debouncedTopic || "—"}
              </p>
              <p style={{ marginTop: 4, fontSize: "0.85rem" }}>
                Form sessions: {storedPrefs.visits}
              </p>
            </Form>
          </Card>

          <Card title="Button Variants" hoverable>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {variants.map((variant) => (
                <Button
                  key={variant}
                  variant={variant}
                  onClick={() => addToast(`Clicked ${variant}`, "info")}
                >
                  {variant} button
                </Button>
              ))}
            </div>
          </Card>

          <Card title="Modal Preview" hoverable>
            <p>Modal state locks the scroll when open.</p>
            <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          </Card>
        </FlexGrid>

        <div style={{ marginTop: 16 }}>
          <Button onClick={fetchSample} loading={loading}>
            Fetch Sample Data
          </Button>
          {data && <p style={{ color: "#86efac" }}>Loaded: {data.title}</p>}
          {error && <p style={{ color: "#f87171" }}>Request failed</p>}
        </div>
      </section>

      <section id="grid" style={{ marginBottom: 32 }}>
        <Card title="FlexGrid Preview">
          <FlexGrid gap={16}>
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} title={`Panel ${item}`} hoverable>
                <p style={{ margin: 0 }}>Responsive layout ensures the cards wrap.</p>
              </Card>
            ))}
          </FlexGrid>
        </Card>
      </section>

      <section id="table" style={{ marginBottom: 32 }}>
        <Card title="Catalog Table">
          <Table columns={columns} data={tableData} onRowClick={(row) => addToast(row.name)} />
        </Card>
      </section>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Claude V2 Modal"
      >
        <p>This modal is implemented with the catalog layout tokens and modal behavior.</p>
        <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
          <Button variant="secondary" onClick={() => setModalOpen(false)}>
            Close
          </Button>
          <Button
            variant="success"
            onClick={() => {
              addToast("Modal confirmed", "success");
              setModalOpen(false);
            }}
          >
            Confirm
          </Button>
        </div>
      </Modal>
    </PageLayout>
  );
}
