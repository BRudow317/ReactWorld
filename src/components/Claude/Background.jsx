const Background = ({ variant = 'solid', color = 'bg-gray-50', children, className = '' }) => {
  const variants = {
    solid: color,
    gradient: 'bg-gradient-to-br from-blue-50 to-purple-50',
    dots: `${color} bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px]`
  };

  return (
    <div className={`min-h-screen ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Background;
