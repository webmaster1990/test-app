import React from 'react';

const ListView = ({ cols, rows }) => {
  const renderColumn = () => {
    return (
      <tr>
        {(() => {
          if (cols && cols.length > 0) {
            return cols.map((col, i) => {
              return (
                <th key={i + 1} className="text-center">
                  {col.text}
                </th>
              );
            });
          }
        })()}
      </tr>
    );
  };

  const renderRows = () => {
    return (() => {
      if (rows && cols && rows.length > 0 && cols.length > 0) {
        return rows.map((row, i) => {
          return (
            <tr key={i}>
              {cols.map((col, index) => {
                return (
                  <td key={index} className="text-center">
                    {row[col.key]}
                  </td>
                );
              })}
            </tr>
          );
        });
      }
      return (
        <tr>
          <td className="text-center">No Records Found!!</td>
        </tr>
      );
    })();
  };

  return (
    <div>
      <table className="table">
        <thead>
        {renderColumn()}
        </thead>
        <tbody>
        {renderRows()}
        </tbody>
      </table>
    </div>
  );
};

export default ListView;
