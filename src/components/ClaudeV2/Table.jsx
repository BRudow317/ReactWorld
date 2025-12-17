import React from "react";

export default function Table({ columns = [], data = [], onRowClick }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#fff",
          borderRadius: 8,
        }}
      >
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                style={{
                  padding: "0.75rem 1rem",
                  textAlign: "left",
                  fontWeight: 600,
                  borderBottom: "1px solid #e2e8f0",
                }}
              >
                {column.label || column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id || row.key}
              onClick={() => onRowClick?.(row)}
              style={{
                cursor: onRowClick ? "pointer" : "default",
                borderBottom: "1px solid #f1f5f9",
              }}
            >
              {columns.map((column) => {
                const value = row[column.key];
                return (
                  <td
                    key={`${row.id}-${column.key}`}
                    style={{
                      padding: "0.75rem 1rem",
                      borderBottom: "1px solid #edf2f7",
                    }}
                  >
                    {typeof column.render === "function"
                      ? column.render({ value, row })
                      : value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
