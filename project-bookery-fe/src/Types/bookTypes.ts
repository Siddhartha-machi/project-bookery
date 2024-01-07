import React from "react";
import { tableCellProps } from "./tableTypes";

export type bookUserActionType = {
  liked: {
    by_current_user: boolean;
    count: number;
  };
  in_reading_list: {
    by_current_user: boolean;
    count: number;
  };
};

export type bookClubAdminActionType = {
  in_club_collection: boolean;
};

export type adminActionType = {
  deleted: boolean;
};

export type Book = {
  title: string;
  author: string[];
  description: string;
  checkList: {
    clubs: number;
    individual: number;
  };
  image: string;
  comment:
    | {
        user: string;
        title: string;
        date: string;
      }
    | undefined;
  actions: {
    user: bookUserActionType;
    club_admin: bookClubAdminActionType;
    admin: adminActionType;
  };
};

export type bookActionType = {
  label: string;
  activeLabel: string;
  Icon: React.ElementType;
  ActiveIcon: React.ElementType;
  color?: string;
  type: "DD" | "AD" | "CD";
  key:
    | keyof bookUserActionType
    | keyof bookClubAdminActionType
    | keyof adminActionType
    | string;
};
export type bookActionsType = {
  tableProps: tableCellProps<Book>;
  actions: bookActionType[];
};
