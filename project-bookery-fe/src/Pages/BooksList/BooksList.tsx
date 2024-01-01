import { Box } from "@mui/material";
import booksStyles from "../../Styles/booksStyles";
import { BooksTable } from "../../Tables/BooksTable/BooksTable";

export const Example = () => {
  return (
    <Box sx={booksStyles.container}>
      <BooksTable />
    </Box>
  );
};

export default Example;
