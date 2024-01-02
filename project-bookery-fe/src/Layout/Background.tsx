import { Box } from "@mui/material";
import layoutStyles from "../Styles/layoutStyles";
import { backgroundComponentProps } from "../Types/layoutTypes";

const Background = ({ children }: backgroundComponentProps) => {
  return (
    <Box sx={layoutStyles.background}>
      <Box
        sx={{
          ...layoutStyles.backgroundCircle,
          ...layoutStyles.firstCircle,
        }}
      />
      {children}
      <Box
        sx={{
          ...layoutStyles.backgroundCircle,
          ...layoutStyles.secondCircle,
        }}
      />
    </Box>
  );
};

export default Background;
