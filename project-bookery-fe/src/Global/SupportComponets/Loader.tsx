import { Box, Typography } from "@mui/material";
import React from "react";
import { loaderPropsType } from "../../Types/helperTypes";
import helperStyles from "../../Styles/helperCompStyles";

export const Loader = (props: loaderPropsType) => {
  const size = props.size <= 70 ? props.size : 50;
  const pos = React.useMemo(
    () => [
      {
        top: -5,
        left: "42%",
      },
      {
        top: "5%",
        left: "5%",
      },
      {
        left: -5,
        top: "42%",
      },
      {
        right: "5%",
        top: "5%",
      },
      {
        right: "5%",
        bottom: "5%",
      },
      {
        right: -5,
        top: "42%",
      },
      {
        bottom: -5,
        left: "42%",
      },
      {
        bottom: "5%",
        left: "5%",
      },
    ],
    []
  );
  return (
    <Box sx={helperStyles.loaderContainer}>
      <Box sx={helperStyles.spinnerContainer({ size })}>
        {pos.map((layer, index) => {
          return (
            <Box
              key={`layer-${index}`}
              sx={helperStyles.spinnerElement({ spread: layer })}
            />
          );
        })}
      </Box>
      <Typography sx={helperStyles.loadingText}>
        {props.message ? props.message : "loading..."}
      </Typography>
    </Box>
  );
};
