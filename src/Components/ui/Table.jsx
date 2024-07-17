// components/ui/table.js

export const Table = ({ children }) => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          {children}
        </table>
      </div>
    );
  };
  
  export const TableHeader = ({ children }) => {
    return (
      <thead className="bg-gray-100">
        {children}
      </thead>
    );
  };
  
  export const TableRow = ({ children }) => {
    return (
      <tr>
        {children}
      </tr>
    );
  };
  
  export const TableHead = ({ children }) => {
    return (
      <th className="py-2 px-4 border-b border-gray-200">{children}</th>
    );
  };
  
  export const TableBody = ({ children }) => {
    return (
      <tbody className="divide-y divide-gray-200">
        {children}
      </tbody>
    );
  };
  
  export const TableCell = ({ children }) => {
    return (
      <td className="py-2 px-4 whitespace-nowrap">{children}</td>
    );
  };
  