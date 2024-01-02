import React from "react";

import { MRT_ColumnDef, MaterialReactTable } from "material-react-table";
import { Box, Typography } from "@mui/material";

import booksTableConfig from "./BooksTableConfig";
import { Book } from "../../Types/bookTypes";
import booksStyles from "../../Styles/booksStyles";
import bookMock from "../../Pages/BooksList/booksMock.json";
import styles from "../../Global/styles";

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
        renderEmptyRowsFallback={() => (
          <Typography sx={{ textAlign: "center", py: 2 }}>
            No books to show
          </Typography>
        )}
        muiTableHeadCellProps={{
          align: "center",
          sx: {
            fontWeight: "bold",
            borderBottom: `5px solid ${styles.containerBackground}`,
          },
        }}
        muiTableBodyRowProps={{
          hover: false,
        }}
        muiTableBodyCellProps={{
          align: "center",
          sx: {
            bgcolor: "#20252a",
            color: "#fff",
            border: `5px solid ${styles.containerBackground}`,
            borderRight: 0,
            borderLeft: 0,
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
