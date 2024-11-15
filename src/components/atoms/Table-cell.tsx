interface TableCellProps {
    content: React.ReactNode;
  }
  
  export const TableCell = ({ content }: TableCellProps) => (
    <td className="px-4 py-2 text-sm text-gray-800">{content}</td>
  );
  