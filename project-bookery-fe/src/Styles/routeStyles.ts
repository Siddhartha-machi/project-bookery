import createStyles from "../Helpers/createStyles";

const routeStyles = createStyles({
  underProgressWrapper: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    my: -1,
    mx: "auto",
    maxWidth: "400px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  underProgressText: {
    fontSize: 25,
    textAlign: "center",
    color: 'rgba(255,255,255,0.8)',
  },
});

export default routeStyles;
