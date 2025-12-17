# OpenAi Components - Modular Structure

This directory contains the refactored and modularized version of the OpenAiComponents library from the original monolithic file.

## Directory Structure

```
src/
├── api/                          # API Client
│   ├── apiClient.js             # createApiClient factory function
│   └── index.js                 # Exports (includes global 'api' instance)
│
├── hooks/                        # React Hooks
│   ├── useMediaQuery.js         # Media query hook for responsive design
│   ├── useBreakpoint.js         # Breakpoint detection
│   ├── useLocalStorage.js       # localStorage persistence
│   ├── useDebounce.js           # Debounce values
│   ├── usePrevious.js           # Track previous values
│   ├── useEventListener.js      # Event listener management
│   ├── useOnClickOutside.js     # Detect clicks outside element
│   ├── useAsync.js              # Async state management
│   ├── useApiQuery.js           # Data fetching with caching
│   ├── useApiMutation.js        # Mutations with state
│   ├── useForm.js               # Form state management
│   ├── useToast.js              # Toast notifications
│   └── index.js                 # Export all hooks
│
├── utils/                        # Utility Functions
│   ├── cn.js                    # Class name concatenation
│   ├── clamp.js                 # Number clamping
│   ├── toTitleCase.js           # String formatting
│   ├── ApiError.js              # Custom error class
│   └── index.js                 # Export all utilities
│
├── styles/                       # Styling & Animations
│   ├── baseStyles.js            # Base style constants
│   └── GlobalAnimations.jsx     # CSS keyframes component
│
├── components/
│   ├── primitives/              # Basic UI Components
│   │   ├── Spinner.jsx
│   │   ├── Skeleton.jsx
│   │   ├── Button.jsx
│   │   ├── IconButton.jsx
│   │   ├── Label.jsx
│   │   ├── HelperText.jsx
│   │   ├── ErrorText.jsx
│   │   ├── Input.jsx
│   │   ├── TextArea.jsx
│   │   ├── Select.jsx
│   │   ├── Checkbox.jsx
│   │   ├── Switch.jsx
│   │   ├── Form.jsx
│   │   ├── FormRow.jsx
│   │   └── index.js
│   │
│   ├── cards/                   # Card Components
│   │   ├── Card.jsx
│   │   ├── CardHeader.jsx
│   │   ├── CardBody.jsx
│   │   ├── CardFooter.jsx
│   │   ├── CardGrid.jsx
│   │   └── index.js
│   │
│   ├── interactive/             # Complex Interactive Components
│   │   ├── Modal.jsx
│   │   ├── Drawer.jsx
│   │   ├── DataTable.jsx
│   │   └── index.js
│   │
│   ├── toast/                   # Toast Notification System
│   │   ├── ToastProvider.jsx
│   │   └── index.js
│   │
│   └── index.js                 # Export all components
│
├── layouts/                      # Layout Components
│   ├── Background.jsx           # Page background variants
│   ├── Container.jsx            # Max-width wrapper
│   ├── HeaderContainer.jsx      # Sticky header
│   ├── MainContainer.jsx        # Main content area
│   ├── FooterContainer.jsx      # Footer
│   ├── NavBar.jsx               # Navigation bar (responsive)
│   ├── PageLayout.jsx           # Complete page layout
│   └── index.js                 # Export all layouts
```

## Usage Examples

### Hooks
```jsx
import { useBreakpoint, useForm, useDebounce } from './hooks';

function MyComponent() {
  const breakpoint = useBreakpoint();
  const { values, handleChange, handleSubmit } = useForm({
    initialValues: { name: '' },
    onSubmit: (values) => console.log(values)
  });
  
  return breakpoint.isMd ? <DesktopView /> : <MobileView />;
}
```

### Utilities
```jsx
import { cn, clamp, toTitleCase, ApiError } from './utils';

// Combine classes
const classes = cn('btn', isActive && 'active');

// Number clamping
const value = clamp(50, 0, 100); // 50

// String formatting
const title = toTitleCase('hello_world'); // 'Hello World'

// Custom errors
throw new ApiError('Request failed', { status: 404 });
```

### API Client
```jsx
import { api, createApiClient } from './api';

// Use global client
const data = await api.get('/endpoint');

// Or create custom client
const client = createApiClient({
  baseUrl: 'https://api.example.com',
  getAuthToken: () => localStorage.getItem('token')
});
```

### Components
```jsx
import {
  Button, Input, Modal, Card, CardBody, DataTable,
  PageLayout, NavBar, Container
} from './components';
import { useBreakpoint, useForm } from './hooks';

function App() {
  const [open, setOpen] = useState(false);
  const form = useForm({ initialValues: {} });

  return (
    <PageLayout
      nav={<NavBar brand="MyApp" />}
      children={
        <Card>
          <CardBody>
            <Button onClick={() => setOpen(true)}>Open Modal</Button>
            <Modal open={open} onClose={() => setOpen(false)}>
              Modal content
            </Modal>
          </CardBody>
        </Card>
      }
    />
  );
}
```

## Key Features

- **Modular**: Each component/hook/utility is in its own file
- **Tree-shakeable**: Only import what you need
- **TypeScript-ready**: Easy to add type definitions
- **Responsive**: Built-in breakpoint detection
- **Accessible**: ARIA attributes where appropriate
- **Customizable**: Inline styles and className support
- **Lightweight**: No external dependencies (uses React only)

## Import Patterns

### Individual imports
  ```jsx
  import { Button } from './components/OpenAiPrimitives/Button';
  import { useForm } from './hooks/OpenAiHooks/useForm';
  ```

### Grouped imports
```jsx
import * as Components from './components';
import * as Hooks from './hooks';
import * as Layouts from './layouts';
```

### Barrel imports
```jsx
import { Button, Input, Modal } from './components';
import { useBreakpoint, useForm } from './hooks';
```
