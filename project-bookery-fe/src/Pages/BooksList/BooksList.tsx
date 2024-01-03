import React from "react";

import { Box, Button, Typography } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import BackupRoundedIcon from "@mui/icons-material/BackupRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import ReorderRoundedIcon from "@mui/icons-material/ReorderRounded";

import booksStyles from "../../Styles/booksStyles";
import { BooksTable } from "../../Tables/BooksTable/BooksTable";
import { useAppDispatch } from "../../Redux/hooks";
import { appLoading } from "../../Redux/Reducers.ts/appSlice";
import { loadBooksData } from "../../Redux/Reducers.ts/BookSlice";
import { GetBooks } from "../../Api/APIHandlers/bookAPI";

export const BookList = () => {
  const dispatch = useAppDispatch();

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
        label: "Import",
        Icon: BackupRoundedIcon,
      },
    ],
    []
  );

  React.useEffect(() => {
    GetBooks({
      dispatch: (data) => dispatch(loadBooksData(data)),
      loading: (loadVal) => dispatch(appLoading(loadVal)),
    });
  }, [dispatch]);

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
      <BooksTable />
    </Box>
  );
};

export default BookList;
