import GLOBAL_CONSTANTS from "../Global/Constants";
import styles from "../Global/styles";
import createStyles from "../Helpers/createStyles";

const SIDEBAR_WIDTH = GLOBAL_CONSTANTS.sidebar;

const layoutStyles = createStyles({
  background: {
    display: "flex",
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#0d1117",
    overflow: "hidden",
  },
  backgroundCircle: {
    width: "50%",
    height: "100vh",
    position: "absolute",
    bgcolor: "pink",
  },
  firstCircle: {
    background: "linear-gradient(#1845ad,#23a2f6)",
    left: "-80px",
    top: "-80px",
  },
  secondCircle: {
    background: "linear-gradient(to right,#ff512f,#f09819)",
    right: "-30px",
    bottom: "-80px",
  },

  container: {
    display: "flex",
    flex: 1,
    borderRadius: GLOBAL_CONSTANTS.radius,
    position: "absolute",
    left: 15,
    right: 15,
    top: 15,
    bottom: 15,
    zIndex: 1000,
    border: styles.border,
    backdropFilter: "blur(5px)",
    bgcolor: "#161b22",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    p: 1.5,
    gap: 1,
  },
  sidBar: {
    display: "flex",
    flexDirection: "column",
    width: SIDEBAR_WIDTH,
    pb: 1.3,
    gap: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.001)",
    borderRight: styles.border,
  },
  sidebarItem: {
    display: "flex",
    flexDirection: "column",
    borderRadius: GLOBAL_CONSTANTS.radius,
    alignItems: "center",
    justifyContent: "center",
    color: styles.white8,
    backgroundColor: "#161b22",
    gap: 1,
    px: 0.5,
    py: 1.5,
    mx: 1.5,
    border: styles.borderLight,
    transition: "all 0.2s ease-in-out",
    "&:Hover": {
      backdropFilter: "blur(5px)",
      color: styles.blue,
      border: `1px solid ${styles.blue}`,
      bgcolor: "#161b22",
      boxShadow: `0 0 4px 2px ${styles.blue}`,
    },
  },
  selectedItem: {
    backdropFilter: "blur(5px)",
    color: styles.blue,
    border: `1px solid ${styles.blue}`,
    bgcolor: "#161b22",
    boxShadow: `0 0 4px 2px ${styles.blue}`,
  },
  sidebarItemIcon: {
    fontSize: 25,
    color: "inherit",
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "50%",
    borderBottom: styles.borderLight,
    color: styles.white8,
    pb: 2,
    gap: 0.6,
    m: 1,
    "&:Hover": {
      boxShadow: `0px 6px 1px 0px ${styles.white3}`,
      color: styles.white8,
      borderBottom: `1px solid ${styles.white8}`,
    },
  },
  userDetail: {
    display: "flex",
    flexDirection: "column",
    ml: 0.5,
  },
  roleWrapper: {
    display: "flex",
    ml: "auto",
    alignItems: "center",
    gap: 0.8,
  },
  inlineRole: {
    display: "flex",
    fontSize: "10px",
    fontWeight: "bold",
  },
  sidbarItemText: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "inherit",
  },
  stickyHeader: {
    display: "flex",
    position: "sticky",
    top: 10,
    gap: 1.2,
    border: styles.border,
    borderRadius: GLOBAL_CONSTANTS.radius,
    color: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    pr: 1.2,
  },
  globalSearch: {
    flex: 1,
    color: "#fff",
    borderRadius: GLOBAL_CONSTANTS.radius,
    py: 1.3,
    pl: 1,
  },
  notifications: {
    color: "#fff",
  },
  notifyCount: {
    "& .MuiBadge-badge": {
      fontSize: 9,
      height: 15,
      minWidth: 15,
    },
  },
  username: {
    fontSize: "13px",
    fontWeight: 600,
    color: styles.blue,
  },
  avatar: {
    width: 35,
    height: 35,
    p: 0,
    border: styles.border,
    "&:Hover": {
      cursor: "pointer",
    },
  },
});

export default layoutStyles;
