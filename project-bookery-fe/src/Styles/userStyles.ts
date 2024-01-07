import createStyles from "../Helpers/createStyles";
import { createStylesFuncProps } from "../Types/helperTypes";

const userStyles = createStyles({
  cellWrapper: {
    display: "flex",
    py: 2,
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    fontWeight: "bold",
  },
  headerCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    fontWeight: "bold",
  },
  userActive: ({ check }: createStylesFuncProps) => ({
    bgcolor: check ? "success.light" : "error.light",
    fontWeight: "bold",
    height: "8px",
    m: "auto",
    borderRadius: "3px",
  }),
  roleWrapper: ({ color }: createStylesFuncProps) => ({
    border: "1px solid",
    borderColor: color,
    height: "8px",
    borderRadius: "3px",
  }),
  role: ({ color }: createStylesFuncProps) => ({
    fontSize: "13px",
    fontWeight: "bold",
    color,
  }),
});

export default userStyles;
