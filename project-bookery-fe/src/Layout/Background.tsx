import React from "react";

import { Box } from "@mui/material";

import layoutStyles from "../Styles/layoutStyles";
import { backgroundComponentProps } from "../Types/layoutTypes";

const Background = ({ children, props }: backgroundComponentProps) => {
  return (
    <Box sx={layoutStyles.background}>
      <Box
        sx={{
          ...layoutStyles.backgroundCircle,
          ...layoutStyles.firstCircle,
          ...(props && props.firstCircleStyles),
        }}
      />
      {children}
      <Box
        sx={{
          ...layoutStyles.backgroundCircle,
          ...layoutStyles.secondCircle,
          ...(props && props.secondCircleStyles),
        }}
      />
    </Box>
  );
};

export default Background;
