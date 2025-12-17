import React, { useMemo, useState } from "react";

export default function DataTable({
  columns = [],
  data = [],
  searchable,
  selectable,
  defaultPageSize = 5,
  onRowClick,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState([]);

  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    return data.filter((row) =>
      Object.values(row)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm]);

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortConfig]);

  const totalPages = Math.max(1, Math.ceil(sortedData.length / pageSize));
  const paginatedData = sortedData.slice((page - 1) * pageSize, page * pageSize);

  const toggleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "asc" };
    });
  };

  const toggleSelectRow = (row) => {
    setSelected((prev) =>
      prev.includes(row.id) ? prev.filter((id) => id !== row.id) : [...prev, row.id]
    );
  };

  return (
    <div style={{ background: "#fff", padding: 16, borderRadius: 12, boxShadow: "0 10px 30px rgba(15,23,42,0.08)" }}>
      {searchable && (
        <input
          placeholder="Search..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          style={{
            width: "100%",
            marginBottom: 12,
            padding: "0.5rem",
            borderRadius: 8,
            border: "1px solid #cbd5f5",
          }}
        />
      )}

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {selectable && <th style={{ textAlign: "left" }}>#</th>}
            {columns.map((column) => (
              <th
                key={column.key}
                onClick={() => column.sortable && toggleSort(column.key)}
                style={{
                  padding: "0.75rem 0.5rem",
                  textAlign: "left",
                  cursor: column.sortable ? "pointer" : "default",
                }}
              >
                {column.header}
                {sortConfig.key === column.key && (sortConfig.direction === "asc" ? " ▲" : " ▼")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row) => (
            <tr
              key={row.id}
              style={{
                borderBottom: "1px solid #e2e8f0",
                cursor: onRowClick ? "pointer" : "default",
              }}
              onClick={() => onRowClick?.(row)}
            >
              {selectable && (
                <td style={{ padding: "0.5rem 0.25rem" }}>
                  <input
                    type="checkbox"
                    checked={selected.includes(row.id)}
                    onChange={(event) => {
                      event.stopPropagation();
                      toggleSelectRow(row);
                    }}
                  />
                </td>
              )}
              {columns.map((column) => (
                <td key={`${row.id}-${column.key}`} style={{ padding: "0.5rem 0.25rem" }}>
                  {column.render ? column.render({ value: row[column.key], row }) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          Page {page} of {totalPages}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            disabled={page === 1}
            style={{ borderRadius: 6, border: "1px solid #cbd5f5", padding: "0.25rem 0.75rem", cursor: "pointer" }}
          >
            Prev
          </button>
          <button
            onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={page === totalPages}
            style={{ borderRadius: 6, border: "1px solid #cbd5f5", padding: "0.25rem 0.75rem", cursor: "pointer" }}
          >
            Next
          </button>
          <select
            value={pageSize}
            onChange={(event) => {
              setPageSize(Number(event.target.value));
              setPage(1);
            }}
            style={{ borderRadius: 6, border: "1px solid #cbd5f5", padding: "0.3rem" }}
          >
            {[5, 10, 20].map((option) => (
              <option key={option} value={option}>
                {option} / page
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
