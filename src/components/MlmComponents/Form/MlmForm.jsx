import React, { useState } from "react";
//import  styles from "../../themes/structure/Layout.module.css";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardGrid,
  Checkbox,
  Form,
  FormRow,
  Input,
  TextArea,
  Select,
  //Switch
} from "../../MlmComponents";
import { useForm } from "./useForm";

export const MlmForm = () => {
  const { values, errors, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
      country: "",
      agree: false,
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) errors.name = "Name is required";
      if (!values.email) errors.email = "Email is required";
      if (!values.message) errors.message = "Message is required";
      if (!values.country) errors.country = "Country is required";
      if (!values.agree) errors.agree = "You must agree to the terms";
      return errors;
    },
    onSubmit: (values) => {
      console.log("Form submitted", values);
    },
  });

  return (
    <Card>
      <CardHeader
        title="Mlm Form Component"
        subtitle="Validation Examples"
      />
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
            placeholder="Describe the reason for inquiry..."
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
          <Button type="submit" loading={false}>
            Submit Form
          </Button>
        </Form>
      </CardBody>
      <CardFooter />
    </Card>
  );
};

export default MlmForm;
