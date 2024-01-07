import { Book } from "./bookTypes";
import { user } from "./userTypes";

export type bookState = {
  data: Book[];
  filters: [];
};

export type appState = {
  loading: boolean;
  loadingLabel: string;
};

export type userState = {
  currentUser: {
    username: string | null;
    first_name: string;
    last_name: string;
    role: "admin" | "club_admin" | "user" | null;
  };
  usersList: user[];
};
