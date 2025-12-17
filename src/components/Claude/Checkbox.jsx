const Checkbox = ({ label, className = '', ...props }) => (
  <label className="flex items-center gap-2 cursor-pointer">
    <input
      type="checkbox"
      className={`w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
    {label && <span className="text-sm text-gray-700">{label}</span>}
  </label>
);

export default Checkbox;
