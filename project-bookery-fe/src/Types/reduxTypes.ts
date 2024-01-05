import { Book } from "./bookTypes";

export type bookState = {
  data: Book[];
  filters: [];
};

export type appState = {
    loading: boolean
}