import React, { useMemo } from "react";
import { useTable, PluginHook, useBlockLayout } from "react-table";
import { useSticky } from "react-table-sticky";
import styles from "./table.module.scss";

export interface Props {
  columns: any;
  data: any;
  noDataComponent?: any;
  clickAction?: (row: any) => void;
  customColumnWidth?: string | number;
  customYAxisPadding?: string | number;
  rest?: { [x: string]: any };
  selected?: { param: string; val: string };
  className?: string;
  sticky?: boolean;
}

const Table = ({
  columns,
  data,
  noDataComponent,
  clickAction,
  customColumnWidth,
  customYAxisPadding,
  selected,
  className = "",
  sticky,
  ...rest
}: Props) => {
  const tableColumns = useMemo(() => columns, [columns]);
  let plugins: PluginHook<object>[] = [];
  if (sticky) {
    plugins = [...plugins, useBlockLayout, useSticky];
  }
  const { getTableBodyProps, getTableProps, headerGroups, prepareRow, rows } =
    useTable(
      {
        columns: tableColumns,
        data,
      },
      ...plugins
    );

  if (!rows.length) {
    if (noDataComponent) return noDataComponent;
    return <span className={styles.emptyText}>No data</span>;
  }

  return (
    <table
      {...getTableProps()}
      {...rest}
      className={[className, styles.table, sticky ? styles.sticky : ""].join(
        " "
      )}
    >
      <thead className={styles.tableHeaderStyle}>
        {headerGroups.map((headerGroup, index) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={`${index}`}>
            {headerGroup.headers.map((column, index) => (
              <th
                className={styles.tableHeader}
                {...column.getHeaderProps()}
                key={`${index}`}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className={styles.tableRow} {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr
              className={
                selected &&
                row.original[selected.param as keyof typeof row.original] ===
                  selected.val
                  ? styles.selected
                  : ""
              }
              onClick={() => clickAction && clickAction(row)}
              {...row.getRowProps()}
              key={`${index}`}
            >
              {row.cells.map((cell, index) => {
                const {} = cell.column;
                return (
                  <td
                    className={[
                      styles.tableValue,
                      customColumnWidth || null,
                      customYAxisPadding || null,
                    ].join(" ")}
                    {...cell.getCellProps()}
                    key={`${index}`}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
