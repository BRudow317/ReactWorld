import Toast from './Toast';

const ToastContainer = ({ toasts = [], removeToast }) => (
  <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
    {toasts.map((toast) => (
      <Toast key={toast.id} {...toast} onClose={() => removeToast(toast.id)} />
    ))}
  </div>
);

export default ToastContainer;
