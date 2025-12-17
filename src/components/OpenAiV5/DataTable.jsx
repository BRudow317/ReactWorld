import { useState, useEffect, useMemo } from "react";
import { baseStyles } from "../../styles/OpenAiV5/baseStyles";
import { toTitleCase } from "../../utils/OpenAiV5/toTitleCase";
import { clamp } from "../../utils/OpenAiV5/clamp";
import { useDebounce } from "../../hooks/OpenAiV5/useDebounce";
import { Card } from "./Card";
import { CardHeader } from "./CardHeader";
import { CardFooter } from "./CardFooter";
import { Input } from "./Input";
import { Select } from "./Select";
import { Button } from "./Button";
import { GlobalAnimations } from "../../styles/OpenAiV5/GlobalAnimations";

function defaultAccessor(row, key) {
  return key.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), row);
}

/**
 * columns: [{
 * key: string, header?: ReactNode, accessor?: (row)=>any,
 * render?: ({value,row})=>ReactNode, sortable?: boolean,
 * width?: number|string, align?: "left"|"right"|"center"
 * }]
 */
export function DataTable({
  columns,
  data,
  rowKey = "id",
  initialSort = null, // { key, dir: "asc"|"desc" }
  pageSizeOptions = [5, 10, 20, 50],
  defaultPageSize = 10,
  searchable = true,
  selectable = false,
  onSelectionChange,
  onRowClick,
  emptyText = "No data",
}) {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 200);

  const [sort, setSort] = useState(initialSort);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [page, setPage] = useState(1);

  // 1. FIX: Track the "previous" filters so we can detect changes
  const [prevFilters, setPrevFilters] = useState({ 
    q: debouncedQuery, 
    s: sort, 
    p: pageSize 
  });

  // 2. FIX: Check for changes during render (Before the paint)
  // This replaces the crashing useEffect.
  if (
    debouncedQuery !== prevFilters.q || 
    sort !== prevFilters.s || 
    pageSize !== prevFilters.p
  ) {
    setPage(1); // Reset page immediately
    setPrevFilters({ 
      q: debouncedQuery, 
      s: sort, 
      p: pageSize 
    });
  }

  const [selected, setSelected] = useState(() => new Set());

  useEffect(() => {
    onSelectionChange?.(Array.from(selected));
  }, [selected, onSelectionChange]);

  // 3. FIX: Removed the crashing useEffect entirely
  /* useEffect(() => {
    if (page > 1) {
      setPage(1);
    }
  }, [debouncedQuery, sort, pageSize]); 
  */

  const filtered = useMemo(() => {
    const q = debouncedQuery.trim().toLowerCase();
    if (!q) return data;

    return data.filter((row) => {
      for (const c of columns) {
        const accessor = c.accessor || ((r) => defaultAccessor(r, c.key));
        const v = accessor(row);
        const s = v == null ? "" : String(v).toLowerCase();
        if (s.includes(q)) return true;
      }
      return false;
    });
  }, [columns, data, debouncedQuery]);

  const sorted = useMemo(() => {
    if (!sort?.key) return filtered;
    const col = columns.find((c) => c.key === sort.key);
    if (!col) return filtered;
    const accessor = col.accessor || ((r) => defaultAccessor(r, col.key));
    const dir = sort.dir === "desc" ? -1 : 1;

    return [...filtered].sort((a, b) => {
      const va = accessor(a);
      const vb = accessor(b);
      // numbers first
      if (typeof va === "number" && typeof vb === "number") return (va - vb) * dir;
      return String(va ?? "").localeCompare(String(vb ?? "")) * dir;
    });
  }, [columns, filtered, sort]);

  const total = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const pageSafe = clamp(page, 1, totalPages);

  const paged = useMemo(() => {
    const start = (pageSafe - 1) * pageSize;
    return sorted.slice(start, start + pageSize);
  }, [pageSafe, pageSize, sorted]);

  const toggleSort = (key, sortable) => {
    if (!sortable) return;
    setSort((s) => {
      if (!s || s.key !== key) return { key, dir: "asc" };
      if (s.dir === "asc") return { key, dir: "desc" };
      return null;
    });
  };

  const allOnPageIds = useMemo(() => paged.map((r) => String(r?.[rowKey] ?? r?.id ?? r?.key ?? "")), [paged, rowKey]);

  const allOnPageSelected = allOnPageIds.length > 0 && allOnPageIds.every((id) => selected.has(id));

  const toggleAllOnPage = () => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (allOnPageSelected) allOnPageIds.forEach((id) => next.delete(id));
      else allOnPageIds.forEach((id) => next.add(id));
      return next;
    });
  };

  const toggleRow = (id) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <Card>
      <CardHeader
        title="Table"
        subtitle={`${total} row${total === 1 ? "" : "s"}`}
        right={
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {searchable ? (
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search…"
                style={{ width: 220 }}
              />
            ) : null}
            <Select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              options={pageSizeOptions.map((n) => ({ value: n, label: `${n}/page` }))}
              style={{ width: 120 }}
            />
          </div>
        }
      />

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0, fontFamily: baseStyles.fontFamily }}>
          <thead>
            <tr>
              {selectable ? (
                <th style={{ padding: 12, borderBottom: "1px solid rgba(0,0,0,.06)", textAlign: "left", width: 44 }}>
                  <input type="checkbox" checked={allOnPageSelected} onChange={toggleAllOnPage} />
                </th>
              ) : null}

              {columns.map((c) => {
                const sortable = c.sortable !== false;
                const active = sort?.key === c.key;
                const indicator = active ? (sort?.dir === "asc" ? " ▲" : " ▼") : "";
                return (
                  <th
                    key={c.key}
                    onClick={() => toggleSort(c.key, sortable)}
                    style={{
                      padding: 12,
                      borderBottom: "1px solid rgba(0,0,0,.06)",
                      textAlign: c.align || "left",
                      cursor: sortable ? "pointer" : "default",
                      userSelect: "none",
                      whiteSpace: "nowrap",
                      width: c.width,
                      color: baseStyles.muted,
                      fontSize: 13,
                    }}
                  >
                    {c.header ?? toTitleCase(c.key)}
                    <span style={{ color: "rgba(0,0,0,.35)" }}>{indicator}</span>
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {paged.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (selectable ? 1 : 0)}
                  style={{ padding: 18, color: baseStyles.muted }}
                >
                  {emptyText}
                </td>
              </tr>
            ) : (
              paged.map((row, idx) => {
                const id = String(row?.[rowKey] ?? row?.id ?? row?.key ?? idx);
                const isSelected = selected.has(id);

                return (
                  <tr
                    key={id}
                    onClick={() => onRowClick?.(row)}
                    style={{
                      background: isSelected ? "rgba(59,130,246,.06)" : "transparent",
                      cursor: onRowClick ? "pointer" : "default",
                    }}
                  >
                    {selectable ? (
                      <td style={{ padding: 12, borderBottom: "1px solid rgba(0,0,0,.06)" }}>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => toggleRow(id)}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </td>
                    ) : null}

                    {columns.map((c) => {
                      const accessor = c.accessor || ((r) => defaultAccessor(r, c.key));
                      const value = accessor(row);
                      return (
                        <td
                          key={c.key}
                          style={{
                            padding: 12,
                            borderBottom: "1px solid rgba(0,0,0,.06)",
                            textAlign: c.align || "left",
                            fontSize: 14,
                            color: baseStyles.fg,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {c.render ? c.render({ value, row }) : value == null ? "" : String(value)}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <CardFooter>
        <div style={{ color: baseStyles.muted, fontSize: 13 }}>
          Page {pageSafe} of {totalPages}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Button variant="secondary" size="sm" onClick={() => setPage(1)} disabled={pageSafe === 1}>
            First
          </Button>
          <Button variant="secondary" size="sm" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={pageSafe === 1}>
            Prev
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={pageSafe === totalPages}
          >
            Next
          </Button>
          <Button variant="secondary" size="sm" onClick={() => setPage(totalPages)} disabled={pageSafe === totalPages}>
            Last
          </Button>
        </div>
      </CardFooter>

      <GlobalAnimations />
    </Card>
  );
}