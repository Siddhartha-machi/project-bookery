import { SxProps } from "@mui/material";
import { FC } from "react";

export type layoutProps = {
  Component: FC;
};

export type backgroundComponentProps = {
  children: React.ReactNode;
  props?: {
    firstCircleStyles: SxProps;
    secondCircleStyles: SxProps;
  };
};

export type authWapperProps = {
  Component: FC;
  AdminView?: boolean;
};
