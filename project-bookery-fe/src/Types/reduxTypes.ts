import { Book } from "./bookTypes";

export type bookState = {
  data: Book[];
  filters: [];
};

export type appState = {
  loading: boolean;
};

export type userState = {
  username: string | null;
  first_name: string;
  last_name: string;
  role: "admin" | "club_admin" | "user" | null;
};
