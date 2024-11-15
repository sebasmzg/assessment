interface TableHeaderProps {
  headers: string[];
}

export const TableHeader = ({ headers }: TableHeaderProps) => (
  <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600">
    {headers}
  </th>
);
