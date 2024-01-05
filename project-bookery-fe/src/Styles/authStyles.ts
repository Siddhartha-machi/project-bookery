import styles from "../Global/styles";
import createStyles from "../Helpers/createStyles";

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
    maxWidth: "350px",
    minHeight: 500,
    m: "auto",
    p: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
    bgcolor: "rgba(0,0,0,0.7)",
    zIndex: 10000,
    color: "#fff",
    borderLeft: '1px solid #000',
    border: '1px solid rgba(255,255,255,0.3)'
  },
  textField: {
    color: "#fff",
  },
});

export default authStyles;
