import React from "react";

import { Box } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import BackupRoundedIcon from "@mui/icons-material/BackupRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import ReorderRoundedIcon from "@mui/icons-material/ReorderRounded";
import { MRT_ColumnDef } from "material-react-table";

import booksStyles from "../../Styles/booksStyles";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { appLoading } from "../../Redux/Reducers.ts/appSlice";
import { loadBooksData } from "../../Redux/Reducers.ts/BookSlice";
import { GetBooks } from "../../Api/APIHandlers/bookAPI";
import { TableTemplate } from "../../TablesConfig/TableTemplate";
import { Book } from "../../Types/bookTypes";
import booksTableConfig from "../../TablesConfig/BooksTableConfig";
import LocalHeader from "../../Layout/LocalHeader";

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
      <LocalHeader
        pageTitle={"Archive"}
        pageCaption={
          "Browse through the bookery to find your favourite book now!"
        }
        actions={actions}
      />
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
