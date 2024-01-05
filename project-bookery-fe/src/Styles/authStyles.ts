import GLOBAL_CONSTANTS from "../Global/Constants";
import createStyles from "../Helpers/createStyles";
import { createStylesFuncProps } from "../Types/helperTypes";

const authStyles = createStyles({
  container: {
    display: "flex",
    height: "100vh",
    position: "relative",
  },
  leftCircle: {
    width: "250px",
    height: "250px",
    position: "absolute",
    borderRadius: "50%",
    left: "55%",
    top: "1%",
  },
  rightCircle: {
    width: "300px",
    height: "300px",
    position: "absolute",
    borderRadius: "50%",
    right: "50%",
    bottom: "1%",
  },
  loginWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "350px",
    minHeight: "410px",
    m: "auto",
    p: 3,
    justifyContent: "space-around",
    bgcolor: "rgba(0,0,0,0.7)",
    zIndex: 10000,
    color: "#fff",
    borderLeft: "1px solid #000",
    border: "1px solid rgba(255,255,255,0.3)",
    boxShadow: "0 0 5px 0px #fff",
    gap: 1,
  },
  textField: {
    color: "#fff",
    borderRadius: GLOBAL_CONSTANTS.radius,
    border: "1px solid #fff",
    "&.Mui-focused": {
      boxShadow: "0 0 10px 0 #fff",
    },
    "&.Mui-error": {
      border: "1px solid transparent",
      borderColor: "error.light",
      boxShadow: "0 0 10px 0 red",
    },
  },
  password: {
    letterSpacing: 6,
    "& :: placeholder": {
      letterSpacing: 0,
    },
  },
  adornmentIcon: {
    ml: 1.5,
    mr: 1.2,
    bgcolor: "rgba(255,255,255,0.05)",
  },
  adornmentIconButton: {
    borderRadius: 0,
    color: "#fff",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 1,
  },
  loginTitle: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  inLineButton: {
    display: "inline",
    m: 0,
    p: 0,
    textTransform: "none",
    fontSize: "12px",
  },
  submitButton: {
    textTransform: "none",
    fontWeight: "bold",
    "&:disabled": {
      backgroundColor: "rgba(255,255,255,0.3)",
      border: "1px solid rgba(255,255,255,0.5)",
      color: "rgba(255,255,255,0.5)",
    },
  },
  errorText: {
    fontSize: "10px",
    color: "error.light",
    textAlign: "left",
  },
  labelText: ({ check }: createStylesFuncProps) => ({
    fontSize: "14px",
    fontWeight: "bold",
    mb: -0.5,
    ml: 0.5,
    color: check ? "error.main" : "#fff",
  }),
  fieldWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    mb: 1,
  },
  serverError: {
    display: "flex",
    fontSize: "12px",
    color: "error.light",
    justifyContent: "center",
    gap: 1,
    alignItems: "center",
  },
});

export default authStyles;
