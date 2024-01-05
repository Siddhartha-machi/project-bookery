import React from "react";

import { MRT_ColumnDef, MaterialReactTable } from "material-react-table";
import { Box, Typography } from "@mui/material";

import booksTableConfig from "./BooksTableConfig";
import { Book } from "../../Types/bookTypes";
import booksStyles from "../../Styles/booksStyles";
import styles from "../../Global/styles";
import { useAppSelector } from "../../Redux/hooks";

export const BooksTable = () => {
  const { data } = useAppSelector((store) => store.books);
  const columns = React.useMemo<MRT_ColumnDef<Book>[]>(
    () => booksTableConfig,
    []
  );


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
        data={data}
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
