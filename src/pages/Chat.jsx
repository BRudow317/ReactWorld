import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Sparkles } from 'lucide-react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages([...messages, 
      { role: 'user', content: input },
      { role: 'assistant', content: 'This is a demo interface. In a real app, this would connect to an API to generate responses.' }
    ]);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div style={styles.container}>
      <Header />
      <MessageList messages={messages} messagesEndRef={messagesEndRef} />
      <InputArea 
        input={input}
        setInput={setInput}
        handleSend={handleSend}
        handleKeyPress={handleKeyPress}
      />
    </div>
  );
};

const Header = () => {
  const styles = {
    header: {
      padding: '1rem 1.5rem',
      borderBottom: '1px solid #e5e7eb',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      backgroundColor: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 10
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '1.125rem',
      fontWeight: 600,
      color: '#1f2937'
    }
  };

  return (
    <div style={styles.header}>
      <div style={styles.logo}>
        <Sparkles size={24} color="#8b5cf6" />
        <span>Claude</span>
      </div>
    </div>
  );
};

const MessageList = ({ messages, messagesEndRef }) => {
  const styles = {
    messageList: {
      flex: 1,
      overflowY: 'auto',
      padding: '2rem 1rem',
      backgroundColor: '#f9fafb'
    }
  };

  return (
    <div style={styles.messageList}>
      {messages.map((msg, idx) => (
        <Message key={idx} message={msg} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

const Message = ({ message }) => {
  const isUser = message.role === 'user';
  
  const styles = {
    messageWrapper: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '1.5rem'
    },
    message: {
      maxWidth: '48rem',
      width: '100%',
      display: 'flex',
      gap: '1rem',
      padding: '0 1rem'
    },
    avatar: {
      width: '2rem',
      height: '2rem',
      borderRadius: '0.375rem',
      backgroundColor: isUser ? '#3b82f6' : '#8b5cf6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    },
    content: {
      flex: 1,
      paddingTop: '0.25rem'
    },
    role: {
      fontSize: '0.875rem',
      fontWeight: 600,
      marginBottom: '0.5rem',
      color: '#374151'
    },
    text: {
      lineHeight: 1.6,
      color: '#1f2937',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word'
    }
  };

  return (
    <div style={styles.messageWrapper}>
      <div style={styles.message}>
        <div style={styles.avatar}>
          {isUser ? <User size={18} color="white" /> : <Sparkles size={18} color="white" />}
        </div>
        <div style={styles.content}>
          <div style={styles.role}>{isUser ? 'You' : 'Claude'}</div>
          <div style={styles.text}>{message.content}</div>
        </div>
      </div>
    </div>
  );
};

const InputArea = ({ input, setInput, handleSend, handleKeyPress }) => {
  const styles = {
    inputArea: {
      padding: '1rem',
      borderTop: '1px solid #e5e7eb',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center'
    },
    inputWrapper: {
      maxWidth: '48rem',
      width: '100%',
      display: 'flex',
      gap: '0.75rem',
      alignItems: 'flex-end'
    },
    textarea: {
      flex: 1,
      minHeight: '3rem',
      maxHeight: '12rem',
      padding: '0.75rem',
      border: '1px solid #d1d5db',
      borderRadius: '0.5rem',
      fontSize: '0.9375rem',
      resize: 'none',
      fontFamily: 'inherit',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    button: {
      padding: '0.75rem',
      backgroundColor: '#8b5cf6',
      color: 'white',
      border: 'none',
      borderRadius: '0.5rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background-color 0.2s',
      flexShrink: 0
    },
    buttonDisabled: {
      opacity: 0.5,
      cursor: 'not-allowed'
    }
  };

  return (
    <div style={styles.inputArea}>
      <div style={styles.inputWrapper}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Message Claude..."
          style={styles.textarea}
          onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
          onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          style={{
            ...styles.button,
            ...((!input.trim()) && styles.buttonDisabled)
          }}
          onMouseEnter={(e) => {
            if (input.trim()) e.target.style.backgroundColor = '#7c3aed';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#8b5cf6';
          }}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    backgroundColor: '#f9fafb'
  }
};

export default ChatInterface;