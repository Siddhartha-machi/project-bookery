import createStyles from "../Helpers/createStyles";

const booksStyles = createStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    borderRadius: "inherit",
  },
  tableWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    position: "relative",
    borderRadius: "12px",
  },
  tableContainer: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    borderRadius: "12px",
    color: "#fff",
    backgroundColor: "transparent",
  },
  table: {
    borderCollapse: "separate",
    borderSpacing: "0px 8px",
    borderRadius: 12,
    "& .MuiTableRow-root th:first-child": {
      borderTopLeftRadius: "12px",
      borderBottomLeftRadius: "12px",
    },
    "& .MuiTableRow-root th:last-child": {
      borderTopRightRadius: "12px",
      borderBottomRightRadius: "12px",
    },
    "& .MuiTableRow-root td:first-child": {
      borderTopLeftRadius: "12px",
      borderBottomLeftRadius: "12px",
    },
    "& .MuiTableRow-root td:last-child": {
      borderTopRightRadius: "12px",
      borderBottomRightRadius: "12px",
    },
  },
});

export default booksStyles;
