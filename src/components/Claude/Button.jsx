const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    success: 'bg-green-600 hover:bg-green-700 text-white'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        ${variants[variant]} ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        rounded-lg font-medium transition-all duration-200
        disabled:pointer-events-none flex items-center justify-center gap-2
        ${className}
      `}
      {...props}
    >
      {loading && <span className="animate-spin">?</span>}
      {children}
    </button>
  );
};

export default Button;
