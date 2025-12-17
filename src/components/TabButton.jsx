import { useState } from 'react';
// import TabButton from './TabButton.js';
// import Home from './Home.js';
// import Contact from './Contact.js';

export default function TabButtonExampleUsage() {
  const [activeTab, setActiveTab] = useState('contact');

  return (
    <>
      <TabButton
        isActive={activeTab === 'home'}
        onClick={() => setActiveTab('home')}
      >
        Home
      </TabButton>
      <TabButton
        isActive={activeTab === 'contact'}
        onClick={() => setActiveTab('contact')}
      >
        Contact
      </TabButton>

      <hr />

      {activeTab === 'home' && <Home />}
      {activeTab === 'contact' && <Contact />}
    </>
  );
}

export default function TabButton({ onClick, children, isActive }) {
  if (isActive) {
    return <b>{children}</b>
  }

  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}
// Example of a home tab that hides when switching tabs
export default function Home() {
  return (
    <p>Welcome to my profile!</p>
  );
}

// Example of a contact tab that hides when switching tabs
export default function Contact() {
  return (
    <div>
      <p>Send me a message!</p>

      <textarea />

      <p>You can find me online here:</p>
      <ul>
        <li>admin@mysite.com</li>
        <li>+123456789</li>
      </ul>
    </div>
  );
}