import React from "react";

import { Box, Button, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import BackupRoundedIcon from "@mui/icons-material/BackupRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import ReorderRoundedIcon from "@mui/icons-material/ReorderRounded";

import booksStyles from "../../Styles/booksStyles";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { appLoading } from "../../Redux/Reducers.ts/appSlice";
import { loadBooksData } from "../../Redux/Reducers.ts/BookSlice";
import { GetBooks } from "../../Api/APIHandlers/bookAPI";
import { TableTemplate } from "../../TablesConfig/TableTemplate";
import { MRT_ColumnDef } from "material-react-table";
import { Book } from "../../Types/bookTypes";
import booksTableConfig from "../../TablesConfig/BooksTableConfig";

export const BookList = () => {
  const dispatch = useAppDispatch();

  const { data } = useAppSelector((store) => store.books);
  const columns = React.useMemo<MRT_ColumnDef<Book>[]>(
    () => booksTableConfig,
    []
  );
  const actions = React.useMemo(
    () => [
      {
        label: "Filter",
        Icon: FilterAltRoundedIcon,
      },
      {
        label: "Your list",
        Icon: ReorderRoundedIcon,
      },
      {
        label: "Add Book",
        Icon: AddRoundedIcon,
      },
      {
        label: "Import books",
        Icon: BackupRoundedIcon,
      },
    ],
    []
  );

  React.useEffect(() => {
    if (data.length < 1) {
      GetBooks({
        dispatch: (data) => dispatch(loadBooksData(data)),
        loading: (loadVal) => dispatch(appLoading({ loadVal, label: "books" })),
      });
    }
  }, [dispatch, data]);

  return (
    <Box sx={booksStyles.container}>
      <Box sx={booksStyles.localHeaderWrapper}>
        <Box sx={booksStyles.titleWrapper}>
          <Typography sx={booksStyles.pageTitle}>Books List</Typography>
          <Typography sx={booksStyles.pageCaption}>
            Browse through the bookery to find your favourite book now!
          </Typography>
        </Box>
        <Box sx={booksStyles.actionsWrapper}>
          {actions.map((action, index) => (
            <Button
              sx={{ ...booksStyles.button }}
              startIcon={<action.Icon />}
              key={`book-action-${index}`}
            >
              {action.label}
            </Button>
          ))}
        </Box>
      </Box>
      <Box sx={booksStyles.tableWrapper}>
        <TableTemplate
          columns={columns}
          data={data}
          label={"books"}
          pinningCols={["image"]}
        />
      </Box>
    </Box>
  );
};

export default BookList;
