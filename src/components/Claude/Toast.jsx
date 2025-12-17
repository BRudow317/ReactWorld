import { useEffect } from 'react';

const Toast = ({ message, type = 'info', onClose }) => {
  const types = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500'
  };

  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`${types[type]} text-white px-6 py-4 rounded-lg shadow-lg flex items-center justify-between gap-4 min-w-[300px]`}
    >
      <span>{message}</span>
      <button onClick={onClose} className="text-white font-bold">
        ×
      </button>
    </div>
  );
};

export default Toast;
