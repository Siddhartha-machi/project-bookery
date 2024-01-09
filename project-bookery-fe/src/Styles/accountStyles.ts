import GLOBAL_CONSTANTS from "../Global/Constants";
import styles from "../Global/styles";
import createStyles from "../Helpers/createStyles";

const accountStyles = createStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: 1,
  },
  content: {
    display: "flex",
    flex: 1,
    gap: 2,
    p: 1,
    borderRadius: GLOBAL_CONSTANTS.radius,
  },
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    borderRadius: GLOBAL_CONSTANTS.radius,
    bgcolor: "rgba(0,0,0,0.7)",
    boxShadow: `0 0 5px 0px ${styles.white3}`,
    gap: 1,
    p: 2,
    width: "300px",
    maxWidth: "300px",
    color: "#fff",
  },
  profileImg: {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    position: "relative",
    backgroundSize: "cover",
    mx: "auto",
  },
  changeImgIcon: {
    position: "absolute",
    right: 6,
    bottom: 6,
    color: "#fff",
    borderRadius: "50%",
    "&:Hover": {
      bgcolor: styles.containerBackground,
    },
  },
  accountContainer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    gap: 1.5,
  },
  detailsHeader: {
    display: "flex",
    justifyContent: "space-between",
    color: "#fff",
    alignItems: "center",
    py: 1,
    borderBottom: `1px solid ${styles.white4}`,
  },
  editIconButton: {
    color: "#fff",
  },
  ETContainer: {
    display: "flex",
    gap: 3,
    alignItems: "center",
    justifyContent: "space-between",
    height: "35px",
  },
  ETLabel: {
    color: styles.white8,
    fontWeight: "bold",
  },
  ETValue: {
    color: styles.white10,
    fontWeight: "bold",
  },
  ETFieldContainer: {
    display: "flex",
    alignItems: "center",
  },
  ETTextField: {
    color: "#fff",
    borderRadius: GLOBAL_CONSTANTS.radius,
    border: "1px solid #fff",
    px: 1,
    "&.Mui-focused": {
      boxShadow: "0 0 10px 0 #fff",
    },
    "&.Mui-error": {
      border: "1px solid transparent",
      borderColor: "error.light",
      boxShadow: "0 0 10px 0 red",
    },
  },
});

export default accountStyles;
