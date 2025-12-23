import { Form } from '@base-ui/react/form';
<Form
  onFormSubmit={async (formValues) => {
    const payload = {
      product_id: formValues.id,
      order_quantity: formValues.quantity,
    };
    await fetch('https://api.example.com', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }}
/>;