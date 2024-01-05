import {
  MRT_Cell,
  MRT_Column,
  MRT_Row,
  MRT_TableInstance,
} from "material-react-table";
import React from "react";

export type bookUserActionType = {
  liked: {
    by_current_user: boolean;
    count: number;
  };
  in_reading_list: {
    by_current_user: boolean;
    count: number;
  };
  // reading: {
  //   by_current_user: boolean;
  //   count: number;
  // };
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

export type tableCellProps = {
  cell: MRT_Cell<Book, unknown>;
  column: MRT_Column<Book, unknown>;
  renderedCellValue: React.ReactNode;
  row: MRT_Row<Book>;
  rowRef?: React.RefObject<HTMLTableRowElement> | undefined;
  table: MRT_TableInstance<Book>;
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
  tableProps: tableCellProps;
  actions: bookActionType[];
};
