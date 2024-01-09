import React from "react";

import { Box, Button, Typography } from "@mui/material";

import layoutStyles from "../Styles/layoutStyles";
import { localHeaderProps } from "../Types/layoutTypes";

const LocalHeader = (props: localHeaderProps) => {
  const { pageTitle, pageCaption, options } = props;
  return (
    <Box sx={layoutStyles.localHeaderWrapper}>
      <Box sx={layoutStyles.titleWrapper}>
        <Typography sx={layoutStyles.pageTitle}>{pageTitle}</Typography>
        <Typography sx={layoutStyles.pageCaption}>{pageCaption}</Typography>
      </Box>
      <Box sx={layoutStyles.actionsWrapper}>
        {options?.map((action, index) => (
          <Button
            sx={{ ...layoutStyles.button }}
            startIcon={<action.Icon />}
            key={`book-action-${index}`}
          >
            {action.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default LocalHeader;
