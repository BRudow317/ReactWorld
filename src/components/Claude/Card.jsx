const Card = ({ children, title, footer, hoverable = false, className = '' }) => (
  <div
    className={`
      bg-white rounded-lg shadow-md overflow-hidden
      ${hoverable ? 'hover:shadow-lg transition-shadow duration-300' : ''}
      ${className}
    `}
  >
    {title && (
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
    )}
    <div className="p-6">{children}</div>
    {footer && (
      <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
        {footer}
      </div>
    )}
  </div>
);

export default Card;
