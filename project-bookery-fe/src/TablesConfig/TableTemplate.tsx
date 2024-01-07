import { MRT_RowData, MaterialReactTable } from "material-react-table";
import { Typography } from "@mui/material";

import { tableProps } from "../Types/tableTypes";
import styles from "../Global/styles";
import booksStyles from "../Styles/booksStyles";

export const TableTemplate = <TData extends MRT_RowData>(
  props: tableProps<TData>
) => {
  const { data, columns, pinningCols, label } = props;
  return (
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
      editDisplayMode="table"
      muiTableContainerProps={{
        sx: booksStyles.tableContainer,
      }}
      renderEmptyRowsFallback={() => (
        <Typography sx={{ textAlign: "center", py: 2 }}>
          No {label} to show
        </Typography>
      )}
      // renderDetailPanel={() => {
      //   return (
      //     <Box
      //       sx={{
      //         display: "flex",
      //         height: 300,
      //         alignItems: "center",
      //         justifyContent: "center",
      //       }}
      //     >
      //       <CircularProgress />
      //     </Box>
      //   );
      // }}
      muiTableHeadCellProps={{
        align: "center",
        sx: {
          fontWeight: "bold",
          bgcolor: "primary.dark",
          color: "#fff",
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
          m: 0,
          p: 0,
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
          left: pinningCols,
        },
      }}
    />
  );
};
