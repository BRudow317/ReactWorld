const FlexGrid = ({
  children,
  cols = { xs: 1, sm: 2, md: 3, lg: 4 },
  gap = 6,
  className = ''
}) => {
  const colsClass = `grid-cols-${cols.xs} sm:grid-cols-${cols.sm} md:grid-cols-${cols.md} lg:grid-cols-${cols.lg}`;
  const gapClass = `gap-${gap}`;

  return (
    <div className={`grid ${colsClass} ${gapClass} ${className}`}>
      {children}
    </div>
  );
};

export default FlexGrid;
