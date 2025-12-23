import { Field } from "@base-ui/react/field";
import { Form } from '@base-ui/react/form';
import { Combobox } from '@base-ui/react/combobox';
import { useTheme } from "../../themes/ThemeContext";
import { Autocomplete } from "@base-ui/react";

const COUNTRIES = [
  'United States',
  'Canada',
  'United Kingdom',
  'Australia',
  'Germany',
  'France',
  'Japan',
  'Mexico',
  'Brazil',
  'India',
];

export function BaseUiExample() {
    const { theme } = useTheme();

    const PostAddress = async (addressData) => {
        try {
          const response = await fetch('http://localhost:8008/address', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(addressData),
          });
          if (response.ok) {
            const data = await response.json();
            console.log(response.status);
            console.log('Success! Address saved:', data);
            // Reset form after successful submission
            return response.ok
          } else {
            console.error('Failed to save address:', response.statusText);
            return response.status;
          }
        } catch (error) {
          console.error('Error saving address:', error);
          return 500;
        }
      };

    const styles = {
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: '28rem',
            padding: '1.5rem',
            backgroundColor: theme === 'dark' ? 'rgba(31, 41, 55, 1)' : 'rgba(255, 255, 255, 1)',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
        heading: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
        },
        textInput: {
            width: '100%',
            padding: '0.5rem 0.75rem',
            border: theme === 'dark' ? '1px solid #374151' : '1px solid #d1d5db',
            borderRadius: '0.375rem',
            fontSize: '1rem',
        },
        label: {
            display: 'block',
            fontSize: '0.875rem',
            fontWeight: '500',
            marginBottom: '0.25rem',
        },
        error: {
            color: '#dc2626',
            fontSize: '0.875rem',
            marginTop: '0.25rem',
        },
        gridRow: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
        },
        comboboxPopup: {
            backgroundColor: 'rgba(255, 255, 255, 1)',
            border: '1px solid #d1d5db',
            borderRadius: '0.375rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            maxHeight: '15rem',
            overflowY: 'auto',
            Autocomplete: 'none',
        },
        comboboxItem: {
            padding: '0.5rem 0.75rem',
            cursor: 'pointer',
        },
        submitButton: {
            marginTop: '1rem',
            width: '100%',
            backgroundColor: theme === 'dark' ? '#1e40af' : '#2563eb',
            color: 'white',
            fontWeight: '600',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            border: 'none',
            cursor: 'pointer',
            height: '3rem',
        },
    };
  return (
    <Form 
      onSubmit={async (event) => {
          // Prevent the browser's default full-page refresh
          event.preventDefault();
          // Save reference to form before async operation
          const form = event.currentTarget;
          // Create a FormData object
          const formData = new FormData(form);
          // Convert FormData to a plain object
          const addressData = Object.fromEntries(formData.entries());
          //Debug logging
          alert(JSON.stringify(addressData));
        /* // Example:
          {
            city: "test",
            country: "United States",
            id: "4653",
            postalCode: "test",
            stateProvince: "test",
            streetAddress: "test"
          }
        */
          // Post data to backend
          const response = await PostAddress(addressData);
          if (response === true) {
            // Reset form after successful submission
            form.reset();
            alert('Address saved successfully!');
          } else {
            console.error('Failed to save address');
            alert('Failed to save address. Please try again.');
          }
      }}
      style={styles.form}
    >
      <h2 style={styles.heading}>Address Entry</h2>
      
      <Field.Root name="streetAddress" required>
        <Field.Label style={styles.label}>Street Address</Field.Label>
        <Field.Control 
          placeholder="Address" 
          style={styles.textInput} 
          defaultValue = ""
        />
        <Field.Error style={styles.error} />
      </Field.Root>

      <div style={styles.gridRow}>
        <Field.Root name="city" required>
          <Field.Label style={styles.label}>City</Field.Label>
          <Field.Control 
            placeholder="City"
            style={styles.textInput}
            defaultValue = ""
          />
          <Field.Error style={styles.error} />
        </Field.Root>

        <Field.Root name="stateProvince" required>
          <Field.Label style={styles.label}>State/Province</Field.Label>
          <Field.Control 
            placeholder="State"
            style={styles.textInput} 
            defaultValue = ""   
          />
          <Field.Error style={styles.error} />
        </Field.Root>
      </div>

      <div style={styles.gridRow}>
        <Field.Root name="postalCode" required>
          <Field.Label style={styles.label}>Postal Code</Field.Label>
          <Field.Control 
            placeholder="Postal Code"
            style={styles.textInput}
            defaultValue = ""
          />
          <Field.Error style={styles.error} />
        </Field.Root>

        <Field.Root name="country" required>
          <Field.Label style={styles.label}>Country</Field.Label>
          <Combobox.Root items={COUNTRIES}>
            <Combobox.Input 
              placeholder="United States"
              style={styles.textInput}
            />
            <Combobox.Portal>
              <Combobox.Positioner sideOffset={4}>
                <Combobox.Popup style={styles.comboboxPopup}>
                  <Combobox.List>
                    {(country) => (
                      <Combobox.Item 
                        key={country} 
                        value={country}
                        style={styles.comboboxItem}
                      >
                        {country}
                      </Combobox.Item>
                    )}
                  </Combobox.List>
                </Combobox.Popup>
              </Combobox.Positioner>
            </Combobox.Portal>
          </Combobox.Root>
          <Field.Error style={styles.error} />
        </Field.Root>
      </div>

      <button 
        type="submit"
        style={styles.submitButton}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
      >
        Save Address
      </button>
    </Form>
  );
}
