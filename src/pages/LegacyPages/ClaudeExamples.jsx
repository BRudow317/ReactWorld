import { useMemo, useState } from 'react';
import Button from '../../components/Claude/Button';
import Card from '../../components/Claude/Card';
import Checkbox from '../../components/Claude/Checkbox';
import FlexGrid from '../../components/Claude/FlexGrid';
import Form from '../../components/Claude/Form';
import Input from '../../components/Claude/Input';
import Modal from '../../components/Claude/Modal';
import NavBar from '../../components/Claude/NavBar';
import PageLayout from '../../components/Claude/PageLayout';
import Select from '../../components/Claude/Select';
import Table from '../../components/Claude/Table';
import ToastContainer from '../../components/Claude/ToastContainer';
import { useForm } from '../hooks/ClaudeHooks/useForm';

const ClaudeExamples = () => {
  const [toasts, setToasts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const { values, errors, touched, handleChange, handleBlur, handleSubmit, reset } = useForm(
    { name: '', email: '', agree: false, topic: '' },
    (vals) => {
      const validationErrors = {};
      if (!vals.name) validationErrors.name = 'Name is required';
      if (!vals.email) validationErrors.email = 'Email is required';
      if (!vals.agree) validationErrors.agree = 'You must agree to continue';
      if (!vals.topic) validationErrors.topic = 'Select a topic';
      return validationErrors;
    }
  );

  const addToast = (message, type = 'info') => {
    setToasts((prev) => [...prev, { id: Date.now(), message, type }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const tableData = useMemo(
    () => [
      { id: 1, name: 'Alice', email: 'alice@example.com', status: 'Active' },
      { id: 2, name: 'Bob', email: 'bob@example.com', status: 'Paused' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com', status: 'Active' }
    ],
    []
  );

  const columns = useMemo(
    () => [
      { key: 'id', label: 'ID' },
      { key: 'name', label: 'Name' },
      { key: 'email', label: 'Email' },
      {
        key: 'status',
        label: 'Status',
        render: (value) => (
          <span
            className={`px-2 py-1 rounded text-xs ${
              value === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {value}
          </span>
        )
      }
    ],
    []
  );

  return (
    <PageLayout
      background="gradient"
      header={
        <NavBar
          logo="ClaudeLab"
          links={[
            { href: '#overview', label: 'Overview' },
            { href: '#components', label: 'Components' },
            { href: '#events', label: 'Events' }
          ]}
          actions={<Button size="sm">Sign In</Button>}
        />
      }
      footer={
        <div className="text-center text-gray-400 text-sm">
          © 2025 Claude Lab · Built with the Claude component collection.
        </div>
      }
    >
      <ToastContainer toasts={toasts} removeToast={removeToast} />

      <section id="overview" className="space-y-6">
        <header>
          <h1 className="text-4xl font-bold text-gray-900">Claude Component Examples</h1>
          <p className="text-gray-600 mt-2">
            A taste of reusable form controls, layout primitives, and interactive UI patterns.
          </p>
        </header>

        <FlexGrid cols={{ xs: 1, md: 2, lg: 3 }} gap={6} className="mb-8">
          <Card title="Interactive Form" hoverable>
            <Form
              onSubmit={handleSubmit(() => {
                addToast('Form submitted successfully!', 'success');
                reset();
              })}
            >
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
                options={[
                  { value: '', label: 'Select a topic' },
                  { value: 'ai', label: 'AI' },
                  { value: 'design', label: 'Design' },
                  { value: 'infra', label: 'Infrastructure' }
                ]}
                value={values.topic}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.topic}
                touched={touched.topic}
              />
              <Checkbox
                label="Agree to receive updates"
                name="agree"
                checked={values.agree}
                onChange={handleChange}
              />
              {errors.agree && touched.agree && (
                <p className="text-sm text-red-600 mt-1">{errors.agree}</p>
              )}
              <div className="flex gap-2 mt-4">
                <Button type="submit" fullWidth>
                  Submit
                </Button>
                <Button variant="secondary" onClick={reset}>
                  Reset
                </Button>
              </div>
            </Form>
          </Card>

          <Card title="Button Variants" hoverable>
            <div className="flex flex-col gap-3">
              <Button variant="primary" onClick={() => addToast('Primary clicked', 'info')}>
                Primary
              </Button>
              <Button variant="secondary" onClick={() => addToast('Secondary clicked', 'info')}>
                Secondary
              </Button>
              <Button variant="outline" onClick={() => addToast('Outlined', 'warning')}>
                Outline
              </Button>
              <Button variant="danger" onClick={() => addToast('Danger!', 'error')}>
                Danger
              </Button>
              <Button variant="success" onClick={() => addToast('Success!', 'success')}>
                Success
              </Button>
            </div>
          </Card>

          <Card title="Modal Preview" hoverable>
            <p className="text-gray-600 mb-4">Open the modal to see the card stack in action.</p>
            <Button onClick={() => setModalOpen(true)} fullWidth>
              Launch Modal
            </Button>
          </Card>
        </FlexGrid>
      </section>

      <section id="components" className="space-y-6 mb-10">
        <Card title="Interactive Table">
          <Table columns={columns} data={tableData} onRowClick={(row) => addToast(`Selected ${row.name}`)} />
        </Card>
      </section>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Claude Modal" size="md">
        <p className="text-gray-600 mb-4">
          This modal demonstrates how to layer content on top of other sections while locking the scroll.
        </p>
        <div className="flex gap-2 justify-end">
          <Button variant="secondary" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              addToast('Modal confirmed', 'success');
              setModalOpen(false);
            }}
          >
            Confirm
          </Button>
        </div>
      </Modal>
    </PageLayout>
  );
};

export default ClaudeExamples;
