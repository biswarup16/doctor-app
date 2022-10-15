function Thead({ columns }) {
  return (
    <thead className="bg-gray-50">
      <tr>
        {columns.map((column, index) => (
          <th
            key={index}
            scope="col"
            className="py-3.5 px-3 text-left text-sm text-gray-900 first-letter:uppercase first:pl-4 first:sm:pl-6"
          >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export function Td({ children }) {
  return (
    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      {children}
    </td>
  );
}

export function TdBold({ children }) {
  return (
    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
      {children}
    </td>
  );
}

export function Table({ columns, children }) {
  return (
    <div className="flex w-full flex-col">
      <div className="-mx-4 -my-2 w-full overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <Thead columns={columns} />
              <tbody className="divide-y divide-gray-100 bg-white">
                {children}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
