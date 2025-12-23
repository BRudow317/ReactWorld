import { Form } from '@base-ui/react/form';
<Form
  onSubmit={async (event) => {
    // Prevent the browser's default full-page refresh
    event.preventDefault();
    // Create a FormData object
    const formData = new FormData(event.currentTarget);
    // Send the FormData instance in a fetch request
    await fetch('https://api.example.com', {
      method: 'POST',
      body: formData,
    });
  }}
/>;