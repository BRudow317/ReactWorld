import React, { useMemo, useState, useContext } from 'react';
import ThemeContext from '../../themes/Gemini/GeminiThemeContext';

// Interactive Data Table (Sortable)
export const DataTable = ({ columns, data }) => {
  const { colors, spacing } = useContext(ThemeContext);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // Sorting Logic
  const sortedData = useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: colors.surface }}>
        <thead>
          <tr style={{ borderBottom: `2px solid ${colors.border}`, backgroundColor: colors.background }}>
            {columns.map((col) => (
              <th 
                key={col.key}
                onClick={() => requestSort(col.key)}
                style={{ 
                  padding: spacing(2), 
                  textAlign: 'left', 
                  cursor: 'pointer',
                  userSelect: 'none'
                }}
              >
                {col.label} {sortConfig.key === col.key ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr key={index} style={{ borderBottom: `1px solid ${colors.border}` }}>
              {columns.map((col) => (
                <td key={`${index}-${col.key}`} style={{ padding: spacing(2) }}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
