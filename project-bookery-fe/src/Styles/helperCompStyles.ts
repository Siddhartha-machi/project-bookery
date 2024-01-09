import styles from "../Global/styles";
import createStyles from "../Helpers/createStyles";
import { createStylesFuncProps } from "../Types/helperTypes";

const helperStyles = createStyles({
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  loaderSubContainer: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  spinnerContainer: ({ size }: createStylesFuncProps) => ({
    display: "flex",
    position: "relative",
    flexDirection: "column",
    width: size || 50,
    height: size || 50,
    borderRadius: "50%",
    "@keyframes spin": {
      from: {
        transform: "rotate(0deg)",
      },
      to: {
        transform: "rotate(360deg)",
      },
    },
    animation: "infinite 2s linear spin",
  }),
  spinnerElement: ({ spread }: createStylesFuncProps) => ({
    position: "absolute",
    width: "10px",
    height: "10px",
    bgcolor: "primary.main",
    borderRadius: "50%",
    ...(spread && spread),
    boxShadow: `0 0 12px 1px ${styles.blue}`,
  }),
  loadingText: {
    fontSize: "14px",
    fontWeight: "bold",
  },
});

export default helperStyles;
