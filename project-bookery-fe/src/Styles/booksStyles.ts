import GLOBAL_CONSTANTS from "../Global/Constants";
import styles from "../Global/styles";
import createStyles from "../Helpers/createStyles";
import { createStylesFuncProps } from "../Types/helperTypes";

const booksStyles = createStyles({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },

  localHeaderWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    py: 0.1,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "column",
    ml: 1,
  },
  pageTitle: {
    fontSize: "18px",
    fontWeight: 900,
    letterSpacing: 1,
    color: styles.white9,
  },
  pageCaption: {
    fontSize: "12px",
    letterSpacing: 1,
    color: styles.white2,
  },
  actionsWrapper: {
    display: "flex",
    gap: "12px",
  },
  button: {
    textTransform: "none",
    border: styles.borderLight,
    borderRadius: GLOBAL_CONSTANTS.radius,
    px: 2,
    fontWeight: 600,
    color: styles.white8,
  },
  // Table styles
  tableWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    position: "relative",
    mt: 0.8,
  },
  tableContainer: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    color: "#fff",
  },
  // Book image styles
  cellWrapper: {
    height: "120px",
    display: "flex",
    m: -1,
    alignItems: "center",
    justifyContent: "center",
  },
  bookImage: {
    maxWidth: "120px",
    borderRadius: GLOBAL_CONSTANTS.radius,
  },
  bookTitle: {
    fontWeight: 700,
    letterSpacing: 1,
    fontSize: "16px",
    maxWidth: "120px",
  },
  bookAuthorsWrapper: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "120px",
    gap: 1.2,
    overflow: "scroll",
  },
  bookAuthorChip: {
    width: "120px",
    color: styles.white10,
    borderRadius: GLOBAL_CONSTANTS.radius,
  },
  bookDescription: ({ check }: createStylesFuncProps) => ({
    color: styles.white9,
    fontSize: "14px",
    display: "span",
    ...(check
      ? {
          height: "90px",
          overflow: "scroll",
        }
      : {
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: "3",
          WebkitBoxOrient: "vertical",
        }),
  }),
  showMore: {
    fontSize: "10px",
    display: "inline-flex",
    textTransform: "none",
    ml: "auto",
    p: 0,
  },
  descriptionWrapper: {
    flexDirection: "column",
    display: "inline-flex",
  },
  bookActionsWrapper: {
    flexDirection: "column",
    gap: 1,
  },
  actionButton: ({ color, check }: createStylesFuncProps) => ({
    textTransform: "none",
    fontWeight: "bold",
    fontSize: "12px",
    textWrap: "nowrap",
    color: color || "primary.main",
    border: "1px solid transparent",
    ...(check && {
      bgcolor: color || "primary.main",
      color: "#fff",
    }),
    "&:Hover": {
      bgcolor: color || "primary.main",
      color: "#fff",
      border: "1px solid #fff",
    },
  }),
  bookCheckout: {
    flexDirection: "column",
  },
  bookCheckoutText: {
    fontSize: "13px",
  },
});

export default booksStyles;
