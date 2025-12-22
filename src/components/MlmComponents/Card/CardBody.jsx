import React from "react";

export function CardBody({ children, className, style }) {
  return (
    <div className={className} style={{ 
      // padding: 16, 
      ...style 

    }}>
      {children}
    </div>
  );
}
