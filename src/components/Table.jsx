import { createContext, useContext } from "react";

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="border border-gray-200 rounded-lg overflow-hidden text-sm max-w-[500px] sm:max-w-none">
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <header
      role="row"
      className="grid gap-6 items-center bg-gray-100 border-b border-gray-200 uppercase font-bold text-gray-600 px-6 py-4"
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </header>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      role="row"
      className="grid gap-6 items-center px-6 py-3 border-b border-gray-200 last:border-b-0 text-gray-600 font-medium"
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

function Body({ data, render }) {
  if (data.length === 0)
    return <p className="text-center py-6">No Data To Show At The Moment</p>;
  return <section>{data.map(render)}</section>;
}

function Footer({ children }) {
  return (
    <footer
      className="bg-gray-100 flex justify-center p-4"
      style={{ display: children ? "flex" : "none" }}
    >
      {children}
    </footer>
  );
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
