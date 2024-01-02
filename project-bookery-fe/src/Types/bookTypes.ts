import {
  MRT_Cell,
  MRT_Column,
  MRT_Row,
  MRT_TableInstance,
} from "material-react-table";
import React from "react";

export type Book = {
  title: string;
  author: string[];
  description: string;
  checkList: {
    clubs: number;
    individual: number;
  };
  image: string;
  comment: {
    rating: number;
    user: string;
    title: string;
    description: string;
    date: string;
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
};
export type bookActionsType = {
  tableProps: tableCellProps;
  label: string;
  actions: bookActionType[];
};
