import React from "react";

import { MRT_ColumnDef, MaterialReactTable } from "material-react-table";
import { Box } from "@mui/material";

import booksTableConfig from "./BooksTableConfig";
import { Book } from "../../Types/bookTypes";
import booksStyles from "../../Styles/booksStyles";
import bookMock from "../../Pages/BooksList/booksMock.json";

export const BooksTable = () => {
  const columns = React.useMemo<MRT_ColumnDef<Book>[]>(
    () => booksTableConfig,
    []
  );

  // const table = useMaterialReactTable({
  //   columns,
  //   data,
  //   enableColumnActions: false,
  //   enableColumnFilters: false,
  //   enablePagination: false,
  //   enableSorting: false,
  // mrtTheme: (theme) => ({
  //   baseBackgroundColor: theme.palette.background.default,
  // }),
  // muiTableContainerProps: {
  //   sx: { left: 0, right: 0, bottom: 0, position: "absolute" },
  // },
  // muiTableBodyRowProps: { hover: false },
  // muiTableProps: {
  //   sx: {
  //     border: "1px solid rgba(81, 81, 81, .5)",
  //   },
  // },
  // muiTableHeadCellProps: {
  //   sx: {
  //     border: "1px solid rgba(81, 81, 81, .5)",
  //     fontStyle: "italic",
  //     fontWeight: "normal",
  //   },
  // },
  // muiTableBodyCellProps: {
  //   sx: {
  //     border: "1px solid rgba(81, 81, 81, .5)",
  //   },
  // },
  // });
  return (
    <Box sx={booksStyles.tableWrapper}>
      <MaterialReactTable
        enableColumnActions={false}
        enableColumnFilters={false}
        enableBottomToolbar={false}
        enableTopToolbar={false}
        enableFilters={false}
        enableSorting={false}
        enableStickyHeader
        enablePinning
        enablePagination
        
        muiTableContainerProps={{
          sx: booksStyles.tableContainer,
        }}
        muiTableProps={{
          sx: booksStyles.table,
        }}
        muiTableBodyRowProps={{
          hover: false
        }}
        muiTableBodyCellProps={{
          sx: {
            bgcolor: "#20252a",
            color: '#fff'
          },
        }}
        
        muiTablePaperProps={{
          sx: {
            bgcolor: "blue",
            m: 1,
            borderRadius: 50,
          },
        }}
        data={bookMock}
        columns={columns}
        initialState={{
          columnPinning: {
            left: ["image"],
          },
        }}
      />
    </Box>
  );
};
