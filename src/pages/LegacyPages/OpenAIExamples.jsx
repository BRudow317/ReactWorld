import React, { useState } from "react";
import {
  Button,
  IconButton,
  Input,
  TextArea,
  Select,
  Checkbox,
  Switch,
  Form,
  FormRow,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardGrid,
  Modal,
  Drawer,
  DataTable,
  Spinner,
  Skeleton,
} from "../../components";
import {
  useForm,
  useBreakpoint,
  useLocalStorage,
  useDebounce,
  useAsync,
  useApiQuery,
  useToast,
} from "../../hooks";
import {
  PageLayout,
  NavBar,
  Container,
  Background,
} from "../../layouts";
import { toTitleCase, clamp } from "../../utils";
import { api } from "../../api";

/**
 * OpenAIExamples - Comprehensive showcase of all UI components, hooks, and utilities
 */
export default function OpenAIExamples() {
  // State for various demonstrations
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("components");

  // Hooks demonstrations
  const breakpoint = useBreakpoint();
  const toast = useToast();
  const [savedData, setSavedData] = useLocalStorage("exampleData", { count: 0 });

  // Form hook demonstration
  const contactForm = useForm({
    initialValues: { name: "", email: "", message: "" },
    validate: (values) => {
      const errors = {};
      if (!values.name) errors.name = "Name is required";
      if (!values.email) errors.email = "Email is required";
      if (!values.message) errors.message = "Message is required";
      return errors;
    },
    onSubmit: (values) => {
      toast.push({
        title: "Form Submitted!",
        message: `Received message from ${values.name}`,
      });
      contactForm.reset();
    },
  });

  // Debounced search example
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);

  // DataTable example data
  const tableData = [
    { id: 1, name: "Alice Johnson", role: "Designer", status: "Active" },
    { id: 2, name: "Bob Smith", role: "Developer", status: "Active" },
    { id: 3, name: "Carol White", role: "Manager", status: "Inactive" },
    { id: 4, name: "David Brown", role: "Developer", status: "Active" },
    { id: 5, name: "Eve Davis", role: "Designer", status: "Active" },
    { id: 6, name: "Frank Miller", role: "Developer", status: "Inactive" },
  ];

  const tableColumns = [
    { key: "name", header: "Name", sortable: true },
    { key: "role", header: "Role", sortable: true },
    {
      key: "status",
      header: "Status",
      render: ({ value }) => (
        <span
          style={{
            padding: "4px 8px",
            borderRadius: 4,
            background: value === "Active" ? "rgba(16,185,129,.15)" : "rgba(107,114,128,.15)",
            color: value === "Active" ? "rgba(16,185,129,1)" : "rgba(107,114,128,1)",
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          {value}
        </span>
      ),
    },
  ];

  // Toggle switch state
  const [toggleState, setToggleState] = useState(false);

  // Async example
  const asyncDemo = useAsync(
    async () => {
      await new Promise((r) => setTimeout(r, 1000));
      return { message: "Async operation completed!" };
    },
    []
  );

  return (
    <PageLayout
      backgroundVariant="gradient"
      nav={
        <NavBar
          brand="OpenAI Component Library"
          links={[
            { label: "Components", href: "#components", onClick: () => setActiveTab("components") },
            { label: "Hooks", href: "#hooks", onClick: () => setActiveTab("hooks") },
            { label: "Utilities", href: "#utilities", onClick: () => setActiveTab("utilities") },
          ]}
          currentPath={`#${activeTab}`}
          actions={
            <Button
              size="sm"
              variant="secondary"
              onClick={() =>
                toast.push({
                  title: "Hello!",
                  message: "Welcome to the component showcase",
                })
              }
            >
              Show Toast
            </Button>
          }
        />
      }
      children={
        <Container maxWidth={1200}>
          <div style={{ padding: "40px 0" }}>
            <h1 style={{ marginBottom: 8, fontSize: 36, fontWeight: 800 }}>Component Showcase</h1>
            <p style={{ marginBottom: 40, color: "rgba(0,0,0,.62)", fontSize: 16 }}>
              Explore all the available components, hooks, and utilities from the OpenAI Components library.
              Current breakpoint: <strong>{breakpoint.name}</strong>
            </p>

            {/* COMPONENTS TAB */}
            {activeTab === "components" && (
              <div style={{ display: "grid", gap: 40 }}>
                {/* Buttons */}
                <Card>
                  <CardHeader title="Buttons" subtitle="Primary, secondary, danger, and ghost variants" />
                  <CardBody>
                    <FormRow cols={breakpoint.isMd ? 4 : 2} style={{ gap: 12 }}>
                      <Button variant="primary">Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="danger">Danger</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button size="sm">Small</Button>
                      <Button size="lg">Large</Button>
                      <Button loading>Loading</Button>
                      <Button disabled>Disabled</Button>
                      <Button leftIcon="🚀">With Icon</Button>
                      <Button rightIcon="→">Arrow</Button>
                    </FormRow>
                  </CardBody>
                </Card>

                {/* Form Inputs */}
                <Card>
                  <CardHeader title="Form Inputs" subtitle="Input fields with validation and states" />
                  <CardBody>
                    <FormRow cols={breakpoint.isMd ? 2 : 1} style={{ gap: 20 }}>
                      <Input
                        label="Text Input"
                        placeholder="Enter text..."
                        helperText="This is a helper text"
                      />
                      <Input
                        label="With Error"
                        placeholder="This has an error"
                        error="This field is required"
                      />
                      <TextArea label="Message" placeholder="Enter your message..." rows={4} />
                      <Select
                        label="Select Option"
                        options={[
                          { value: "option1", label: "Option 1" },
                          { value: "option2", label: "Option 2" },
                          { value: "option3", label: "Option 3" },
                        ]}
                      />
                    </FormRow>
                  </CardBody>
                </Card>

                {/* Checkboxes and Switches */}
                <Card>
                  <CardHeader title="Toggles" subtitle="Checkboxes and switches" />
                  <CardBody>
                    <div style={{ display: "grid", gap: 16 }}>
                      <Checkbox label="Accept terms and conditions" />
                      <Checkbox label="Subscribe to newsletter" />
                      <Switch label="Enable notifications" value={toggleState} onChange={setToggleState} />
                      <Switch label="Dark mode" value={false} />
                    </div>
                  </CardBody>
                </Card>

                {/* Cards & Grid */}
                <Card>
                  <CardHeader title="Card Grid" subtitle="Responsive card layout" />
                  <CardBody>
                    <CardGrid minCardWidth={200}>
                      {[1, 2, 3, 4].map((num) => (
                        <Card key={num} style={{ background: "rgba(59,130,246,.05)" }}>
                          <CardBody>
                            <div style={{ textAlign: "center", padding: "20px 0" }}>
                              <div style={{ fontSize: 32, marginBottom: 8 }}>🎨</div>
                              <div style={{ fontWeight: 600, marginBottom: 4 }}>Card {num}</div>
                              <div style={{ fontSize: 12, color: "rgba(0,0,0,.62)" }}>
                                Responsive grid
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      ))}
                    </CardGrid>
                  </CardBody>
                </Card>

                {/* Loading States */}
                <Card>
                  <CardHeader title="Loading States" subtitle="Spinner and skeleton loading" />
                  <CardBody>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 20 }}>
                      <div style={{ textAlign: "center" }}>
                        <Spinner size={24} />
                        <div style={{ fontSize: 12, marginTop: 8, color: "rgba(0,0,0,.62)" }}>Spinner</div>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <Skeleton height={24} width={80} style={{ margin: "0 auto" }} />
                        <div style={{ fontSize: 12, marginTop: 8, color: "rgba(0,0,0,.62)" }}>Skeleton</div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                {/* Modal & Drawer */}
                <Card>
                  <CardHeader title="Modals & Drawers" subtitle="Dialog and drawer components" />
                  <CardBody>
                    <FormRow cols={2}>
                      <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
                      <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
                    </FormRow>
                  </CardBody>
                </Card>

                {/* Data Table */}
                <Card>
                  <CardHeader title="Data Table" subtitle="Sortable, searchable, paginated table" />
                  <CardBody>
                    <DataTable
                      columns={tableColumns}
                      data={tableData}
                      searchable
                      selectable
                      pageSizeOptions={[3, 5, 10]}
                      defaultPageSize={5}
                    />
                  </CardBody>
                </Card>

                {/* Contact Form */}
                <Card>
                  <CardHeader title="Contact Form" subtitle="Example form with validation" />
                  <CardBody>
                    <Form onSubmit={contactForm.handleSubmit}>
                      <Input
                        label="Your Name"
                        name="name"
                        value={contactForm.values.name}
                        onChange={contactForm.handleChange}
                        onBlur={contactForm.handleBlur}
                        error={contactForm.touched.name ? contactForm.errors.name : null}
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        name="email"
                        value={contactForm.values.email}
                        onChange={contactForm.handleChange}
                        onBlur={contactForm.handleBlur}
                        error={contactForm.touched.email ? contactForm.errors.email : null}
                      />
                      <TextArea
                        label="Message"
                        name="message"
                        value={contactForm.values.message}
                        onChange={contactForm.handleChange}
                        onBlur={contactForm.handleBlur}
                        error={contactForm.touched.message ? contactForm.errors.message : null}
                      />
                      <Button type="submit" variant="primary" loading={contactForm.submitting}>
                        Send Message
                      </Button>
                    </Form>
                  </CardBody>
                </Card>
              </div>
            )}

            {/* HOOKS TAB */}
            {activeTab === "hooks" && (
              <div style={{ display: "grid", gap: 40 }}>
                {/* useBreakpoint */}
                <Card>
                  <CardHeader title="useBreakpoint" subtitle="Responsive design hook" />
                  <CardBody>
                    <div style={{ display: "grid", gap: 8, fontFamily: "monospace", fontSize: 13 }}>
                      <div>
                        <strong>Current breakpoint:</strong> {breakpoint.name}
                      </div>
                      <div>
                        <strong>Extra small (xs):</strong> {String(!breakpoint.isSm)}
                      </div>
                      <div>
                        <strong>Small (sm):</strong> {String(breakpoint.isSm && !breakpoint.isMd)}
                      </div>
                      <div>
                        <strong>Medium (md):</strong> {String(breakpoint.isMd && !breakpoint.isLg)}
                      </div>
                      <div>
                        <strong>Large (lg):</strong> {String(breakpoint.isLg && !breakpoint.isXl)}
                      </div>
                      <div>
                        <strong>Extra large (xl):</strong> {String(breakpoint.isXl)}
                      </div>
                    </div>
                  </CardBody>
                </Card>

                {/* useLocalStorage */}
                <Card>
                  <CardHeader title="useLocalStorage" subtitle="Persistent state in browser storage" />
                  <CardBody>
                    <div style={{ display: "grid", gap: 12 }}>
                      <div>
                        <div style={{ marginBottom: 8, fontSize: 12, color: "rgba(0,0,0,.62)" }}>
                          Counter: {savedData.count}
                        </div>
                        <FormRow cols={2}>
                          <Button
                            size="sm"
                            onClick={() => setSavedData({ count: savedData.count + 1 })}
                          >
                            Increment
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => setSavedData({ count: 0 })}
                          >
                            Reset
                          </Button>
                        </FormRow>
                      </div>
                      <div style={{ padding: 12, background: "rgba(0,0,0,.03)", borderRadius: 8, fontSize: 12 }}>
                        Try refreshing the page - your counter value persists!
                      </div>
                    </div>
                  </CardBody>
                </Card>

                {/* useDebounce */}
                <Card>
                  <CardHeader title="useDebounce" subtitle="Debounce user input" />
                  <CardBody>
                    <Input
                      label="Search (debounced after 500ms)"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Type something..."
                    />
                    <div style={{ marginTop: 12, padding: 12, background: "rgba(0,0,0,.03)", borderRadius: 8 }}>
                      <div style={{ fontSize: 12, color: "rgba(0,0,0,.62)" }}>
                        Raw input: <strong>{searchTerm}</strong>
                      </div>
                      <div style={{ fontSize: 12, color: "rgba(0,0,0,.62)", marginTop: 8 }}>
                        Debounced value: <strong>{debouncedSearch}</strong>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                {/* useAsync */}
                <Card>
                  <CardHeader title="useAsync" subtitle="Handle async operations with status" />
                  <CardBody>
                    <div style={{ display: "grid", gap: 12 }}>
                      <div style={{ display: "flex", gap: 8 }}>
                        <Button
                          onClick={() => asyncDemo.run()}
                          loading={asyncDemo.status === "pending"}
                        >
                          Run Async Operation
                        </Button>
                        {asyncDemo.status === "success" && (
                          <div style={{ padding: "8px 12px", background: "rgba(16,185,129,.15)", borderRadius: 8, color: "rgba(16,185,129,1)", fontSize: 12 }}>
                            ✓ {asyncDemo.data?.message}
                          </div>
                        )}
                      </div>
                      <div style={{ padding: 12, background: "rgba(0,0,0,.03)", borderRadius: 8, fontFamily: "monospace", fontSize: 12 }}>
                        Status: <strong>{asyncDemo.status}</strong>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                {/* useForm */}
                <Card>
                  <CardHeader title="useForm" subtitle="Complete form state management" />
                  <CardBody>
                    <div style={{ display: "grid", gap: 12, fontFamily: "monospace", fontSize: 12 }}>
                      <div>
                        <strong>Form Values:</strong> {JSON.stringify(contactForm.values)}
                      </div>
                      <div>
                        <strong>Errors:</strong> {JSON.stringify(contactForm.errors)}
                      </div>
                      <div>
                        <strong>Touched:</strong> {JSON.stringify(contactForm.touched)}
                      </div>
                      <div>
                        <strong>Submitting:</strong> {String(contactForm.submitting)}
                      </div>
                    </div>
                  </CardBody>
                </Card>

                {/* useToast */}
                <Card>
                  <CardHeader title="useToast" subtitle="Show notifications" />
                  <CardBody>
                    <FormRow cols={2}>
                      <Button
                        onClick={() =>
                          toast.push({
                            title: "Success",
                            message: "Operation completed successfully",
                          })
                        }
                      >
                        Success Toast
                      </Button>
                      <Button
                        onClick={() =>
                          toast.push({
                            title: "Info",
                            message: "This is an informational message",
                          })
                        }
                      >
                        Info Toast
                      </Button>
                      <Button
                        onClick={() =>
                          toast.push({
                            title: "Warning",
                            message: "This is a warning",
                            timeoutMs: 5000,
                          })
                        }
                      >
                        Warning Toast
                      </Button>
                      <Button
                        onClick={() =>
                          toast.push({
                            title: "Error",
                            message: "Something went wrong",
                          })
                        }
                      >
                        Error Toast
                      </Button>
                    </FormRow>
                  </CardBody>
                </Card>
              </div>
            )}

            {/* UTILITIES TAB */}
            {activeTab === "utilities" && (
              <div style={{ display: "grid", gap: 40 }}>
                {/* toTitleCase */}
                <Card>
                  <CardHeader title="toTitleCase()" subtitle="Convert strings to title case" />
                  <CardBody>
                    <div style={{ display: "grid", gap: 12, fontFamily: "monospace", fontSize: 12 }}>
                      <div>
                        <strong>Input:</strong> "hello_world_example"
                        <br />
                        <strong>Output:</strong> "{toTitleCase("hello_world_example")}"
                      </div>
                      <div>
                        <strong>Input:</strong> "my-component-name"
                        <br />
                        <strong>Output:</strong> "{toTitleCase("my-component-name")}"
                      </div>
                      <div>
                        <strong>Input:</strong> "API_KEY"
                        <br />
                        <strong>Output:</strong> "{toTitleCase("API_KEY")}"
                      </div>
                    </div>
                  </CardBody>
                </Card>

                {/* clamp */}
                <Card>
                  <CardHeader title="clamp()" subtitle="Constrain numbers between min and max" />
                  <CardBody>
                    <div style={{ display: "grid", gap: 12, fontFamily: "monospace", fontSize: 12 }}>
                      <div>
                        <strong>clamp(5, 0, 10):</strong> {clamp(5, 0, 10)}
                      </div>
                      <div>
                        <strong>clamp(-5, 0, 10):</strong> {clamp(-5, 0, 10)}
                      </div>
                      <div>
                        <strong>clamp(15, 0, 10):</strong> {clamp(15, 0, 10)}
                      </div>
                      <div>
                        <strong>clamp(50, 0, 100):</strong> {clamp(50, 0, 100)}
                      </div>
                    </div>
                  </CardBody>
                </Card>

                {/* API Client */}
                <Card>
                  <CardHeader title="API Client" subtitle="Fetch data with built-in auth support" />
                  <CardBody>
                    <div style={{ display: "grid", gap: 12 }}>
                      <div style={{ padding: 12, background: "rgba(0,0,0,.03)", borderRadius: 8, fontFamily: "monospace", fontSize: 12 }}>
                        <div>// Create API client</div>
                        <div style={{ color: "rgba(0,0,0,.62)", marginTop: 4, whiteSpace: "pre-wrap" }}>
                          {`const client = createApiClient({\n  baseUrl: 'https://api.example.com',\n  getAuthToken: () => token\n});`}
                        </div>
                      </div>
                      <div style={{ padding: 12, background: "rgba(0,0,0,.03)", borderRadius: 8, fontFamily: "monospace", fontSize: 12 }}>
                        <div>// Use global api instance</div>
                        <div style={{ color: "rgba(0,0,0,.62)", marginTop: 4, whiteSpace: "pre-wrap" }}>
                          {`const data = await api.get('/endpoint');\nconst result = await api.post('/users', { name: 'John' });\nawait api.put('/users/1', { name: 'Jane' });\nawait api.del('/users/1');`}
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                {/* ApiError */}
                <Card>
                  <CardHeader title="ApiError" subtitle="Custom error class for API failures" />
                  <CardBody>
                    <div style={{ padding: 12, background: "rgba(0,0,0,.03)", borderRadius: 8, fontFamily: "monospace", fontSize: 12 }}>
                      <div>{`throw new ApiError('Request failed', {`}</div>
                      <div style={{ marginLeft: 16, color: "rgba(0,0,0,.62)" }}>
                        status: 404,
                        <br />
                        data: response,
                        <br />
                        url: '/endpoint',
                        <br />
                        method: 'GET'
                      </div>
                      <div>{`});`}</div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            )}
          </div>
        </Container>
      }
    />
  );
}
