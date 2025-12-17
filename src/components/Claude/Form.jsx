const Form = ({ children, onSubmit, className = '' }) => (
  <form onSubmit={onSubmit} className={`space-y-4 ${className}`}>
    {children}
  </form>
);

export default Form;
