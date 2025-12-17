import React, { useState, useEffect } from 'react';
import { LibraryProvider } from '../themes/Gemini/GeminiThemeContext';
import { useApi } from '../hooks/GeminiHooks/useApi';
import { Button } from '../components/Gemini/Button';
import { Card } from '../components/Gemini/Card';
import { DataTable } from '../components/Gemini/DataTable';
import { FlexGrid } from '../components/Gemini/FlexGrid';
import { Footer } from '../components/Gemini/Footer';
import { Header } from '../components/Gemini/Header';
import { NavBar } from '../components/Gemini/NavBar';
import { PageLayout } from '../components/Gemini/PageLayout';
import { SmartForm } from '../components/Gemini/SmartForm';
import { Spinner } from '../components/Gemini/Spinner';

export const GeminiExamples = () => {
  // Use the API hook
  const api = useApi('https://jsonplaceholder.typicode.com');
  const [users, setUsers] = useState([]);

  // Fetch data on load
  useEffect(() => {
    // Simulating a fetch
    // api.get('/users').then(data => setUsers(data));
    
    // Mock data for demo
    setUsers([
      { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
      { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
      { id: 3, name: 'Charlie Day', email: 'charlie@example.com', role: 'Editor' },
    ]);
  }, []);

  const handleFormSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
    // api.post('/users', values);
  };

  return (
    <LibraryProvider>
      <PageLayout
        header={
          <Header>
            <NavBar 
              logo="UniversalUI" 
              links={[{ label: 'Home', href: '#' }, { label: 'Dashboard', href: '#' }, { label: 'Settings', href: '#' }]} 
            />
          </Header>
        }
        footer={
          <Footer>
            © 2023 Universal UI Kit. All rights reserved.
          </Footer>
        }
      >
        <div style={{ marginBottom: '2rem' }}>
          <h1>Dashboard</h1>
          <p>Welcome to your reusable component library demo.</p>
        </div>

        {/* FlexGrid with Cards */}
        <h2 style={{ marginBottom: '1rem' }}>Stats Overview</h2>
        <FlexGrid>
          <Card title="Total Users" footer={<Button variant="secondary">View Details</Button>}>
            <h3>1,245</h3>
            <p>Active users this month</p>
          </Card>
          <Card title="Revenue">
            <h3>$34,500</h3>
            <p>Gross revenue generated</p>
          </Card>
          <Card title="System Status">
            <p style={{ color: 'green', fontWeight: 'bold' }}>● Operational</p>
          </Card>
        </FlexGrid>

        <hr style={{ margin: '2rem 0', border: '0', borderTop: '1px solid #ccc' }} />

        {/* Interactive Table */}
        <h2 style={{ marginBottom: '1rem' }}>User Directory</h2>
        <Card>
          {api.loading ? <Spinner /> : (
            <DataTable 
              columns={[
                { key: 'id', label: 'ID' },
                { key: 'name', label: 'Full Name' },
                { key: 'email', label: 'Email Address' },
                { key: 'role', label: 'Permission' },
              ]}
              data={users}
            />
          )}
        </Card>

        <hr style={{ margin: '2rem 0', border: '0', borderTop: '1px solid #ccc' }} />

        {/* Smart Form */}
        <div style={{ maxWidth: '500px' }}>
          <h2 style={{ marginBottom: '1rem' }}>Add New User</h2>
          <Card>
            <SmartForm 
              fields={[
                { name: 'fullName', label: 'Full Name', placeholder: 'Enter name...' },
                { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter email...' },
                { name: 'password', label: 'Password', type: 'password', placeholder: '••••••' }
              ]}
              onSubmit={handleFormSubmit}
            />
          </Card>
        </div>

      </PageLayout>
    </LibraryProvider>
  );
};
