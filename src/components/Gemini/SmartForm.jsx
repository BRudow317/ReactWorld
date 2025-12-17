import React, { useState } from 'react';
import { Input } from './Input';
import { Button } from './Button';

// Smart Form Component (Handles state automatically)
export const SmartForm = ({ initialValues = {}, onSubmit, fields }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <Input
          key={field.name}
          {...field}
          value={values[field.name] || ''}
          onChange={handleChange}
        />
      ))}
      <Button type="submit" style={{ width: '100%' }}>Submit</Button>
    </form>
  );
};
