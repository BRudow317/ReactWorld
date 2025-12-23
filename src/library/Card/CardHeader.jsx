import React from "react";
import { baseStyles } from "../baseStyles";

export function CardHeader({ title, subtitle, right, className, style }) {
  return (
    <div
      className={className}
      style={{
        // padding: 16,
        // borderBottom: "1px solid rgba(0,0,0,.06)",
        // display: "flex",
        // alignItems: "start",
        // justifyContent: "space-between",
        // gap: 12,
        ...style,
      }}
    >
      <div>
        <div style={{ fontFamily: baseStyles.fontFamily, fontWeight: 800, fontSize: 16, color: baseStyles.fg }}>
          {title}
        </div>
        {subtitle ? (
          <div style={{ fontFamily: baseStyles.fontFamily, fontSize: 13, color: baseStyles.muted, marginTop: 4 }}>
            {subtitle}
          </div>
        ) : null}
      </div>
      {right}
    </div>
  );
}
