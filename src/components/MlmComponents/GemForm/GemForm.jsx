import React, { useState } from 'react';
import { GemInput, GemButton } from '..';

// Smart Form Component (Handles state automatically)
export const GemForm = ({ initialValues = {}, onSubmit, fields }) => {
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
        <GemInput
          key={field.name}
          {...field}
          value={values[field.name] || ''}
          onChange={handleChange}
        />
      ))}
      <GemButton type="submit" style={{ width: '100%' }}>Submit</GemButton>
    </form>
  );
};
