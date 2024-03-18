import React from "react";
import { useTable, useSortBy, usePagination, useFilters } from "react-table";
import ReactPaginate from "react-paginate";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state: { pageIndex, pageSize, filters},
    gotoPage,
  } = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 10 } },
    useFilters,
    useSortBy,
    usePagination
  );

  const pageCount = Math.ceil(data.length / pageSize);
  // const { filters } = state;

  console.log(filters);

  return (
    <div className="overflow-x-auto">
      <table
        {...getTableProps()}
        className="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden"
      >
        <thead className="bg-gray-100 border-b">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider cursor-pointer"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? " " : " ") : ""}
                  </span>
                </th>
              ))}
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider cursor-pointer"></th>
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            // console.log(row);
            return (
              <tr {...row.getRowProps()} className="border-b hover:bg-blue-50">
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-6 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
                <td className="px-6 py-2 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  <Link to={`/students/view/${row.id}`}>
                    <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <span className="text-sm leading-5 text-blue-700 text-[1rem] font-bold">
            Showing {pageIndex * pageSize + 1}-
            {Math.min((pageIndex + 1) * pageSize, data.length)} of {data.length}
          </span>
        </div>

        <div className="flex items-center">
          <ReactPaginate
            previousLabel={<Icon icon="icon-park-solid:left-c" />}
            nextLabel={<Icon icon="icon-park-solid:right-c" />}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            renderOnZeroPageCount={null}
            pageClassName={
              "py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-700 active:border-blue-500 focus:border-blue-500 hover:animate-pulse hover:border-blue-300 transition ease-in-out duration-150 hover:bg-tertiary"
            }
            pageLinkClassName={
              "py-2 px-4 border border-gray-300 bg-white text-sm leading-5 font-medium text-blue-700 active:border-blue-500 focus:border-blue-500 hover:animate-pulse transition ease-in-out duration-150 hover:bg-tertiary"
            }
            previousClassName={
              "py-1 px-2 border border-gray-300 bg-white text-[1.5rem] leading-5 font-medium text-blue-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 hover:bg-tertiary"
            }
            nextClassName={
              "py-1 px-2 border border-gray-300 bg-white text-[1.5rem] leading-5 font-medium text-blue-700 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 hover:bg-tertiary"
            }
            onPageChange={({ selected }) => gotoPage(selected)}
            containerClassName={"pagination flex space-x-2 px-5"}
            activeClassName={"border-blue-500 bg-tertiary"}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
