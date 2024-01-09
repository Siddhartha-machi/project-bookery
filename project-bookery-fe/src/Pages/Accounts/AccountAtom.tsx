import React from "react";

import { Box, InputBase, Typography } from "@mui/material";

import { editableTypoProps } from "../../Types/userAccountTypes";
import accountStyles from "../../Styles/accountStyles";

export const EditableTypography = (props: editableTypoProps) => {
  const { value, valueType, label, enableEditing, action } = props;

  return (
    <Box sx={accountStyles.ETContainer}>
      <Typography sx={accountStyles.ETLabel}>{label}</Typography>
      <Box sx={accountStyles.ETFieldContainer}>
        {enableEditing ? (
          <InputBase
            value={value}
            type={valueType}
            sx={accountStyles.ETTextField}
            onChange={(e) => action(e.target.value)}
          />
        ) : (
          <Typography sx={accountStyles.ETValue}>{value}</Typography>
        )}
      </Box>
    </Box>
  );
};
