import React, { useState } from "react";
import { 
  Button, 
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
  Skeleton
} from "../components/OpenAiV5";
import { 
  useForm, 
  useToast,
  ToastProvider,
  useLocalStorage,
  useBreakpoint
} from "../hooks/OpenAiV5";
import { PageLayout, NavBar } from "../themes/OpenAiV5";

function OpenAiV5ExamplesContent() {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const { push } = useToast();
  const { name: breakpoint } = useBreakpoint();

  // Form demo
  const { values, handleChange, handleSubmit, errors } = useForm({
    initialValues: { name: "", email: "", message: "", agree: false },
    validate: (vals) => {
      const errs = {};
      if (!vals.name) errs.name = "Name is required";
      if (!vals.email) errs.email = "Email is required";
      if (!vals.agree) errs.agree = "You must agree to continue";
      return errs;
    },
    onSubmit: (vals) => {
      push({ title: "Form Submitted!", message: JSON.stringify(vals), timeoutMs: 4000 });
    },
  });

  // DataTable demo
  const sampleData = [
    { id: 1, name: "Alice", role: "Developer", status: "Active" },
    { id: 2, name: "Bob", role: "Designer", status: "Active" },
    { id: 3, name: "Charlie", role: "Manager", status: "Inactive" },
    { id: 4, name: "Diana", role: "Developer", status: "Active" },
    { id: 5, name: "Eve", role: "QA", status: "Active" },
  ];

  const columns = [
    { key: "name", header: "Name" },
    { key: "role", header: "Role" },
    { 
      key: "status", 
      header: "Status",
      render: ({ value }) => (
        <span style={{ 
          padding: "4px 8px", 
          borderRadius: 8, 
          background: value === "Active" ? "#10b981" : "#6b7280",
          color: "#fff",
          fontSize: 12
        }}>
          {value}
        </span>
      )
    },
  ];

  return (
    <PageLayout
      nav={
        <NavBar 
          brand="OpenAiV5 Demo" 
          links={[
            { label: "Home", href: "#" },
            { label: "Components", href: "#components" },
            { label: "Docs", href: "#docs" },
          ]}
          actions={
            <Button size="sm" onClick={() => push({ title: "Hello!", message: "Toast clicked" })}>
              Test Toast
            </Button>
          }
        />
      }
      footer={
        <div style={{ textAlign: "center", fontSize: 13 }}>
          OpenAiV5 UI Kit • Breakpoint: {breakpoint}
        </div>
      }
    >
      <div style={{ display: "grid", gap: 24 }}>
        {/* Hero */}
        <Card>
          <CardHeader 
            title="OpenAiV5 UI Kit" 
            subtitle="A complete component library extracted from OpenAi.jsx"
          />
          <CardBody>
            <p style={{ marginBottom: 16 }}>
              This page demonstrates all extracted components working together: buttons, forms, 
              cards, modals, drawers, data tables, toasts, and more.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
              <Button variant="secondary" onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
              <Button variant="danger" onClick={() => push({ title: "Error!", message: "Something went wrong", variant: "error" })}>
                Show Error Toast
              </Button>
            </div>
          </CardBody>
        </Card>

        {/* Form Demo */}
        <Card>
          <CardHeader title="Form Components" subtitle="All form inputs with validation" />
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormRow cols={2}>
                <Input 
                  label="Name" 
                  name="name" 
                  value={values.name} 
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Enter your name"
                />
                <Input 
                  label="Email" 
                  name="email"
                  type="email"
                  value={values.email} 
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="you@example.com"
                />
              </FormRow>
              
              <TextArea 
                label="Message" 
                name="message"
                value={values.message} 
                onChange={handleChange}
                placeholder="Tell us about yourself..."
                rows={3}
              />

              <Select
                label="Country"
                name="country"
                options={[
                  { value: "", label: "Select a country" },
                  { value: "us", label: "United States" },
                  { value: "uk", label: "United Kingdom" },
                  { value: "ca", label: "Canada" },
                ]}
              />

              <Checkbox 
                label="I agree to the terms and conditions" 
                name="agree"
                checked={values.agree}
                onChange={handleChange}
              />

              <Switch 
                label="Enable dark mode (stored in localStorage)"
                value={darkMode}
                onChange={setDarkMode}
              />

              <Button type="submit" loading={false}>Submit Form</Button>
            </Form>
          </CardBody>
        </Card>

        {/* Loading States */}
        <Card>
          <CardHeader title="Loading States" />
          <CardBody>
            <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
              <div>
                <p style={{ marginBottom: 8, fontSize: 13 }}>Spinner:</p>
                <Spinner size={24} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ marginBottom: 8, fontSize: 13 }}>Skeleton:</p>
                <Skeleton height={16} width="100%" />
                <div style={{ height: 8 }} />
                <Skeleton height={16} width="80%" />
              </div>
              <Button loading>Loading Button</Button>
            </div>
          </CardBody>
        </Card>

        {/* Card Grid */}
        <div>
          <h2 style={{ marginBottom: 16, fontSize: 20, fontWeight: 700 }}>Card Grid Example</h2>
          <CardGrid minCardWidth={200}>
            <Card>
              <CardBody>
                <div style={{ fontSize: 32, marginBottom: 8 }}>📊</div>
                <div style={{ fontWeight: 700 }}>Analytics</div>
                <div style={{ fontSize: 13, color: "rgba(0,0,0,.6)" }}>View your stats</div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <div style={{ fontSize: 32, marginBottom: 8 }}>⚙️</div>
                <div style={{ fontWeight: 700 }}>Settings</div>
                <div style={{ fontSize: 13, color: "rgba(0,0,0,.6)" }}>Manage preferences</div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <div style={{ fontSize: 32, marginBottom: 8 }}>👤</div>
                <div style={{ fontWeight: 700 }}>Profile</div>
                <div style={{ fontSize: 13, color: "rgba(0,0,0,.6)" }}>Edit your info</div>
              </CardBody>
            </Card>
          </CardGrid>
        </div>

        {/* DataTable */}
        <DataTable 
          columns={columns}
          data={sampleData}
          searchable
          selectable
          onSelectionChange={(ids) => console.log("Selected:", ids)}
          onRowClick={(row) => push({ title: "Row Clicked", message: row.name })}
        />
      </div>

      {/* Modal */}
      <Modal 
        open={modalOpen} 
        onClose={() => setModalOpen(false)}
        title="Example Modal"
        footer={
          <>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button onClick={() => { setModalOpen(false); push({ title: "Confirmed!" }); }}>
              Confirm
            </Button>
          </>
        }
      >
        <p>This is a modal dialog. Click outside or press ESC to close.</p>
        <p style={{ marginTop: 12 }}>You can include any content here: forms, images, or other components.</p>
      </Modal>

      {/* Drawer */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title="Example Drawer"
        side="right"
      >
        <p>This is a drawer component sliding from the right.</p>
        <div style={{ height: 16 }} />
        <Button onClick={() => setDrawerOpen(false)}>Close Drawer</Button>
      </Drawer>
    </PageLayout>
  );
}

export default function OpenAiV5Examples() {
  return (
    <ToastProvider>
      <OpenAiV5ExamplesContent />
    </ToastProvider>
  );
}
