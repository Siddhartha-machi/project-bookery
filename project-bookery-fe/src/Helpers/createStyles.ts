import { SxProps } from "@mui/material";
import { createStylesFuncProps } from "../Types/helperTypes";


function createStyles<
  T extends Record<
    string,
    SxProps | ((params: createStylesFuncProps) => SxProps)
  >
>(styles: T) {
  return styles;
}

export default createStyles;
