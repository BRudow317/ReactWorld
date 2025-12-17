import { useMemo, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardGrid,
  CardHeader,
  DataTable,
  Drawer,
  Form,
  FormRow,
  Input,
  Modal,
  Skeleton,
  Spinner,
  Switch,
  TextArea,
} from "../components/OpenAiV2";
import { ToastContainerV2, ToastProviderV2 } from "../components/toastV2";
import {
  useApiMutation,
  useApiQuery,
  useAsync,
  useBreakpoint,
  useDebounce,
  useForm,
  useLocalStorage,
  useToast,
} from "../hooks/OpenAiHooksV2";
import { PageLayout, NavBar } from "../layouts/OpenAiV2";
import { clamp, toTitleCase } from "../utils/OpenAiUtils";

const tableColumns = [
  { key: "name", header: "Name", sortable: true },
  { key: "role", header: "Role", sortable: true },
  {
    key: "status",
    header: "Status",
    sortable: true,
    render: ({ value }) => (
      <span
        style={{
          padding: "0.2rem 0.6rem",
          borderRadius: 999,
          background: value === "Active" ? "#d1fae5" : "#fef9c3",
          color: value === "Active" ? "#0f766e" : "#7c2d12",
          fontSize: "0.8rem",
          fontWeight: 600,
        }}
      >
        {value}
      </span>
    ),
  },
];

const tableData = [
  { id: 1, name: "Alice Zar", role: "Engineer", status: "Active" },
  { id: 2, name: "Ben Lee", role: "Designer", status: "Paused" },
  { id: 3, name: "Camila Ngo", role: "PM", status: "Active" },
  { id: 4, name: "Drew Moon", role: "Research", status: "Active" },
  { id: 5, name: "Eve Park", role: "DevOps", status: "Paused" },
  { id: 6, name: "Finley Cho", role: "Support", status: "Active" },
];

const utilities = [
  { label: "clamp(-5, 0, 10)", result: clamp(-5, 0, 10) },
  { label: "clamp(15, 0, 10)", result: clamp(15, 0, 10) },
  { label: `toTitleCase("hello-world-example")`, result: toTitleCase("hello-world-example") },
];

function OpenAIExamplesV2Content() {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const breakpoint = useBreakpoint();
  const debouncedSearch = useDebounce(searchTerm, 500);
  const [counter, setCounter] = useLocalStorage("openai-v2-counter", { count: 0 });
  const toast = useToast();

  const form = useForm({
    initialValues: { name: "", email: "", message: "" },
    validate(values) {
      const validationErrors = {};
      if (!values.name) validationErrors.name = "Name is required";
      if (!values.email) validationErrors.email = "Email is required";
      if (!values.message) validationErrors.message = "Message is required";
      return validationErrors;
    },
    onSubmit(values) {
      toast.push({
        title: "Form submitted",
        message: `We received: ${values.message.slice(0, 30)}`,
      });
    },
  });

  const asyncDemo = useAsync(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { message: "Async flow complete" };
  });

  const query = useApiQuery("/api/openai-demo");
  const mutation = useApiMutation("/api/openai-demo");

  const handleMutation = async () => {
    try {
      await mutation.run({ name: "OpenAI V2" });
      toast.push({
        title: "Mutation succeeded",
        message: "Simulated API call completed",
      });
    } catch {
      toast.push({
        title: "Mutation failed",
        message: "Current API endpoint is a placeholder",
        type: "error",
      });
    }
  };

  const cards = useMemo(
    () => [
      {
        title: "Loading + Skeleton",
        body: (
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <Spinner />
            <Skeleton width={120} height={16} />
          </div>
        ),
      },
      {
        title: "Drawer state",
        body: (
          <Button variant="secondary" onClick={() => setDrawerOpen(true)}>
            Open Drawer
          </Button>
        ),
      },
      {
        title: "Async hook",
        body: (
          <Button
            variant="ghost"
            onClick={() => asyncDemo.run()}
            loading={asyncDemo.status === "pending"}
          >
            Trigger async operation
          </Button>
        ),
        footer: (
          <div>
            Status: <strong>{asyncDemo.status}</strong>
          </div>
        ),
      },
    ],
    [asyncDemo]
  );

  const dataTableColumns = useMemo(() => tableColumns, []);

  return (
    <PageLayout
      backgroundVariant="gradient"
      nav={
        <NavBar
          brand="OpenAI V2 Demo"
          links={[
            { label: "Components", onClick: () => {} },
            { label: "Hooks", onClick: () => {} },
            { label: "Utilities", onClick: () => {} },
          ]}
          actions={
            <Button
              size="sm"
              variant="secondary"
              onClick={() =>
                toast.push({
                  title: "Toast",
                  message: "Feel the toast in OpenAI V2",
                })
              }
            >
              Show Toast
            </Button>
          }
        />
      }
    >
      <ToastContainerV2 />

      <section style={{ marginBottom: 32 }}>
        <Card>
          <CardHeader title="Component Showcase" subtitle="Buttons, forms, and overlays" />
          <CardBody>
            <CardGrid minCardWidth={220}>
              {cards.map((card) => (
                <Card key={card.title}>
                  <CardHeader title={card.title} />
                  <CardBody>{card.body}</CardBody>
                  {card.footer && <CardFooter>{card.footer}</CardFooter>}
                </Card>
              ))}
            </CardGrid>
          </CardBody>
        </Card>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Card>
          <CardHeader title="Forms & Inputs" subtitle="useForm demonstration" />
          <CardBody>
            <Form onSubmit={form.handleSubmit}>
              <FormRow cols={2}>
                <Input
                  label="Name"
                  name="name"
                  value={form.values.name}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  error={form.errors.name}
                  touched={form.touched.name}
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={form.values.email}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  error={form.errors.email}
                  touched={form.touched.email}
                />
              </FormRow>
              <TextArea
                label="Message"
                name="message"
                value={form.values.message}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <Switch label="Enable notifications" value={toggleState} onChange={setToggleState} />
              <Button type="submit">Send Message</Button>
            </Form>
            <div style={{ marginTop: 12, fontSize: "0.9rem" }}>
              Saved count: {counter.count}
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setCounter({ count: counter.count + 1 })}
                style={{ marginLeft: 8 }}
              >
                Increment
              </Button>
            </div>
          </CardBody>
        </Card>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Card>
          <CardHeader title="Hooks & Utilities" subtitle="Breakpoints, debounce, toast, and API" />
          <CardBody>
            <p>
              Current breakpoint: <strong>{breakpoint.name}</strong> ({JSON.stringify(breakpoint)})
            </p>
            <FormRow cols={2}>
              <Input
                label="Search (debounced)"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <Input label="Debounced value" value={debouncedSearch} readOnly />
            </FormRow>
            <div style={{ marginTop: 12 }}>
              <Button onClick={handleMutation} variant="secondary">
                Simulate mutation
              </Button>
              {mutation.status === "pending" && (
                <span style={{ marginLeft: 8 }}>Submitting...</span>
              )}
            </div>
            <div style={{ marginTop: 12, fontSize: "0.85rem", color: "#475569" }}>
              API query status: {query.status ?? "idle"}
            </div>
          </CardBody>
        </Card>
      </section>

      <section style={{ marginBottom: 32 }}>
        <Card>
          <CardHeader title="Data Table" subtitle="Sortable, searchable table" />
          <CardBody>
            <DataTable
              columns={dataTableColumns}
              data={tableData}
              searchable
              selectable
              onRowClick={(row) => toast.push({ title: "Row clicked", message: row.name })}
            />
          </CardBody>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader title="Utilities" subtitle="Clamp + toTitleCase outputs" />
          <CardBody>
            <ul>
              {utilities.map((item) => (
                <li key={item.label} style={{ marginBottom: 8 }}>
                  <strong>{item.label}:</strong> {item.result}
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </section>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="OpenAI V2 Modal">
        <p style={{ marginTop: 0 }}>This modal is part of the OpenAI catalog demos.</p>
        <Button onClick={() => setModalOpen(false)}>Close</Button>
      </Modal>

      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <p style={{ margin: 0 }}>Simple drawer content.</p>
        <Button size="sm" onClick={() => setDrawerOpen(false)}>
          Close drawer
        </Button>
      </Drawer>
    </PageLayout>
  );
}

export default function OpenAIExamplesV2() {
  return (
    <ToastProviderV2>
      <OpenAIExamplesV2Content />
    </ToastProviderV2>
  );
}
